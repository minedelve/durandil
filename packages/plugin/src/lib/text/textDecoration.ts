import { textDecoration } from '../../constant';
import { css } from '../../utils';

function setClassTextDecoration() {
	let response = '';
	for (const [key, value] of Object.entries(textDecoration)) {
		// textDecoration
		response += `.text-decoration-${key} {\n`;
		response += css('text-decoration', value);
		response += '}\n';
	}
	return response;
}

export default setClassTextDecoration;
