// import React, { useRef, useEffect, useState, RefObject } from 'react';
// import './FruitFallGame.css';

// interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

// export const Canvas: React.FC<CanvasProps> = props => {
//   const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
//   const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
//   const [initialX, setInitialX] = useState<number | null>(null);
//   const [initialY, setInitialY] = useState<number | null>(null);

//   const draw = (frameCount: number, x: number, y: number) => {
//     if (context) {
//       context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//       context.fillStyle = '#e4f4a3';
//       context.beginPath();

//       context.arc(x, y, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);

//       context.fill();
//     }
//   };

//   useEffect(() => {
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       const ctx = canvas.getContext('2d');
//       setContext(ctx);

//       const initialX = Math.random() * canvas.width;
//       const initialY = Math.random() * canvas.height;
//       setInitialX(initialX);
//       setInitialY(initialY);
//     }
//   }, []);

//   useEffect(() => {
//     let frameCount = 0;
//     let animationFrameId: number;

//     if (context && initialX !== null && initialY !== null) {
//       const render = () => {
//         frameCount++;
//         draw(frameCount, initialX, initialY);
//         animationFrameId = window.requestAnimationFrame(render);
//       };
//       render();
//     }
//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, [draw, context, initialX, initialY]);

//   return <canvas ref={canvasRef} {...props} />;
// };

//_____________________________________________________________
// import React, { useRef, useEffect, useState, RefObject } from 'react';
// import './FruitFallGame.css';

// interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

// export const Canvas: React.FC<CanvasProps> = props => {
//   const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
//   const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
//   const [initialCoordinates, setInitialCoordinates] = useState<
//     { x: number; y: number }[]
//   >([]);

//   const draw = (frameCount: number) => {
//     if (context) {
//       context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//       context.fillStyle = '#e4f4a3';

//       initialCoordinates.forEach(coord => {
//         context.beginPath();
//         context.arc(
//           coord.x,
//           coord.y,
//           20 * Math.sin(frameCount * 0.05) ** 2,
//           0,
//           2 * Math.PI
//         );
//         context.fill();
//       });
//     }
//   };

//   useEffect(() => {
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       const ctx = canvas.getContext('2d');
//       setContext(ctx);

//       const newCoordinates = Array.from({ length: 40 }, () => ({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//       }));
//       setInitialCoordinates(newCoordinates);
//     }
//   }, []);

//   useEffect(() => {
//     let frameCount = 0;
//     let animationFrameId: number;

//     if (context && initialCoordinates.length > 0) {
//       const render = () => {
//         frameCount++;
//         draw(frameCount);
//         animationFrameId = window.requestAnimationFrame(render);
//       };
//       render();
//     }
//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, [draw, context, initialCoordinates]);

//   return <canvas ref={canvasRef} {...props} />;
// };

//________________________________________________________
// import React, { useRef, useEffect, useState, RefObject } from 'react';
// import './FruitFallGame.css';

// interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

// export const Canvas: React.FC<CanvasProps> = props => {
//   const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
//   const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
//   const [circles, setCircles] = useState<
//     { x: number; y: number; frameCount: number; speed: number }[]
//   >([]);

//   const draw = () => {
//     if (context) {
//       context.clearRect(0, 0, context.canvas.width, context.canvas.height);
//       context.fillStyle = '#e4f4a3';

//       circles.forEach(circle => {
//         context.beginPath();
//         context.arc(
//           circle.x,
//           circle.y,
//           20 * Math.sin(circle.frameCount * 0.05) ** 2,
//           0,
//           2 * Math.PI
//         );
//         context.fill();
//         circle.frameCount += circle.speed;
//       });
//     }
//   };

//   useEffect(() => {
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       const ctx = canvas.getContext('2d');
//       setContext(ctx);

//       const newCircles = Array.from({ length: 40 }, () => ({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         frameCount: Math.random() * 1000, // Set initial frame count randomly
//         speed: Math.random() * 0.5 + 0.1, // Set speed randomly between 0.1 and 0.6
//       }));
//       setCircles(newCircles);
//     }
//   }, []);

//   useEffect(() => {
//     let animationFrameId: number;

//     if (context && circles.length > 0) {
//       const render = () => {
//         draw();
//         animationFrameId = window.requestAnimationFrame(render);
//       };
//       render();
//     }
//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, [draw, context, circles]);

//   return <canvas ref={canvasRef} {...props} />;
// };

//_________________________________________________

// import React, { useRef, useEffect, useState, RefObject } from 'react';
// import './FruitFallGame.css';

// interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

// export const Canvas: React.FC<CanvasProps> = props => {
//   const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
//   const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
//   const [circles, setCircles] = useState<
//     { x: number; y: number; frameCount: number; speed: number; color: string }[]
//   >([]);

//   const draw = () => {
//     if (context) {
//       context.clearRect(0, 0, context.canvas.width, context.canvas.height);

