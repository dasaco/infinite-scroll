import React, { Component } from 'react';

import './gallery.scss';

import axios from 'axios';

import GalleryItem from './galleryItem/galleryItem';

class Gallery extends Component {

	constructor(props) {
		super(props);

		this.state = {
			windowHeight: '0',
			isLoading: false,
			itemsToLoad: 9
		};

		this.handleScroll = this.handleScroll.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.loadMoreItems = this.loadMoreItems.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
		this.loadMoreItems();
		this.loadMoreItems();
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ windowHeight: window.innerHeight });
	}

	handleScroll = (element) => {
		const { isLoading } = this.state;
		if(!isLoading) {
			let { windowHeight } = this.state;
			windowHeight += element.target.scrollingElement.scrollTop;
			if(windowHeight >= element.target.scrollingElement.scrollHeight - 300) {
				this.setState({isLoading: true});
				this.loadMoreItems();
			}
		}
	}

	loadMoreItems() {
		const { itemsToLoad } = this.state;
		axios.get('https://api.dribbble.com/v1/shots?per_page=' + itemsToLoad + '&access_token=1102173841c2fd99e249b7e250683e41df0db65672bdeb3594bef0e7e2c13306')
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

			console.log(data);

			this.props.addItems(newItems);

			this.setState({isLoading: false});
		})
		.catch(error => {
			console.log(error);
		});
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
    return (
      <div className="gallery">
				{this.renderGalleryItems()}
			</div>
    );
  }
}

export default Gallery;
