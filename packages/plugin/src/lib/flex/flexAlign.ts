import { flexAlign } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlexAlign(screen?: string) {
	let response = '';

	for (const [key, value] of Object.entries(flexAlign)) {
		// flex align
		response += `.align-${mediaQueries(screen)}${key} {\n`;
		response += css('align-items', value);
		response += '}\n';
	}

	return response;
}

export default setClassFlexAlign;
