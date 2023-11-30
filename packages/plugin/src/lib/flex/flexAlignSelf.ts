import { flexAlignSelf } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlexAlignSelf(screen?: string) {
	let response = '';

	for (const [key, value] of Object.entries(flexAlignSelf)) {
		// flex align self
		response += `.align-self-${mediaQueries(screen)}${key} {\n`;
		response += css('align-self', value);
		response += '}\n';
	}

	return response;
}

export default setClassFlexAlignSelf;