//       circles.forEach(circle => {
//         context.fillStyle = circle.color;
//         context.beginPath();
//         context.arc(
//           circle.x,
//           circle.y,
//           20 * Math.sin(circle.frameCount * 0.05) ** 2,
//           0,
//           2 * Math.PI
//         );
//         context.fill();
//         circle.frameCount += circle.speed;
//       });
//     }
//   };

//   useEffect(() => {
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       const ctx = canvas.getContext('2d');
//       setContext(ctx);

//       const colors = ['#e4f4a3', '#946a76', '#a77866'];
//       const newCircles = Array.from({ length: 80 }, () => ({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         frameCount: Math.random() * 1000,
//         speed: Math.random() * 0.5 + 0.1,
//         color: colors[Math.floor(Math.random() * colors.length)],
//       }));
//       setCircles(newCircles);
//     }
//   }, []);

//   useEffect(() => {
//     let animationFrameId: number;

//     if (context && circles.length > 0) {
//       const render = () => {
//         draw();
//         animationFrameId = window.requestAnimationFrame(render);
//       };
//       render();
//     }
//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, [draw, context, circles]);

//   return <canvas ref={canvasRef} {...props} />;
// };

// __________________________________________________________
// import React, { useRef, useEffect, useState, RefObject } from 'react';
// import './FruitFallGame.css';
// import bananaImage from './banana.png';
// import appleImage from './apple.png';
// import grapesImage from './grapes.png';

// interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

// export const Canvas: React.FC<CanvasProps> = props => {
//   const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
//   const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
//   const [circles, setCircles] = useState<
//     { x: number; y: number; frameCount: number; speed: number }[]
//   >([]);

//   const draw = (banana: HTMLImageElement) => {
//     if (context) {
//       context.clearRect(0, 0, context.canvas.width, context.canvas.height);

//       circles.forEach(circle => {
//         const scaleFactor = 1 + Math.sin(circle.frameCount * 0.05) * 0.3;
//         context.save();
//         context.translate(
//           circle.x + banana.width / 2,
//           circle.y + banana.height / 2
//         );
//         context.scale(scaleFactor, scaleFactor);
//         context.drawImage(
//           banana,
//           -banana.width / 2,
//           -banana.height / 2,
//           banana.width,
//           banana.height
//         );
//         context.restore();
//         circle.frameCount += circle.speed;
//       });
//     }
//   };

//   useEffect(() => {
//     if (canvasRef.current) {
//       const canvas = canvasRef.current;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       const ctx = canvas.getContext('2d');
//       setContext(ctx);

//       const newCircles = Array.from({ length: 10 }, () => ({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         frameCount: Math.random() * 1000,
//         speed: Math.random() * 0.5 + 0.1,
//       }));
//       setCircles(newCircles);
//     }
//   }, []);

//   useEffect(() => {
//     let animationFrameId: number;

//     if (context && circles.length > 0) {
//       const banana = new Image();
//       banana.src = bananaImage;
//       banana.width = 50;
//       banana.height = 72;

//       banana.onload = () => {
//         const render = () => {
//           draw(banana);
//           animationFrameId = window.requestAnimationFrame(render);
//         };
//         render();
//       };
//     }
//     return () => {
//       window.cancelAnimationFrame(animationFrameId);
//     };
//   }, [context, circles, bananaImage]);

//   return <canvas ref={canvasRef} {...props} />;
// };

//____________________________________________________________
import React, { useRef, useEffect, useState, RefObject } from 'react';
import './FruitFallGame.css';

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

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

export const Canvas: React.FC<CanvasProps> = props => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [circles, setCircles] = useState<
    {
      x: number;
      y: number;
      frameCount: number;
      speed: number;
      fruitImage: string;
    }[]
  >([]);

  const draw = () => {
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      circles.forEach(circle => {
        const fruitImage = new Image();

        fruitImage.src = circle.fruitImage;

        const scaleFactor = 1 + Math.sin(circle.frameCount * 0.05) * 0.3;
        context.save();
        context.translate(
          circle.x + fruitImage.width / 2,
          circle.y + fruitImage.height / 2
        );
        context.scale(scaleFactor, scaleFactor);
        context.drawImage(
          fruitImage,
          -fruitImage.width / 2,
          -fruitImage.height / 2,
          fruitImage.width,
          fruitImage.height
        );
        context.restore();
        circle.frameCount += circle.speed;
      });
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      setContext(ctx);

      const newCircles = Array.from({ length: 20 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        frameCount: Math.random() * 1000,
        speed: Math.random() * 0.5 + 0.5,
        fruitImage: getRandomFruitImage(),
      }));
      setCircles(newCircles);
    }
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

  const getRandomFruitImage = () => {
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
    const randomIndex = Math.floor(Math.random() * fruitImages.length);
    return fruitImages[randomIndex];
  };

  return <canvas ref={canvasRef} {...props} />;
};
