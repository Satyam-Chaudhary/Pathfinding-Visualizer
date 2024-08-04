import { usePathFinding } from "../hooks/usePathFInding";
import { MAZES } from "../utils/constants";
import PlayBtn from "./PlayBtn";
import Select from "./Select";

export default function Nav() {
    const {maze} = usePathFinding();
  return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0 ">
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1 text-white">
          Pathfinding Visualizer
        </h1>
        <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
            <Select
            label="Maze"
            value={maze}
            options = {MAZES}
            onChange={(e) => {
                // handle generating maze
            
            }}
            isDisabled = {false}
            />
            
        </div>
      </div>
    </div>
  );
}
