import { alignContent } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlexAlignContent(screen?: string) {
	let response = '';

	for (const [key, value] of Object.entries(alignContent)) {
		// align content
		response += `.align-content-${mediaQueries(screen)}${key} {\n`;
		response += css('align-content', value);
		response += '}\n';
	}

	return response;
}

export default setClassFlexAlignContent;
