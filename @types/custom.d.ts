declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module 'styled-components';

declare module 'nanoid' {
  export default function nanoid(size?: number): string;
}
