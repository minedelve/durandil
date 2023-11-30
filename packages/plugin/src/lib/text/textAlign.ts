import { textAlign } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassTextAlign(screen?: string) {
	let response = '';
	for (const [key, value] of Object.entries(textAlign)) {
		// textAlign
		response += `.text-${mediaQueries(screen)}${key} {\n`;
		response += css('text-align', value);
		response += '}\n';
	}
	return response;
}

export default setClassTextAlign;
