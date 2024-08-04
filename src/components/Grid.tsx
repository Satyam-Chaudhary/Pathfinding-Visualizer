import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFInding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEndTile, createNewGrid } from "../utils/helpers";

const Grid = ({
  isVisualizationRunningRef,
}: {
  isVisualizationRunningRef: MutableRefObject<boolean>;
}) => {
  const { grid, setGrid } = usePathFinding();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEndTile(row, col))
      return;
    setIsMouseDown(true);
    const newGrid = createNewGrid(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = (row:number , col:number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEndTile(row, col))
      return;
    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEndTile(row, col))
      return;
    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid);
    }
  };

  return (
    <div
      className={twMerge(
        //Base Classes
        "flex justify-center items-center flex-col border-sky-300 mt-10",
        //control height classes
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${
          MAX_ROWS * 15
        }px] sm:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        //control width classes
        `lg:min-w-[${MAX_COLS * 17}px] md:min-w-[${
          MAX_COLS * 15
        }px] sm:min-w-[${MAX_COLS * 8}px] min-w-[${MAX_COLS * 7}px] `
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => {
            const { isStart, isFinish, isWall, isTraversed, isPath } = tile;
            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                col={tile.col}
                isStart={isStart}
                isFinish={isFinish}
                isWall={isWall}
                isTraversed={isTraversed}
                isPath={isPath}
                handleMouseDown={() => handleMouseDown(tile.row, tile.col)}
                handleMouseUp={handleMouseUp}
                handleMouseEnter={() => handleMouseEnter(tile.row, tile.col)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
