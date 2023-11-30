import { flexDirection } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlexDirection(screen?: string) {
	let response = '';
	for (const [key, value] of Object.entries(flexDirection)) {
		// flex direction
		response += `.flex-${mediaQueries(screen)}${key} {\n`;
		response += css('flex-direction', value);
		response += '}\n';
	}

	return response;
}

export default setClassFlexDirection;
