import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFInding"
import { MAX_COLS, MAX_ROWS } from "../utils/constants";

const Grid = () => {
    const {grid} = usePathFinding();
  return (

    <div className= {
        twMerge(
            //Base Classes
            "flex justify-center items-center flex-col border-sky-300",
            //control height classes
            `lg:min-h-[${MAX_ROWS * 17}px]`,
            //control width classes
            `lg:min-w-[${MAX_COLS * 17}px]`
        )
    }>
        {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
                {row.map((tile, tileIndex) => (
                    <div key={tileIndex} className="bg-white border h-3 w-3">
                    </div>
                ))}
            </div>
        ))}
      
    </div>
  )
}

export default Grid
