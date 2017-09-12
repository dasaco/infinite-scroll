import React, { Component } from 'react';

import './gallery.scss';

import GalleryItem from './galleryItem/galleryItem';

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
				<GalleryItem />
			</div>
    );
  }
}

export default Gallery;
