import { elevation } from '../../constant';
import { css } from '../../utils';

function setClassElevation() {
	let response = '';
	for (const [key, value] of Object.entries(elevation)) {
		// elevation
		response += `.elevation-${key} {\n`;
		response += css(
			'box-shadow',
			`${value[0]} rgba(0, 0, 0, 0.2), ${value[1]} rgba(0, 0, 0, 0.14), ${value[2]} rgba(0, 0, 0, 0.12)`
		);
		response += '}\n';
	}
	return response;
}

export default setClassElevation;
