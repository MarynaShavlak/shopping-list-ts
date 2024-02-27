export interface CircleProps {
  x: number;
  y: number;
  frameCount: number;
  speed: number;
  color: string;
}

export interface CanvasProps
  extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

export interface AppBoundsProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export interface InitialPositionProps {
  x: number;
  y: number;
}

export type PositionWithBounds = AppBoundsProps & InitialPositionProps;
