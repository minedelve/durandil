import { convertToCss } from './convertToCss';
import { Settings } from '../types';
import concatConfig from './concatConfig';

function generateCss(params: Settings | undefined) {
	const config = concatConfig(params);
	return convertToCss(config);
}

export default generateCss;
