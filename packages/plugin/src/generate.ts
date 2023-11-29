import fs from 'fs/promises';
import { preset } from './presets';
import convertToCss from './utils/convertToCss';
import path from 'path';

const stylesPath = path.resolve(`node_modules/@durandil/kit/dist/`, 'style.css');

function generateCss() {
	const config = preset;
	const cssString = convertToCss();

	console.log(cssString);
	fs.writeFile(stylesPath, cssString);
}

export default generateCss;
