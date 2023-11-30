import { preset } from '../presets';
import { Settings } from '../types';

function concatConfig(settings?: Settings) {
	const response = preset;
	if (settings) {
		// theme
		if (settings.theme) {
			if (settings.theme.dark !== undefined) response.theme.dark = settings.theme.dark;
			// colors
			if (!response.theme.dark && settings.theme.colors) {
				// no use darkmode
				if (settings.theme.colors.light) {
					response.theme.colors.light = {
						...response.theme.colors.light,
						...settings.theme.colors.light
					};
				}
			}

			if (response.theme.dark && settings.theme.colors) {
				//use darkmode
				if (settings.theme.colors.light) {
					response.theme.colors.light = {
						...response.theme.colors.light,
						...settings.theme.colors.light
					};
				}
				if (settings.theme.colors.dark) {
					response.theme.colors.dark = {
						...response.theme.colors.dark,
						...settings.theme.colors.dark
					};
				}
			}
		}

		if (settings.breakpoint) {
			response.breakpoint = {
				...response.breakpoint,
				...settings.breakpoint
			};
		}

		if (settings.rounded) {
			response.rounded = {
				...response.rounded,
				...settings.rounded
			};
		}
	}

	return response;
}

export default concatConfig;
