import {
	createStore,
	combineReducers
} from 'redux';

import galleryReducer from 'services/gallery/galleryReducer';

const rootReducer = combineReducers({
	galleryReducer
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
