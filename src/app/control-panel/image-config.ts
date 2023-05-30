
export interface ImageConfig {

    fileName: string;
    height: number;
    width: number;
    loaded: boolean;
    grid: Grid;
    
}

interface Grid {
    pixels: number;
    opacity: number;
    color: string;
}