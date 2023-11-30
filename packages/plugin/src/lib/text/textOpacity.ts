import { textOpacity } from '../../constant';
import { css } from '../../utils';

function setClassTextOpacity() {
	let response = '';
	for (const [key, value] of Object.entries(textOpacity)) {
		// textOpacity
		response += `.text-${key} {\n`;
		response += css('opacity', value);
		response += '}\n';
	}
	return response;
}

export default setClassTextOpacity;
