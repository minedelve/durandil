import { flexGrowShrink } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassFlexGrowShrink(screen?: string) {
	let response = '';

	for (const [key, value] of Object.entries(flexGrowShrink)) {
		// flex grow & shrink
		response += `.flex-${mediaQueries(screen)}${key} {\n`;
		response += css('flex', value, 'grow');
		response += '}\n';
	}

	return response;
}

export default setClassFlexGrowShrink;
