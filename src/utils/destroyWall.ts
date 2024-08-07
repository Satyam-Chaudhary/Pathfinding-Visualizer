import { doc } from "prettier";
import { GridType, SpeedType } from "./types";
import { SPEED, TILE_STYLE } from "./constants";
import { sleep } from "./helpers";

export const destroyWall = async(grid: GridType, row: number, col: number, isRight: number, speed: SpeedType) => {
    if(isRight && grid[row][col+1]){
        grid[row][col+1].isWall = false;
        document.getElementById(`tile-${row}-${col+1}`)!.className = TILE_STYLE;
        await sleep(20*SPEED.find((s) => s.value === speed)!.value - 5);
    }else if(grid[row+1][col]){
        grid[row+1][col].isWall = false;
        document.getElementById(`tile-${row+1}-${col}`)!.className = TILE_STYLE;
        await sleep(20*SPEED.find((s) => s.value === speed)!.value - 5);
    }else{
        grid[row][col].isWall = false;
        document.getElementById(`tile-${row}-${col}`)!.className = TILE_STYLE;
        await sleep(20*SPEED.find((s) => s.value === speed)!.value - 5);
    }
}