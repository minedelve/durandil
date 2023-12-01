import { css, mediaQueries } from '../../utils';

function setClassTextTypography(screen?: string) {
	let response = '';

	// textTypography
	response += `.text-${mediaQueries(screen)}h1 {\n`;
	response += css('font-size', '6rem', undefined, true);
	response += css('font-weight', '300', undefined, true);
	response += css('line-height', '6rem', undefined, true);
	response += css('letter-spacing', '-0.015625em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h2 {\n`;
	response += css('font-size', '3.75rem', undefined, true);
	response += css('font-weight', '300', undefined, true);
	response += css('line-height', '3.75rem', undefined, true);
	response += css('letter-spacing', '-0.0083333333em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h3 {\n`;
	response += css('font-size', '3rem', undefined, true);
	response += css('font-weight', '400', undefined, true);
	response += css('line-height', '3.125rem', undefined, true);
	response += css('letter-spacing', 'normal', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h4 {\n`;
	response += css('font-size', '2.125rem', undefined, true);
	response += css('font-weight', '400', undefined, true);
	response += css('line-height', '2.5rem', undefined, true);
	response += css('letter-spacing', '0.0073529412em', undefined, true);
	response += css('text-transform', 'none', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h5 {\n`;
	response += css('font-size', '1.5rem', undefined, true);
	response += css('font-weight', '400', undefined, true);
	response += css('line-height', '2rem', undefined, true);
	response += css('letter-spacing', 'normal', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}h6 {\n`;
	response += css('font-size', '1.25rem', undefined, true);
	response += css('font-weight', '500', undefined, true);
	response += css('line-height', '2rem', undefined, true);
	response += css('letter-spacing', '0.0125em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}subtitle-1 {\n`;
	response += css('font-size', '1rem', undefined, true);
	response += css('font-weight', 'normal', undefined, true);
	response += css('line-height', '1.75rem', undefined, true);
	response += css('letter-spacing', '0.009375em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}subtitle-2 {\n`;
	response += css('font-size', '0.875rem', undefined, true);
	response += css('font-weight', '500', undefined, true);
	response += css('line-height', '1.375rem', undefined, true);
	response += css('letter-spacing', '0.0071428571em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}body-1 {\n`;
	response += css('font-size', '1rem', undefined, true);
	response += css('font-weight', '400', undefined, true);
	response += css('line-height', '1.5rem', undefined, true);
	response += css('letter-spacing', '0.03125em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}body-2 {\n`;
	response += css('font-size', '0.875rem', undefined, true);
	response += css('font-weight', '400', undefined, true);
	response += css('line-height', '1.25rem', undefined, true);
	response += css('letter-spacing', '0.0178571429em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}button {\n`;
	response += css('font-size', '0.875rem', undefined, true);
	response += css('font-weight', '500', undefined, true);
	response += css('line-height', '2.25rem', undefined, true);
	response += css('letter-spacing', '0.0892857143em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}caption {\n`;
	response += css('font-size', '0.75rem', undefined, true);
	response += css('font-weight', '400', undefined, true);
	response += css('line-height', '1.25rem', undefined, true);
	response += css('letter-spacing', '0.0333333333em', undefined, true);
	response += '}\n';

	response += `.text-${mediaQueries(screen)}overline {\n`;
	response += css('font-size', '0.75rem', undefined, true);
	response += css('font-weight', '500', undefined, true);
	response += css('line-height', '2rem', undefined, true);
	response += css('letter-spacing', '0.1666666667em', undefined, true);
	response += css('text-transform', 'uppercase', undefined, true);
	response += '}\n';

	return response;
}

export default setClassTextTypography;
