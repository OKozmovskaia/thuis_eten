export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
export const selectRestaurantNameById = (state, id) =>
  selectRestaurantModule(state).entities[id].name;

export const selectRestaurantMenuById = (state, id) =>
  selectRestaurantModule(state).entities[id].menu;

export const selectRestaurantReviewsById = (state, id) =>
  selectRestaurantModule(state).entities[id].reviews;
