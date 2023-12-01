// spacing
export const margin = ['auto', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
export const padding = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// sizing
export const height = {
	auto: 'auto',
	screen: '100dvh',
	'0': 0,
	'25': '25%',
	'50': '50%',
	'75': '75%',
	'100': '100%'
};
export const width = {
	auto: 'auto',
	'0': 0,
	'25': '25%',
	'50': '50%',
	'75': '75%',
	'100': '100%'
};
// float
export const float = {
	start: 'inline-start',
	end: 'inline-end',
	right: 'right',
	left: 'left',
	none: 'none'
};
// flex
export const flex = {
	flex: 'flex',
	'inline-flex': 'inline-flex'
};
export const flexShorthand = {
	fill: '1 1 auto',
	'1-1': '1 1 auto',
	'1-0': '1 0 auto',
	'0-1': '0 1 auto',
	'0-0': '0 0 auto',
	'1-1-100': '1 1 100%',
	'1-0-100': '1 0 100%',
	'0-1-100': '0 1 100%',
	'0-0-100': '0 0 100%'
};
export const flexDirection = {
	row: 'row',
	column: 'column',
	'row-reverse': 'row-reverse',
	'column-reverse': 'column-reverse'
};
export const flexJustify = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	'space-between': 'space-between',
	'space-around': 'space-around',
	'space-evenly': 'space-evenly'
};
export const flexAlign = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	baseline: 'baseline',
	stretch: 'stretch'
};
export const flexAlignSelf = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	baseline: 'baseline',
	stretch: 'stretch',
	auto: 'auto'
};
export const flexWrap = {
	nowrap: 'nowrap',
	wrap: 'wrap',
	'wrap-reverse': 'wrap-reverse'
};
export const order = {
	first: '-1',
	'0': 0,
	'1': 1,
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9,
	'10': 10,
	'11': 11,
	'12': 12,
	last: 13
};
export const alignContent = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	'space-between': 'space-evenly',
	'space-around': 'space-around',
	'space-evenly': 'space-evenly',
	stretch: 'space-evenly'
};
export const flexGrowShrink = {
	'grow-0': 0,
	'grow-1': 1,
	'shrink-0': 0,
	'shrink-1': 1
};
//display
export const display = {
	none: 'none',
	inline: 'inline',
	'inline-block': 'inline-block',
	block: 'block',
	table: 'table',
	'table-cell': 'table-cell',
	'table-row': 'table-row',
	flex: 'flex',
	'inline-flex': 'inline-flex'
};
// fonts / text
export const textAlign = {
	left: 'left',
	right: 'right',
	center: 'center',
	justify: 'justify',
	start: 'start',
	end: 'end'
};
export const textDecoration = {
	none: 'none',
	'line-through': 'line-through',
	overline: 'overline',
	underline: 'underline'
};
export const textOpacity = {
	'high-emphasis': '1',
	'medium-emphasis': '0.7',
	disabled: '0.38'
};
export const textTransform = {
	lowercase: 'lowercase',
	uppercase: 'uppercase',
	capitalize: 'capitalize',
	none: 'none'
};
export const fontEmphasis = {
	black: '900',
	bold: '700',
	medium: '500',
	regular: '400',
	light: '300',
	thin: '100'
};
// elevation
export const elevation = {
	0: ['0px 0px 0px 0px', '0px 0px 0px 0px', '0px 0px 0px 0px'],
	1: ['0px 2px 1px -1px', '0px 1px 1px 0px', '0px 1px 3px 0px'],
	2: ['0px 3px 1px -2px', '0px 2px 2px 0px', '0px 1px 5px 0px'],
	3: ['0px 3px 3px -2px', '0px 3px 4px 0px', '0px 1px 8px 0px'],
	4: ['0px 2px 4px -1px', '0px 4px 5px 0px', '0px 1px 10px 0px'],
	5: ['0px 3px 5px -1px', '0px 5px 8px 0px', '0px 1px 14px 0px'],
	6: ['0px 3px 5px -1px', '0px 6px 10px 0px', '0px 1px 18px 0px'],
	7: ['0px 4px 5px -2px', '0px 7px 10px 1px', '0px 2px 16px 1px'],
	8: ['0px 5px 5px -3px', '0px 8px 10px 1px', '0px 3px 14px 2px'],
	9: ['0px 5px 6px -3px', '0px 9px 12px 1px', '0px 3px 16px 2px'],
	10: ['0px 6px 6px -3px', '0px 10px 14px 1px', '0px 4px 18px 3px'],
	11: ['0px 6px 7px -4px', '0px 11px 15px 1px', '0px 4px 20px 3px'],
	12: ['0px 7px 8px -4px', '0px 12px 17px 2px', '0px 5px 22px 4px'],
	13: ['0px 7px 8px -4px', '0px 13px 19px 2px', '0px 5px 24px 4px'],
	14: ['0px 7px 9px -4px', '0px 14px 21px 2px', '0px 5px 26px 4px'],
	15: ['0px 8px 9px -5px', '0px 15px 22px 2px', '0px 6px 28px 5px'],
	16: ['0px 8px 10px -5px', '0px 16px 24px 2px', '0px 6px 30px 5px'],
	17: ['0px 8px 11px -5px', '0px 17px 26px 2px', '0px 6px 32px 5px'],
	18: ['0px 9px 11px -5px', '0px 18px 28px 2px', '0px 7px 34px 6px'],
	19: ['0px 9px 12px -6px', '0px 19px 29px 2px', '0px 7px 36px 6px'],
	20: ['0px 10px 13px -6px', '0px 20px 31px 3px', '0px 8px 38px 7px'],
	21: ['0px 10px 13px -6px', '0px 21px 33px 3px', '0px 8px 40px 7px'],
	22: ['0px 10px 14px -6px', '0px 22px 35px 3px', '0px 8px 42px 7px'],
	23: ['0px 11px 14px -7px', '0px 23px 36px 3px', '0px 9px 44px 8px'],
	24: ['0px 11px 15px -7px', '0px 24px 38px 3px', '0px 9px 46px 8px']
};
