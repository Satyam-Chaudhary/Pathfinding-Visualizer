export type AlgorithmType = 'DIJISTRA' | 'A_STAR' | 'BFS' | 'DFS'

export type MazeType = 'NONE' | 'BINARY TREE' | 'RECURSIVE DIVISON'

export type TileType = {
    row: number;
    col: number;
    isStart: boolean;
    isFinish: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    parent: TileType | null;
}

export type GridType = TileType[][]
