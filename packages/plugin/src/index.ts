export function pluginVite() {
	return {
		name: 'vite-plugin-manakit',
		async configResolved() {
			console.log('chaussette !');
		}
	};
}
