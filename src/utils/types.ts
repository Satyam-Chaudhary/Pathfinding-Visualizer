export type AlgorithmType = 'DIJISTRA' | 'A_STAR' | 'BFS' | 'DFS'

export type MazeType = 'NONE' | 'BINARY TREE' | 'RECURSIVE DIVISON'

export interface MazeSelectType{
    name: string;
    value: MazeType;
}

export type TileType = {
    row: number;
    col: number;
    isStart: boolean;
    isFinish: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    isTraversed: boolean;
    parent: TileType | null;
}

export type GridType = TileType[][]

export enum SpeedType {
    SLOW = 50,
    MEDIUM = 25,
    FAST = 10
}
