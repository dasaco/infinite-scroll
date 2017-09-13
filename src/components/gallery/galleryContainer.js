import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from './gallery';
import { addItems } from 'services/gallery/galleryActions';

const mapStateToProps = (state) => {
  const { items } = state.galleryReducer;

  return {
    items,
  };
};

const mapDispatchToProps = dispatch => ({
  addItems: (items) => {
    dispatch(addItems(items));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
