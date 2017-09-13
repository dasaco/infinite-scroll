import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './frontpage.scss';

import GalleryContainer from '../../components/gallery/galleryContainer';

class Frontpage extends Component {

	constructor(props) {
		super(props);
	}

	render() {
	  return (
			<div className="container">
				<GalleryContainer />
			</div>
	  );
	}
}

export default Frontpage;
