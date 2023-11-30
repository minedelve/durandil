import { Theme } from '../types';

function setTheme(theme: Theme) {
	let response = '';

	if (!theme.dark) {
		// dev don't use theming mode
		response += ':root {\n';
		for (const [key, value] of Object.entries(theme.colors.light)) {
			response += ` --dal-theme-${formatKey(key)}: ${value};\n`;
		}
		response += '}\n\n';
	} else {
		// light
		response += '@media (prefers-color-scheme: light) {\n';
		response += ':root {\n';
		response += 'color-scheme: light;\n';
		for (const [key, value] of Object.entries(theme.colors.light)) {
			response += ` --dal-theme-${formatKey(key)}: ${value};\n`;
		}
		response += '}\n\n';
		// dark in light
		response += '.dark {\n';
		response += 'color-scheme: light;\n';
		for (const [key, value] of Object.entries(theme.colors.dark)) {
			response += ` --dal-theme-${formatKey(key)}: ${value};\n`;
		}
		response += '}\n\n';
		response += '}\n\n';

		// dark
		response += '@media (prefers-color-scheme: dark) {\n';
		response += ':root {\n';
		response += 'color-scheme: dark;\n';
		for (const [key, value] of Object.entries(theme.colors.dark)) {
			response += ` --dal-theme-${formatKey(key)}: ${value};\n`;
		}
		response += '}\n\n';

		// light in dark
		response += '.light {\n';
		response += 'color-scheme: dark;\n';
		for (const [key, value] of Object.entries(theme.colors.light)) {
			response += ` --dal-theme-${formatKey(key)}: ${value};\n`;
		}
		response += '}\n\n';
		response += '}\n\n';
	}

	return response;
}

const formatKey = (string: string) => {
	let i = 0;
	let varKey = '';
	while (i < string.length) {
		const char = string.charAt(i);
		if (char !== '' && char == char.toUpperCase()) {
			varKey = `${varKey}-${char.toLowerCase()}`;
		} else {
			varKey = `${varKey}${char}`;
		}
		++i;
	}
	return varKey;
};

export default setTheme;
