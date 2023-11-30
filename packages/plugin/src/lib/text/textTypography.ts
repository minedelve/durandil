import { css, mediaQueries } from '../../utils';

function setClassTextTypography(screen?: string) {
	let response = '';

	// textTypography
	response += `.text-${mediaQueries(screen)}h1 {\n`;
	response += css('font-size', '6rem');
	response += css('font-weight', '300');
	response += css('line-height', '6rem');
	response += css('letter-spacing', '-0.015625em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h2 {\n`;
	response += css('font-size', '3.75rem');
	response += css('font-weight', '300');
	response += css('line-height', '3.75rem');
	response += css('letter-spacing', '-0.0083333333em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h3 {\n`;
	response += css('font-size', '3rem');
	response += css('font-weight', '400');
	response += css('line-height', '3.125rem');
	response += css('letter-spacing', 'normal');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h4 {\n`;
	response += css('font-size', '2.125rem');
	response += css('font-weight', '400');
	response += css('line-height', '2.5rem');
	response += css('letter-spacing', '0.0073529412em');
	response += css('text-transform', 'none');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h5 {\n`;
	response += css('font-size', '1.5rem');
	response += css('font-weight', '400');
	response += css('line-height', '2rem');
	response += css('letter-spacing', 'normal');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h6 {\n`;
	response += css('font-size', '1.25rem');
	response += css('font-weight', '500');
	response += css('line-height', '2rem');
	response += css('letter-spacing', '0.0125em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}subtitle-1 {\n`;
	response += css('font-size', '1rem');
	response += css('font-weight', 'normal');
	response += css('line-height', '1.75rem');
	response += css('letter-spacing', '0.009375em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}subtitle-2 {\n`;
	response += css('font-size', '0.875rem');
	response += css('font-weight', '500');
	response += css('line-height', '1.375rem');
	response += css('letter-spacing', '0.0071428571em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}body-1 {\n`;
	response += css('font-size', '1rem');
	response += css('font-weight', '400');
	response += css('line-height', '1.5rem');
	response += css('letter-spacing', '0.03125em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}body-2 {\n`;
	response += css('font-size', '0.875rem');
	response += css('font-weight', '400');
	response += css('line-height', '1.25rem');
	response += css('letter-spacing', '0.0178571429em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}button {\n`;
	response += css('font-size', '0.875rem');
	response += css('font-weight', '500');
	response += css('line-height', '2.25rem');
	response += css('letter-spacing', '0.0892857143em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}caption {\n`;
	response += css('font-size', '0.75rem');
	response += css('font-weight', '400');
	response += css('line-height', '1.25rem');
	response += css('letter-spacing', '0.0333333333em');
	response += '}\n';

	response += `.text-${mediaQueries(screen)}overline {\n`;
	response += css('font-size', '0.75rem');
	response += css('font-weight', '500');
	response += css('line-height', '2rem');
	response += css('letter-spacing', '0.1666666667em');
	response += css('text-transform', 'uppercase');
	response += '}\n';

	return response;
}

export default setClassTextTypography;
