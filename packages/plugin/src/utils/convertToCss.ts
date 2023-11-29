import { setNormalizeCss } from '../lib/normalize';

export function convertToCss() {
	let response = '';

	// default
	response += setNormalizeCss();

	return response;
}
