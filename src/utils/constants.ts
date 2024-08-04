import { MazeSelectType, MazeType } from "./types";

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

export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] sm:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] sm:h-[8px] h-[7px] border-t border-r border-sky-200 ";

export const TRAVERSED_TILE_STYLE = TILE_STYLE + "bg-cyan-200";

export const START_TILE_STYLE = TILE_STYLE + "bg-green-400";

export const END_TILE_STYLE = TILE_STYLE + "bg-red-400";

export const WALL_TILE_STYLE = TILE_STYLE + "bg-gray-300";

export const PATH_TILE_STYLE = TILE_STYLE + "bg-green-500";

export const MAZES: MazeSelectType[] = [
  {
    name: "No Maze",
    value: "NONE",
  },
  {
    name: "Binary Tree",
    value: "BINARY TREE",
  },
  {
    name: "Recursive Division",
    value: "RECURSIVE DIVISON",
  },
];
