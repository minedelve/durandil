import { padding } from '../../constant';
import { cssSpacing, mediaQueries } from '../../utils';

function setClassPadding(screen?: string) {
	let response = '';
	for (const [, value] of Object.entries(padding)) {
		// padding top
		response += `.pt-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value, 'top');
		response += '}\n';
		// padding bottom
		response += `.pb-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('margin', value, 'bottom');
		response += '}\n';
		// padding left
		response += `.pl-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('padding', value, 'left');
		response += '}\n';
		// padding right
		response += `.pr-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('padding', value, 'right');
		response += '}\n';
		// padding left & right
		response += `.px-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('padding', value, 'left');
		response += cssSpacing('padding', value, 'right');
		response += '}\n';
		// padding top & bottom
		response += `.py-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('padding', value, 'top');
		response += cssSpacing('padding', value, 'bottom');
		response += '}\n';
		// padding all
		response += `.pa-${mediaQueries(screen)}${value} {\n`;
		response += cssSpacing('padding', value);
		response += '}\n';

		// padding negative top
		response += `.pt-${mediaQueries(screen)}n${value} {\n`;
		response += cssSpacing('margin', value, 'top', '-');
		response += '}\n';
		// padding negative bottom
		response += `.pb-${mediaQueries(screen)}n${value} {\n`;
		response += cssSpacing('margin', value, 'bottom', '-');
		response += '}\n';
		// padding negative left
		response += `.pl-${mediaQueries(screen)}n${value} {\n`;
		response += cssSpacing('padding', value, 'left', '-');
		response += '}\n';
		// padding negative right
		response += `.pr-${mediaQueries(screen)}n${value} {\n`;
		response += cssSpacing('padding', value, 'right', '-');
		response += '}\n';
		// padding negative left & right
		response += `.px-${mediaQueries(screen)}n${value} {\n`;
		response += cssSpacing('padding', value, 'left', '-');
		response += cssSpacing('padding', value, 'right', '-');
		response += '}\n';
		// padding negative top & bottom
		response += `.py-${mediaQueries(screen)}n${value} {\n`;
		response += cssSpacing('padding', value, 'top', '-');
		response += cssSpacing('padding', value, 'bottom', '-');
		response += '}\n';
		// padding negative all
		response += `.pa-${mediaQueries(screen)}n${value} {\n`;
		response += cssSpacing('padding', value, undefined, '-');
		response += '}\n';
	}

	return response;
}

export default setClassPadding;