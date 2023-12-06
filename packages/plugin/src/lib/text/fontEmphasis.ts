import { fontEmphasis } from '../../constant';
import { css } from '../../utils';

function setClassFontEmphasis() {
	let response = '';
	for (const [key, value] of Object.entries(fontEmphasis)) {
		// fontEmphasis
		response += `.font-weight-${key} {\n`;
		response += css('font-weight', value);
		response += '}\n';
	}

	response += `.font-italic {\n`;
	response += css('font-style', 'italic');
	response += '}\n';
	return response;
}

export default setClassFontEmphasis;
