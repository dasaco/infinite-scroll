import React, { Component } from 'react';

import './frontpage.scss';

import Gallery from '../../components/gallery/gallery';

class Frontpage extends Component {

	constructor(props) {
		super(props);
	}

	render() {
	  return (
			<Gallery />
	  );
	}
}

export default Frontpage;
