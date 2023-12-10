import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-entities";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entites: normalizedRestaurants.reduce((acc, restaurant) => {
      acc[restaurant.id] = restaurant;
      return acc;
    }),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
});
