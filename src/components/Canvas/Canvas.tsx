import React, { useRef, useEffect, useState } from 'react';
import { throttle } from 'lodash';
import './Canvas.css';
import {
  CircleProps,
  CanvasProps,
  PositionWithBounds,
  InitialPositionProps,
} from './Canvas.types';

const colors: string[] = ['#8fcf18', '#fff', '#615f5f', '#9eeb0d'];

export const Canvas: React.FC<CanvasProps> = props => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [circles, setCircles] = useState<CircleProps[]>([]);

  const drawCircle = (circle: CircleProps) => {
    if (context) {
      context.fillStyle = circle.color;
      context.beginPath();
      context.arc(
        circle.x,
        circle.y,
        20 * Math.sin(circle.frameCount * 0.05) ** 2,
        0,
        2 * Math.PI
      );
      context.fill();
      circle.frameCount += circle.speed;
    }
  };

  const draw = () => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      circles.forEach(drawCircle);
    }
  };
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let circlesQuantity;
        const windowWidth = window.innerWidth;

        switch (true) {
          case windowWidth >= 320 && windowWidth < 768:
            circlesQuantity = 20;
            break;
          case windowWidth >= 768 && windowWidth < 1200:
            circlesQuantity = 40;
            break;
          case windowWidth > 1200:
            circlesQuantity = 50;
            break;
          default:
            circlesQuantity = 20;
        }

        setCircles(generateCircles(circlesQuantity));
        setContext(ctx);
      }
    }
  };

  const isWithinAppBounds = ({
    x,
    y,
    startX,
    startY,
    endX,
    endY,
  }: PositionWithBounds): boolean => {
    return x > startX && x < endX && y > startY && y < endY;
  };

  const getInitialPosition = (): InitialPositionProps => {
    const appWrap = document.querySelector('.app');
    if (!(appWrap instanceof Element)) {
      throw new Error('Could not find .app element');
    }

    const appWrapRect = appWrap.getBoundingClientRect();
    const startX = appWrapRect.left - 100;
    const startY = appWrapRect.top - 40;
    const endX = appWrapRect.right;
    const endY = appWrapRect.bottom;

    let withinBounds = false;
    let x = 0;
    let y = 0;

    while (!withinBounds) {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
      if (!isWithinAppBounds({ x, y, startX, startY, endX, endY })) {
        withinBounds = true;
      }
    }

    return { x, y };
  };
  const hasIntersection = (
    circles: CircleProps[],
    newPosition: InitialPositionProps
  ): boolean => {
    for (const circle of circles) {
      const distance = Math.sqrt(
        (circle.x - newPosition.x) ** 2 + (circle.y - newPosition.y) ** 2
      );
      if (distance < 100) {
        return true;
      }
    }
    return false;
  };

  const generateCircles = (circlesQuantity: number): CircleProps[] => {
    const newCircles = [];
    for (let i = 0; i < circlesQuantity; i++) {
      let position: InitialPositionProps = getInitialPosition();
      while (hasIntersection(newCircles, position)) {
        position = getInitialPosition();
      }
      const { x, y } = position;
      newCircles.push({
        x,
        y,
        frameCount: Math.random() * 1000,
        speed: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return newCircles;
  };

  useEffect(() => {
    handleResize();
    const handleResizeThrottled = throttle(handleResize, 200);
    window.addEventListener('resize', handleResizeThrottled);
    return () => {
      window.removeEventListener('resize', handleResizeThrottled);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    if (context && circles.length > 0) {
      const render = () => {
        draw();
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [context, circles]);

  return <canvas ref={canvasRef} />;
};
