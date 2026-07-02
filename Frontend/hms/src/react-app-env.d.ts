/// <reference types="react-scripts" />

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '@mantine/core/styles.css' {
  const content: Record<string, string>;
  export default content;
}
