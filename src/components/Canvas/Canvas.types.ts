export interface ImageProps {
  x: number;
  y: number;
  frameCount: number;
  speed: number;
  fruitImage: HTMLImageElement;
}

export interface CanvasProps
  extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}
