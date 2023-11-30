import { flex } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlex(screen?: string) {
	let response = '';
	for (const [key, value] of Object.entries(flex)) {
		// flex
		response += `.d-${mediaQueries(screen)}${key} {\n`;
		response += css('display', value);
		response += '}\n';
	}

	return response;
}

export default setClassFlex;
