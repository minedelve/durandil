import { setNormalizeCss } from '../lib/normalize';
// theming
import setTheme from '../theme';
// css
import setClassBorderRadius from '../lib/rounded';
import setClassHeight from '../lib/sizing/height';
import setClassWidth from '../lib/sizing/width';
import setClassAutoMargin from '../lib/spacing/autoMargin';
import setClassMargin from '../lib/spacing/margin';
import setClassPadding from '../lib/spacing/padding';
import setClassDisplay from '../lib/display';
import setClassFlex from '../lib/flex/flex';
import setClassFlexAlign from '../lib/flex/flexAlign';
import setClassFlexAlignContent from '../lib/flex/flexAlignContent';
import setClassFlexAlignSelf from '../lib/flex/flexAlignSelf';
import setClassFlexDirection from '../lib/flex/flexDirection';
import setClassFlexGrowShrink from '../lib/flex/flexGrowShrink';
import setClassFlexJustify from '../lib/flex/flexJustify';
import setClassFlexShortland from '../lib/flex/flexShortland';
import setClassFlexWrap from '../lib/flex/flexWrap';
import setClassFloat from '../lib/float/float';
import setClassOrder from '../lib/order';
import setClassFontEmphasis from '../lib/text/fontEmphasis';
import setClassTextAlign from '../lib/text/textAlign';
import setClassTextDecoration from '../lib/text/textDecoration';
import setClassTextOpacity from '../lib/text/textOpacity';
import setClassTextTransform from '../lib/text/textTransform';
import setClassTextTypography from '../lib/text/textTypography';

export function convertToCss(config: any) {
	let response = '';

	// default
	response += setNormalizeCss();
	response += setClassFontEmphasis();
	response += setClassTextDecoration();
	response += setClassTextOpacity();
	response += setClassTextTransform();

	// no breakpoint
	response += setTheme(config.theme);
	response += setClassBorderRadius(config.rounded);

	// with breakpoint
	for (const [key, value] of Object.entries(config.breakpoint)) {
		if (key !== 'xs') response += `@media screen and (min-width: ${value}) {\n`;
		// spacing
		response += setClassMargin(key);
		response += setClassPadding(key);
		response += setClassAutoMargin();
		//sizing
		response += setClassHeight(key);
		response += setClassWidth(key);
		// order
		response += setClassOrder(key);
		// float
		response += setClassFloat(key);
		// flex
		response += setClassFlex(key);
		response += setClassFlexAlign(key);
		response += setClassFlexAlignSelf(key);
		response += setClassFlexAlignContent(key);
		response += setClassFlexWrap(key);
		response += setClassFlexDirection(key);
		response += setClassFlexGrowShrink(key);
		response += setClassFlexShortland(key);
		response += setClassFlexJustify(key);
		// display
		response += setClassDisplay(key);
		// text
		response += setClassTextAlign(key);
		response += setClassTextTypography(key);
		if (key !== 'xs') response += '}\n\n';
	}
	return response;
}
