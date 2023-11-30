export interface Rounded {
	[key: string]: string | number;
}

export interface Theme {
	dark: boolean;
	colors: {
		[key: string]: {
			[key: string]: string | number;
		};
	};
}

export interface Settings {
	theme: Theme;
	breakpoint: Breakpoint;
	rounded: Rounded;
}

export interface Breakpoint {
	[key: string]: string | number;
}
