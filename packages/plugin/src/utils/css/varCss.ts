export const cssSpacing = (
	key: string,
	value: string | number,
	subKey?: string,
	subValue?: string
) => {
	return `${key}${subKey ? '-' + subKey : ''}: ${
		typeof value === 'string' ? value : (subValue ? subValue : '') + value * 4 + 'px !important'
	};\n`;
};

export const css = (key: string, value: string | number, subKey?: string) => {
	return `${key}${subKey ? '-' + subKey : ''}: ${value} !important;\n`;
};
