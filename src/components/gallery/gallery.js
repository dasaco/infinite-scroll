import React, { Component } from 'react';
import axios from 'axios';
import GalleryItem from './galleryItem/galleryItem';
import './gallery.scss';

class Gallery extends Component {

	constructor(props) {
		super(props);

		this.state = {
			windowHeight: '0',
			isLoading: false,
			itemsToLoad: 9,
			page: 1,
			viewport: {
				windowTop: 0,
				windowHeight: 0
			}
		};

		this.handleScroll = this.handleScroll.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.loadMoreItems = this.loadMoreItems.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
		this.loadMoreItems(30);
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ windowHeight: window.innerHeight });
	}

	handleScroll = (element) => {
		this.setState({
      viewport: {
        windowTop: window.pageYOffset,
        windowHeight: window.innerHeight
      }
    });
		const { isLoading, itemsToLoad } = this.state;
		const { windowTop, windowHeight } = this.state.viewport;
		if(!isLoading) {
			let windowBottom = windowTop + windowHeight;
			if(windowBottom >= element.target.scrollingElement.scrollHeight) {
				this.loadMoreItems(itemsToLoad);
			}
		}
	}

	loadMoreItems(amount) {

		let { isLoading } = this.state;

		if(!isLoading) {
			this.setState({isLoading: true});
			let { page } = this.state;
			axios.get('https://api.dribbble.com/v1/shots?page=' + page + '&per_page=' + amount + '&access_token=1102173841c2fd99e249b7e250683e41df0db65672bdeb3594bef0e7e2c13306')
			.then(res => {
				let data = res.data;
				let newItems = [];
				data.map((item, i) => {
					newItems.push({
						title: item.title,
						author: item.user.name,
						image: item.images.normal
					});
				});
				page = page + 1;
				this.props.addItems(newItems);
				this.setState({isLoading: false, page});
			})
			.catch(error => {
				console.log(error);
			});
		}
	}

	renderGalleryItems() {
		const { items } = this.props;

		return items.map((item, i) => {
			return (
				<GalleryItem
					title={item.title}
					author={item.author}
					image={item.image}
					key={i}
					item={item} />
			);
		});
	}

  render() {
		const { isLoading } = this.state;
    return (
      <div className="gallery">
				{this.renderGalleryItems()}
				{isLoading && (<img className="gallery__loader rotating" src="/img/sand-clock.svg" />)}
			</div>
    );
  }
}

export default Gallery;
