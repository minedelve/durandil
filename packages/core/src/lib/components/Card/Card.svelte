<script lang="ts">
	import { className } from '../../utils';

	export let noGutters: boolean = false;

	$: classList = [{ class: `no-gutters`, value: noGutters }];
	$: styleList = $$props.style;
</script>

<div class={className('dal-card', $$props.class, classList)} style={styleList}>
	<!-- slot: default -->
	<slot />
</div>

<style>
	.dal-card {
		display: block;
		overflow: hidden;
		overflow-wrap: break-word;
		position: relative;
		padding: 0;
		text-decoration: none;
		transition-duration: 0.28s;
		transition-property: box-shadow, opacity, background;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		z-index: 0;
		border-style: solid;
		border-width: 0;
		border-radius: 4px;
	}

	.dal-card :global([class*='dal-card--text']) {
		line-height: 1.25rem;
	}
</style>
