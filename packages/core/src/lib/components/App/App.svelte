<script lang="ts">
	import { className, styleName } from '../../utils';

	// props
	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;

	$: classList = [{ class: `app-container`, value: true }];

	$: styleList = [
		{ property: `background`, value: background },
		{ property: `color`, value: color }
	];

	$: idHtml = $$props.id;
	$: classHtml = className(undefined, $$props.class, classList);
	$: styleHtml = styleName($$props.style, styleList);
</script>

<div id={idHtml} class={classHtml} style={styleHtml}>
	<div>
		<!-- slot: default -->
		<slot />
	</div>
</div>

<style>
	.app-container {
		display: flex;
		background: var(--dal-theme-background);
		color: var(--dal-theme-text);
	}

	.app-container > div {
		backface-visibility: hidden;
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		max-width: 100vw;
		min-height: 100vh;
		position: relative;
	}
</style>
