import { textTransform } from '../../constant';
import { css } from '../../utils';

function setClassTextTransform() {
	let response = '';
	for (const [key, value] of Object.entries(textTransform)) {
		// textTransform
		response += `.text-${key} {\n`;
		response += css('text-transform', value);
		response += '}\n';
	}

	response += `.text-break {\n`;
	response += css('overflow-wrap', 'break-word');
	response += css('word-break', 'break-word');
	response += '}\n';
	response += `.text-no-wrap {\n`;
	response += css('white-space', 'nowrap');
	response += '}\n';
	response += `.text-truncate {\n`;
	response += css('white-space', 'nowrap');
	response += css('overflow', 'hidden');
	response += css('text-overflow', 'ellipsis');
	response += '}\n';
	return response;
}

export default setClassTextTransform;
