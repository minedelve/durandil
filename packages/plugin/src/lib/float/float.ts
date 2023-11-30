import { float } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFloat(screen?: string) {
	let response = '';
	for (const [key, value] of Object.entries(float)) {
		// float
		response += `.float-${mediaQueries(screen)}${key} {\n`;
		response += css('float', value);
		response += '}\n';
	}
	return response;
}

export default setClassFloat;
