import generateCss from './generate';

export function pluginVite() {
	return {
		name: 'vite-plugin-durandil',
		async configResolved() {
			console.log('chaussette !');
			generateCss();
		}
	};
}
