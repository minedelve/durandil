import { display } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassDisplay(screen?: string) {
	let response = '';
	for (const [key, value] of Object.entries(display)) {
		// display
		response += `.d-${mediaQueries(screen)}${key} {\n`;
		response += css('display', value);
		response += '}\n';
	}
	return response;
}

export default setClassDisplay;
