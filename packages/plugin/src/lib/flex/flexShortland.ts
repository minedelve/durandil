import { flexShorthand } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlexShortland(screen?: string) {
	let response = '';
	for (const [key, value] of Object.entries(flexShorthand)) {
		// flex shortland
		response += `.flex-${mediaQueries(screen)}${key} {\n`;
		response += css('flex', value);
		response += '}\n';
	}

	return response;
}

export default setClassFlexShortland;
