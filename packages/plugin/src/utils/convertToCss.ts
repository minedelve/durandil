import { setNormalizeCss } from '../lib/normalize';

function convertToCss() {
	let response = '';

	// default
	response += setNormalizeCss();

	return response;
}

export default convertToCss;
