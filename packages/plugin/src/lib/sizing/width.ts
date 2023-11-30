import { width } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassWidth(screen?: string) {
	let response = '';
	for (const [key, value] of Object.entries(width)) {
		// width
		response += `.h-${mediaQueries(screen)}${key} {\n`;
		response += css('width', value);
		response += '}\n';
	}
	return response;
}

export default setClassWidth;
