export const ADD_ITEMS = 'ADD_ITEMS';

export function addItems(items) {
  return {
    type: ADD_ITEMS,
    items,
  };
}
