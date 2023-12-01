<script lang="ts">
	import { className } from '../../utils';

	$: classHtml = className('app-container', $$props.class);
	$: styleHtml = $$props.style;
</script>

<div class={classHtml} style={styleHtml}>
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
		max-width: 100%;
		min-height: 100vh;
		min-height: 100dvh;
		position: relative;
	}
</style>
