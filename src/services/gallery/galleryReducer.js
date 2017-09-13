import * as actions from './galleryActions';

const initialState = {
  items: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, ...action.items],
      };

    default:
      return state;
  }
}

export default reducer;
