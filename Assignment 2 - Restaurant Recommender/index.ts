import restaurants from "./restaurants.js";
import { type Restaurant } from "./restaurants.js";

// ============================================
// STEP 1: Get the current hour so we can check which restaurants are open
// ============================================
const currentHour = new Date().getHours();

// ============================================
// STEP 2: Write a helper function that checks if a restaurant is currently open.
// Handle the case where closeHour < openHour is impossible here (all your
// sample data doesn't wrap past midnight.
// ============================================
function isOpen(restaurant: Restaurant, hour: number): boolean {
  return hour >= restaurant.openHour && hour < restaurant.closeHour;
}

// ============================================
// STEP 3: Filter the full restaurant list down to only those open right now
// ============================================
function getOpenRestaurants(
  allRestaurants: Restaurant[],
  hour: number,
): Restaurant[] {
  return allRestaurants.filter((restaurant) => isOpen(restaurant, hour));
}

// ============================================
// STEP 4: Filter by user's max price bracket (1 = $, 2 = $$, 3 = $$$).
// Keep only restaurants at or below what the user is willing to pay.
// ============================================
function filterByPrice(list: Restaurant[], maxPrice: number): Restaurant[] {
  return list.filter((restaurant) => restaurant.priceBracket <= maxPrice);
}

// ============================================
// STEP 5: Filter by max delivery time the user is willing to wait
// ============================================
function filterByDeliveryTime(
  list: Restaurant[],
  maxMinutes: number,
): Restaurant[] {
  return list.filter(
    (restaurant) => restaurant.deliveryTimeMinutes <= maxMinutes,
  );
}

// ============================================
// STEP 6: Filter by max distance the user is willing to have food travel
// ============================================
function filterByDistance(
  list: Restaurant[],
  maxDistance: number,
): Restaurant[] {
  return list.filter((restaurant) => restaurant.distance <= maxDistance);
}

// ============================================
// STEP 7: Combine all the filters into one function that takes user
// preferences and narrows the full list down step by step
// ============================================
interface UserPreferences {
  maxPrice: number;
  maxDeliveryTime: number;
  maxDistance: number;
}

function getMatchingRestaurants(
  allRestaurants: Restaurant[],
  prefs: UserPreferences,
  hour: number,
): Restaurant[] {
  let matches = getOpenRestaurants(allRestaurants, hour);
  matches = filterByPrice(matches, prefs.maxPrice);
  matches = filterByDeliveryTime(matches, prefs.maxDeliveryTime);
  matches = filterByDistance(matches, prefs.maxDistance);
  return matches;
}

// ============================================
// STEP 8: From the matches, pick the single "best" recommendation.
// Here we define "best" as closest distance, then fastest delivery
// as a tiebreaker.
// ============================================
function recommendBest(matches: Restaurant[]): Restaurant | null {
  if (matches.length === 0) return null;

  return matches.reduce((best, current) => {
    if (current.distance < best.distance) return current;
    if (
      current.distance === best.distance &&
      current.deliveryTimeMinutes < best.deliveryTimeMinutes
    ) {
      return current;
    }
    return best;
  });
}

// ============================================
// STEP 9: Tie it all together — define a user's preferences, run the
// filters, and print out a recommendation (or a "nothing found" message)
// ============================================
const userPreferences: UserPreferences = {
  maxPrice: 2,
  maxDeliveryTime: 45,
  maxDistance: 10,
};

const matches = getMatchingRestaurants(
  restaurants,
  userPreferences,
  currentHour,
);

const recommendation = recommendBest(matches);

if (recommendation) {
  console.log(
    `We recommend: ${recommendation.name} (Price: ${"$".repeat(
      recommendation.priceBracket,
    )}, Delivery: ${recommendation.deliveryTimeMinutes} min, Distance: ${
      recommendation.distance
    } mi)`,
  );
} else {
  console.log("Sorry, no restaurants match your preferences right now.");
}
