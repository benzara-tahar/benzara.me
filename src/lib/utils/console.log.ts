export const logCss = (size = 14, color = 'white', background = '#303030') => `
    font-size: ${size}px; font-weight: bold; color: ${color};padding: 10px; margin:4px; background: ${background}; border-radius: 0 24px 24px;`;

export const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
