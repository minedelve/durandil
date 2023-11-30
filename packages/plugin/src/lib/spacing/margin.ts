import { margin } from '../../constant';
import { cssSpacing, mediaQueries } from '../../utils';

function setClassMargin(screen?: string) {
	let response = '';
	for (const [, value] of Object.entries(margin)) {
		// margin top
		response += `.mt-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value, 'top');
		response += '}\n';
		// margin bottom
		response += `.mb-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value, 'bottom');
		response += '}\n';
		// margin left
		response += `.ml-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value, 'left');
		response += '}\n';
		// margin right
		response += `.mr-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value, 'right');
		response += '}\n';
		// margin left & right
		response += `.mx-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value, 'left');
		response += cssSpacing('margin', value, 'right');
		response += '}\n';
		// margin top & bottom
		response += `.my-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value, 'top');
		response += cssSpacing('margin', value, 'bottom');
		response += '}\n';
		// margin all
		response += `.ma-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value);
		response += '}\n';

		if (value !== 'auto') {
			// margin negative top
			response += `.mt-${mediaQueries(screen)}n${value} {\n`;
			response += cssSpacing('margin', value, 'top', '-');
			response += '}\n';
			// margin negative bottom
			response += `.mb-${mediaQueries(screen)}n${value} {\n`;
			response += cssSpacing('margin', value, 'bottom', '-');
			response += '}\n';
			// margin negative left
			response += `.ml-${mediaQueries(screen)}n${value} {\n`;
			response += cssSpacing('margin', value, 'left', '-');
			response += '}\n';
			// margin negative right
			response += `.mr-${mediaQueries(screen)}n${value} {\n`;
			response += cssSpacing('margin', value, 'right', '-');
			response += '}\n';
			// margin negative left & right
			response += `.mx-${mediaQueries(screen)}n${value} {\n`;
			response += cssSpacing('margin', value, 'left', '-');
			response += cssSpacing('margin', value, 'right', '-');
			response += '}\n';
			// margin negative top & bottom
			response += `.my-${mediaQueries(screen)}n${value} {\n`;
			response += cssSpacing('margin', value, 'top', '-');
			response += cssSpacing('margin', value, 'bottom', '-');
			response += '}\n';
			// margin negative all
			response += `.ma-${mediaQueries(screen)}n${value} {\n`;
			response += cssSpacing('margin', value, undefined, '-');
			response += '}\n';
		}
	}

	return response;
}

export default setClassMargin;
