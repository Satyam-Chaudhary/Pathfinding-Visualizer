import { MAX_COLS, MAX_ROWS, SPEED, WALL_TILE_STYLE } from "./constants";
import { isRowColEqual } from "./helpers";
import { SpeedType, TileType } from "./types";

export const createWall = (
  startTile: TileType,
  endTile: TileType,
  speed: SpeedType
) => {
  const delay = 6 * SPEED.find((s) => s.value === speed)!.value; // ! - to tell typescript that SPEED.find will always return a value even if compiler can't determine it

  for (let row = 0; row < MAX_ROWS; row++) {
    setTimeout(() => {
      for (let col = 0; col < MAX_COLS; col++) {
        if (row % 2 === 0 || col % 2 === 0) {
          if (
            !isRowColEqual(row, col, startTile) &&
            !isRowColEqual(row, col, endTile)
          ) {
            setTimeout(() => {
              document.getElementById(
                `tile-${row}-${col}`
              )!.className = `${WALL_TILE_STYLE} animate-wall`; // ! - to tell typescript that document.getElementById will always return a value even if compiler can't determine it
            }, delay * col);
          }
        }
      }
    }, delay * (MAX_ROWS / 2) * row); // delay*(MAX_ROWS/2) * row - to create a delay in the loop
  }
};
