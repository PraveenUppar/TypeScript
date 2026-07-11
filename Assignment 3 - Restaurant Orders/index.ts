import { restaurants } from "./restaurants.js";
import type { Restaurant } from "./restaurants.js";
import { orders, PriceBracket } from "./orders.js";
import type { Order } from "./orders.js";

// ============================================
// STEP 1: Write getMaxPrice(). Given a PriceBracket, return the max
// dollar amount that bracket allows. Low = $10, Medium = $20, High = $30.
// This turns the "bracket" concept into an actual number we can compare against.
// ============================================
function getMaxPrice(priceBracket: PriceBracket): number {
  if (priceBracket === PriceBracket.Low) {
    return 10;
  } else if (priceBracket === PriceBracket.Medium) {
    return 20;
  } else {
    return 30;
  }
}

// ============================================
// STEP 2: Write getOrders(). Given a max price bracket and the full
// orders list (an array of arrays — one sub-array per restaurant),
// return a new array of arrays containing only the dishes that fit
// within the max price. Keep the same restaurant grouping structure.
// ============================================
function getOrders(priceBracket: PriceBracket, allOrders: Order[]): Order[] {
  const maxPrice = getMaxPrice(priceBracket);

  return allOrders.map((restaurantOrders) =>
    restaurantOrders.filter((order) => order.price <= maxPrice),
  );
}

// ============================================
// STEP 3: Write printOrders(). Given the restaurants list and a
// matching (filtered) orders array, print each restaurant's name
// followed by its eligible orders and their prices, formatted like:
//
// Restaurant Name #1
// - Order 1: $9.99
// - Order 2: $8.99
// ============================================
function printOrders(
  allRestaurants: Restaurant[],
  eligibleOrders: Order[],
): void {
  allRestaurants.forEach((restaurant, index) => {
    console.log(restaurant.name);

    const restaurantOrders = eligibleOrders[index];
    restaurantOrders?.forEach((order) => {
      console.log(`- ${order.name}: $${order.price}`);
    });
  });
}

// Main
const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);
