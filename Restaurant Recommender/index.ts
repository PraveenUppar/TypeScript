import restaurants from "./restaurants.js";
import { type Restaurant } from "./restaurants.js";

// filters
const price = 2;
const deliveryTimeMax = 90;
const maxDistance = 10;

let result: string;

const filteredRestaurants = restaurants.filter((restaurant: Restaurant) => {
  return (
    restaurant.priceBracket <= price &&
    restaurant.deliveryTimeMinutes <= deliveryTimeMax &&
    restaurant.distance <= maxDistance
  );
});

if (filteredRestaurants.length === 0) {
  result = "There are no restaurants available right now.";
} else {
  result = `We found ${filteredRestaurants.length} restaurants.`;
}

console.log(result);

// npx tsx "Restaurant Recommender/index.ts"
