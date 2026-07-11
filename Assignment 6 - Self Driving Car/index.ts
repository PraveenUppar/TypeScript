// Self-driving cars are set to be the next revolution in the automotive
// industry. This program models a car that reacts to obstacles detected
// by "computer vision" (simulated by getObstacleEvents).

import { getObstacleEvents } from "./computer-vision.js";

// ============================================
// STEP 1: Define a type/interface for the shape of obstacle events coming
// from computer vision. This matches what getObstacleEvents() returns.
// ============================================
interface ObstacleEvents {
  ObstacleLeft: boolean;
  ObstacleRight: boolean;
}

// ============================================
// STEP 2: Define a type for the car's possible directions, so we can't
// accidentally set direction to some invalid string.
// ============================================
type Direction = "straight" | "left" | "right";

// ============================================
// STEP 3: Create a Car class with properties for make, model, speed
// (mph), and current direction. Give speed and direction sensible
// defaults via the constructor.
// ============================================
class Car {
  make: string;
  model: string;
  speed: number;
  direction: Direction;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
    this.speed = 30;
    this.direction = "straight";
  }

  // ============================================
  // STEP 4: Add a method to steer left. Update direction and log the change.
  // ============================================
  steerLeft(): void {
    this.direction = "left";
    console.log(`${this.make} ${this.model} is steering left.`);
  }

  // ============================================
  // STEP 5: Add a method to steer right. Update direction and log the change.
  // ============================================
  steerRight(): void {
    this.direction = "right";
    console.log(`${this.make} ${this.model} is steering right.`);
  }

  // ============================================
  // STEP 6: Add a method to continue straight, for when there's no obstacle.
  // ============================================
  continueStraight(): void {
    this.direction = "straight";
    console.log(`${this.make} ${this.model} continues straight.`);
  }

  // ============================================
  // STEP 7: Add a method to slow down, used when the car needs to react
  // cautiously to an obstacle (e.g. one on each side).
  // ============================================
  slowDown(): void {
    this.speed = Math.max(0, this.speed - 10);
    console.log(
      `${this.make} ${this.model} is slowing down to ${this.speed} mph.`,
    );
  }

  // ============================================
  // STEP 8: Add a method that takes an ObstacleEvents reading and decides
  // how to react:
  // - obstacle on left only -> steer right
  // - obstacle on right only -> steer left
  // - obstacle on both sides -> slow down
  // - no obstacles -> continue straight
  // ============================================
  reactToObstacles(events: ObstacleEvents): void {
    const { ObstacleLeft, ObstacleRight } = events;

    if (ObstacleLeft && ObstacleRight) {
      this.slowDown();
    } else if (ObstacleLeft) {
      this.steerRight();
    } else if (ObstacleRight) {
      this.steerLeft();
    } else {
      this.continueStraight();
    }
  }
}

// ============================================
// STEP 9: Create a car instance and simulate it driving for a set number
// of "ticks," reacting to a new obstacle reading each time.
// ============================================
const myCar = new Car("Tesla", "Model 3");

const totalTicks = 10;

for (let tick = 1; tick <= totalTicks; tick++) {
  const events = getObstacleEvents();
  console.log(`Tick ${tick}:`, events);
  myCar.reactToObstacles(events);
}
