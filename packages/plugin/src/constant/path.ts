import path from 'path';
const rootDir = process.cwd();

export const stylesPath = path.resolve(`node_modules/@durandil/kit/dist/`, 'style.css');
export const configPath = path.resolve(rootDir, 'durandil.config.json');
