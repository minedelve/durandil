import fs from 'fs/promises';
import { preset } from './presets';
import { convertToCss, minimifyCss } from './utils';
import path from 'path';

const stylesPath = path.resolve(`node_modules/@durandil/kit/dist/`, 'style.css');

function generateCss(minimify: boolean) {
	const config = preset;
	let cssString = convertToCss();

	if (minimify) cssString = minimifyCss(cssString);
	console.log(cssString);
	fs.writeFile(stylesPath, cssString);
}

export default generateCss;
