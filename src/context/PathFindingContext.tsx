import { Children, createContext, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";

interface PathFindingContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}


export const PathFindingContext = createContext<PathFindingContextInterface | undefined>(undefined);

export const PathFindingProvider = ({children}: {children: React.ReactNode}) =>{
    const [algorithm, setAlgorithm] = useState<AlgorithmType>('DIJISTRA');
    const [maze, setMaze] = useState<MazeType>('NONE');
    const [grid, setGrid] = useState<GridType>([]);
}