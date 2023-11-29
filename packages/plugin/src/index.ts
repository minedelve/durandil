import generateCss from './generate';

export function durandilkit({ ...props }) {
	console.log('props', typeof props, props);
	let minimify = false;

	// settings
	if ('minimify' in props) minimify = props.minimify;

	return {
		name: 'vite-plugin-durandil',
		async configResolved() {
			console.log('chaussette !');
			generateCss(minimify);
		}
	};
}
