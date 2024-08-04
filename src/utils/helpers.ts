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
            isTraversed: false,
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

export const checkIfStartOrEndTile = (row: number, col: number) =>{
    return (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2);
};

export const createNewGrid = (grid: GridType, row: number, col: number) =>{
    const newGrid = grid.slice();
    const newTile = {
        ...newGrid[row][col],
        isWall: !newGrid[row][col].isWall
    }
    newGrid[row][col] = newTile;
    return newGrid;
};