import { MAX_COLS, MAX_ROWS } from "./constants";
import { TileType, GridType } from "./types";

const createRow = (row: number, startTile: TileType, endTile: TileType) =>{
    const currentRow = [];
    for(let col = 0; col < MAX_COLS; col++){
        currentRow.push({
            row,
            col,
            isStart: row === startTile.row && col === startTile.col,
            isFinish: row === endTile.row && col === endTile.col,
            isWall: false,
            isPath: false,
            distance: Infinity,
            parent: null
        });
    }
    return currentRow;
}

export const createGrid = (startTile: TileType, endTile: TileType) =>{
    const grid:GridType = [];
    for(let row = 0; row < MAX_ROWS ; row++){
        grid.push(createRow(row, startTile, endTile));
    }
    return grid;
}