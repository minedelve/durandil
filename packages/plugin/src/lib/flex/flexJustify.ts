import { flexJustify } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlexJustify(screen?: string) {
	let response = '';

	for (const [key, value] of Object.entries(flexJustify)) {
		// flex justify
		response += `.justify-${mediaQueries(screen)}${key} {\n`;
		response += css('justify-content', value);
		response += '}\n';
	}

	return response;
}

export default setClassFlexJustify;
