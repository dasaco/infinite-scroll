import { connect } from 'react-redux';
import { addItems } from 'services/gallery/galleryActions';

import Gallery from './gallery';

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
