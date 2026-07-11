// create the image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData();

// draw head
drawRectangle(0, 0, 20, 8);
// eyes
drawDot(7, 2);
drawDot(12, 2);
// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
// BUG FIX: "4" (string) -> 4 (number), to match drawDot's number parameter
drawDot(15, 4);

// output what we drew to the console
outputImage();

function drawRectangle(x: number, y: number, width: number, height: number) {
  // top
  drawHorizontalLine(x, y, width);
  // bottom
  drawHorizontalLine(x, y + height - 1, width);
  // left
  drawVerticalLine(x, y, height);
  // right
  drawVerticalLine(x + width - 1, y, height);
}

/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 */
// BUG FIX: return type changed from `string` to `boolean` to match what
// the function actually returns. `y` changed from optional to required,
// since the comparisons below don't work correctly with `undefined`.
function isPointInImage(x: number, y: number): boolean {
  return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

// ============================================
// STEP 1 (missing function): setPixel() turns a single pixel on (or off)
// at the given x, y coordinate. It should:
// - do nothing if the point is outside the image (use isPointInImage)
// - otherwise, use the row-major formula (y * imageWidth + x) to find
//   the correct index in imageData and set it to `value`
// ============================================
function setPixel(x: number, y: number, value: boolean = true): void {
  if (!isPointInImage(x, y)) {
    return;
  }

  const index = y * imageWidth + x;
  imageData[index] = value;
}

// ============================================
// STEP 2 (missing function): drawDot() turns on a single pixel at (x, y).
// This can just delegate to setPixel().
// ============================================
function drawDot(x: number, y: number): void {
  setPixel(x, y);
}

// ============================================
// STEP 3 (missing function): drawHorizontalLine() turns on a row of
// pixels, starting at (x, y) and extending `width` pixels to the right.
// ============================================
function drawHorizontalLine(x: number, y: number, width: number): void {
  for (let i = x; i < x + width; i++) {
    setPixel(i, y);
  }
}

// ============================================
// STEP 4 (missing function): drawVerticalLine() turns on a column of
// pixels, starting at (x, y) and extending `height` pixels downward.
// ============================================
function drawVerticalLine(x: number, y: number, height: number): void {
  for (let i = y; i < y + height; i++) {
    setPixel(x, i);
  }
}

/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 */
// BUG FIX: offChar now has a type annotation (string) and a default
// value ("-"), matching how onChar is declared, since outputImage()
// is called with no arguments.
function outputImage(onChar: string = "X", offChar: string = "-"): void {
  let text = "";

  for (let i = 0; i < imageData.length; i++) {
    if (i > 0 && i % imageWidth === 0) {
      text += "\n"; // new line
    }

    // BUG FIX: was `offChar * 2` (invalid — multiplying a string), now
    // just prints offChar once per "off" pixel.
    text += imageData[i] ? onChar : offChar;
  }

  console.log(text);
}

/**
 * Creates an array of booleans where a pixel
 * is "on" when the value is `true` and "off"
 * when the value is `false`.
 *
 * The pixel values are stored in rows
 * (row-major order) where the index of a
 * pixel in the array can be found via:
 *
 *     index = y * imageWidth + x
 *
 * `x` is the horizontal position in the image
 * and `y` is the vertical position from the top
 * left corner.
 */
function createImageData(): boolean[] {
  // create array of size `length` containing `false` values
  const length = imageWidth * imageHeight;
  return new Array(length).fill(false);
}
