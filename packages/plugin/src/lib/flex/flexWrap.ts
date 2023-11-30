import { flexWrap } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlexWrap(screen?: string) {
	let response = '';

	for (const [key, value] of Object.entries(flexWrap)) {
		// flex wrap
		response += `.flex-${mediaQueries(screen)}${key} {\n`;
		response += css('flex-wrap', value);
		response += '}\n';
	}

	return response;
}

export default setClassFlexWrap;
