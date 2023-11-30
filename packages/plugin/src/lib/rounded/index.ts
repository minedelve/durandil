import { Rounded } from '../../types';
import { css } from '../../utils';

function setClassBorderRadius(rounded: Rounded) {
	let response = '';
	for (const [key, value] of Object.entries(rounded)) {
		// global
		response += `.rounded${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-radius', value);
		response += '}\n';
		response += `.rounded-ts${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-top-left-radius', value);
		response += '}\n';
		response += `.rounded-te${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-top-right-radius', value);
		response += '}\n';
		response += `.rounded-bs${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-bottom-left-radius', value);
		response += '}\n';
		response += `.rounded-be${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-bottom-right-radius', value);
		response += '}\n';
		response += `.rounded-t${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-top-left-radius', value);
		response += css('border-top-right-radius', value);
		response += '}\n';
		response += `.rounded-b${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-bottom-left-radius', value);
		response += css('border-bottom-right-radius', value);
		response += '}\n';
		response += `.rounded-s${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-top-left-radius', value);
		response += css('border-bottom-left-radius', value);
		response += '}\n';
		response += `.rounded-e${key && key !== null ? '-' + key : ''} {\n`;
		response += css('border-top-right-radius', value);
		response += css('border-bottom-right-radius', value);
		response += '}\n';
	}
	return response;
}

export default setClassBorderRadius;
