import { css, mediaQueries } from '../../utils';

function setClassAutoMargin(screen?: string) {
	let response = '';
	// auto margin
	response += `.ms-${mediaQueries(screen)}auto {\n`;
	response += css('margin-inline-start', 'auto');
	response += '}\n';
	response += `.me-${mediaQueries(screen)}auto {\n`;
	response += css('margin-inline-end', 'auto');
	response += '}\n';

	return response;
}

export default setClassAutoMargin;
