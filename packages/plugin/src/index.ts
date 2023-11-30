import fs from 'fs/promises';
import { Settings } from './types';
import { minimifyCss } from './utils';
import { configPath, stylesPath } from './constant';
import generateCss from './utils/generateCss';
import { defaultSet } from './presets/default';

export function durandilkit({ ...props }) {
	console.log('props', typeof props, props);
	let data: Settings | undefined = undefined;
	let minimify = false;

	// settings
	if ('minimify' in props) minimify = props.minimify;

	return {
		name: 'vite-plugin-durandil',
		async configResolved() {
			try {
				const file = await fs.readFile(configPath, 'utf-8');
				data = JSON.parse(file);
			} catch (err) {
				fs.writeFile(configPath, defaultSet);
			}

			let css = generateCss(data);
			if (minimify) css = minimifyCss(css);
			fs.writeFile(stylesPath, css);
		},
		async configureServer(server: any) {
			server.watcher.add('./');

			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('durandil.config.json')) {
					const file = await fs.readFile(configPath, 'utf-8');
					data = JSON.parse(file);

					let css = generateCss(data);
					if (minimify) css = minimifyCss(css);
					fs.writeFile(stylesPath, css);
				}
			});
		}
	};
}
