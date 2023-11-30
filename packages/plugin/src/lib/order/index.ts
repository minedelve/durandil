import { order } from '../../constant';
import { css, mediaQueries } from '../../utils';

function setClassOrder(screen?: string) {
	let response = '';

	for (const [key, value] of Object.entries(order)) {
		// order
		response += `.order-${mediaQueries(screen)}${key} {\n`;
		response += css('order', value);
		response += '}\n';
	}

	return response;
}

export default setClassOrder;
