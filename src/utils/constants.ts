export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIG = {
    row: 1,
    col: 1,
    isStart: false,
    isFinish: false,
    isWall: false,
    isPath: false,
    distance: 0,
    parent: null,
    isTraversed: false,
};

export const END_TILE_CONFIG = {
    row: MAX_ROWS - 2,
    col: MAX_COLS - 2,
    isStart: false,
    isFinish: false,
    isWall: false,
    isPath: false,
    distance: 0,
    parent: null,
    isTraversed: false,
};