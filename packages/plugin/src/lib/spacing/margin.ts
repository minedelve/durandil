import { margin } from '../../constant';
import { mediaQueries } from '../../utils';

function setClassMargin(screen?: string) {
	let response = '';
	for (const [, value] of Object.entries(margin)) {
		// margin top
		response += `.mt-${mediaQueries(screen)}${value} {\n`;
		response += css('margin', value, 'top');
		response += '}\n';
		// margin bottom
		response += `.mb-${mediaQueries(screen)}${value} {\n`;
		response += css('margin', value, 'bottom');
		response += '}\n';
		// margin left
		response += `.ml-${mediaQueries(screen)}${value} {\n`;
		response += css('margin', value, 'left');
		response += '}\n';
		// margin right
		response += `.mr-${mediaQueries(screen)}${value} {\n`;
		response += css('margin', value, 'right');
		response += '}\n';
		// margin left & right
		response += `.mx-${mediaQueries(screen)}${value} {\n`;
		response += css('margin', value, 'left');
		response += css('margin', value, 'right');
		response += '}\n';
		// margin top & bottom
		response += `.my-${mediaQueries(screen)}${value} {\n`;
		response += css('margin', value, 'top');
		response += css('margin', value, 'bottom');
		response += '}\n';
		// margin all
		response += `.ma-${mediaQueries(screen)}${value} {\n`;
		response += css('margin', value);
		response += '}\n';

		if (value !== 'auto') {
			// margin negative top
			response += `.mt-${mediaQueries(screen)}n${value} {\n`;
			response += css('margin', value, 'top', '-');
			response += '}\n';
			// margin negative bottom
			response += `.mb-${mediaQueries(screen)}n${value} {\n`;
			response += css('margin', value, 'bottom', '-');
			response += '}\n';
			// margin negative left
			response += `.ml-${mediaQueries(screen)}n${value} {\n`;
			response += css('margin', value, 'left', '-');
			response += '}\n';
			// margin negative right
			response += `.mr-${mediaQueries(screen)}n${value} {\n`;
			response += css('margin', value, 'right', '-');
			response += '}\n';
			// margin negative left & right
			response += `.mx-${mediaQueries(screen)}n${value} {\n`;
			response += css('margin', value, 'left', '-');
			response += css('margin', value, 'right', '-');
			response += '}\n';
			// margin negative top & bottom
			response += `.my-${mediaQueries(screen)}n${value} {\n`;
			response += css('margin', value, 'top', '-');
			response += css('margin', value, 'bottom', '-');
			response += '}\n';
			// margin negative all
			response += `.ma-${mediaQueries(screen)}n${value} {\n`;
			response += css('margin', value, undefined, '-');
			response += '}\n';
		}
	}

	return response;
}

const css = (key: string, value: string | number, subKey?: string, subValue?: string) => {
	return `${key}${subKey ? '-' + subKey : ''}: ${
		typeof value === 'string' ? value : (subValue ? subValue : '') + value * 4 + 'px !important'
	};\n`;
};

export default setClassMargin;
