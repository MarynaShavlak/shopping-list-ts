import React, { useRef, useEffect, useState, RefObject } from 'react';
import './Canvas.css';
import { CanvasProps } from './Canvas.types.ts';
import { ImageProps } from './Canvas.types.ts';
// import { Image } from './Canvas.types.ts';

import img1 from './images/1.svg';
import img2 from './images/2.svg';
import img3 from './images/3.svg';
import img4 from './images/4.svg';
import img5 from './images/5.svg';
import img6 from './images/6.svg';
import img7 from './images/7.svg';
import img8 from './images/8.svg';
import img9 from './images/9.svg';
import img10 from './images/10.svg';

const fruitImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];
const imageObjects = fruitImages.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

export const Canvas: React.FC<CanvasProps> = props => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [images, setImages] = useState<ImageProps[]>([]);

  const drawImage = (image: ImageProps) => {
    const { x, y, frameCount, speed, fruitImage } = image;
    const scaleFactor = 1 + Math.sin(frameCount * 0.05) * 0.4;
    context?.save();
    context?.translate(x + fruitImage.width / 2, y + fruitImage.height / 2);
    context?.scale(scaleFactor, scaleFactor);
    context?.drawImage(
      fruitImage,
      -fruitImage.width / 2,
      -fruitImage.height / 2
    );
    context?.restore();
    image.frameCount += speed;
  };

  const draw = () => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      images.forEach(drawImage);
    }
  };

  const handleResize = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      setContext(ctx);
      const windowWidth = window.innerWidth;
      let imagesQuantity;

      switch (true) {
        case windowWidth >= 320 && windowWidth < 768:
          imagesQuantity = 20;

          break;
        case windowWidth >= 768 && windowWidth < 1200:
          imagesQuantity = 40;

          break;
        case windowWidth > 1200:
          imagesQuantity = 50;

          break;
        default:
          imagesQuantity = 20;
      }
      setImages(generateImages(imagesQuantity));
    }
  };

  const isWithinAppBounds = (
    x: number,
    y: number,
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ) => {
    return x > startX && x < endX && y > startY && y < endY;
  };
  const getInitialPosition = () => {
    const AppWrap = document.querySelector('.app');
    if (!AppWrap) {
      throw new Error('Could not find .app element');
    }

    const AppWrapRect = AppWrap.getBoundingClientRect();
    const startX = AppWrapRect.left - 100;
    const startY = AppWrapRect.top - 40;
    const endX = AppWrapRect.right;
    const endY = AppWrapRect.bottom;

    let withinBounds = false;
    let x = 0;
    let y = 0;

    while (!withinBounds) {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
      if (!isWithinAppBounds(x, y, startX, startY, endX, endY)) {
        withinBounds = true;
      }
    }

    return { x, y };
  };

  const hasIntersection = (
    images: ImageProps[],
    newPosition: { x: number; y: number }
  ): boolean => {
    for (const image of images) {
      const distance = Math.sqrt(
        (image.x - newPosition.x) ** 2 + (image.y - newPosition.y) ** 2
      );
      if (distance < 100) {
        return true;
      }
    }
    return false;
  };

  const generateImages = (imagesQuantity: number) => {
    const newImages = [];
    for (let i = 0; i < imagesQuantity; i++) {
      let position = getInitialPosition();
      while (hasIntersection(newImages, position)) {
        position = getInitialPosition();
      }
      const { x, y } = position;
      newImages.push({
        x,
        y,
        frameCount: Math.random() * 1000,
        speed: Math.random() * 0.5 + 0.5,
        fruitImage:
          imageObjects[Math.floor(Math.random() * imageObjects.length)],
      });
    }
    return newImages;
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    if (context && images.length > 0) {
      const render = () => {
        draw();
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [context, images]);

  return <canvas ref={canvasRef} {...props} />;
};
