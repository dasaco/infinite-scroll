import React, { Component } from 'react';

import { HeartOutline, Heart } from 'misc/icons';
import './galleryItem.scss';

class GalleryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false,
    };

    this.onLikeClicked = this.onLikeClicked.bind(this);
  }

  onLikeClicked() {
    const { isLiked } = this.state;
    this.setState({ isLiked: !isLiked });
  }

  render() {
    const { title, author, image } = this.props;
    const { isLiked } = this.state;

    const itemStyle = {
      backgroundImage: `url(${image})`,
    };

    return (
      <div className="gallery__item" style={itemStyle}>
        <div className="gallery__item-hover">
          <h2 className="gallery__item-title">{title}</h2>
          <div className="gallery__item-separator" />
          <p className="gallery__item-author">{author}</p>
          <a className="gallery__item-link" onClick={this.onLikeClicked}>
            { isLiked ? 'Unfavourite' : 'Favourite' }
          </a>
        </div>
        <div className="gallery__item-like">
          {isLiked && <Heart size="15" color="rgba(234, 67, 67, 1)" />}
        </div>
      </div>
    );
  }
}

export default GalleryItem;
