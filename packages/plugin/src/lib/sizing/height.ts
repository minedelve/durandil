import { height } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassHeight(screen?: string) {
	let response = '';
	for (const [key, value] of Object.entries(height)) {
		// height
		response += `.h-${mediaQueries(screen)}${key} {\n`;
		response += css('height', value);
		response += '}\n';
	}
	return response;
}

export default setClassHeight;
