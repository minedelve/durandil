<script lang="ts">
	import { className } from '../../utils';
	import type { ToolbarDensity, ToolbarRounded } from './types';

	export let density: ToolbarDensity = 'default';
	export let rounded: ToolbarRounded | undefined = undefined;
	export let floating: boolean = false;
	export let absolute: boolean = false;

	$: classList = [
		{ class: `density-${density}`, value: density },
		{ class: `is-float`, value: floating },
		{ class: `is-absolute`, value: absolute },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded }
	];
</script>

<header class={className('dal-toolbar', $$props.class, classList)} {...$$props.style}>
	<div class="dal-toolbar--content">
		<!-- slot: default -->
		<slot />
	</div>
</header>

<style>
	.dal-toolbar {
		align-items: flex-start;
		display: flex;
		flex: none;
		flex-direction: column;
		justify-content: space-between;
		max-width: 100%;
		overflow: hidden;
		position: relative;
		transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		transition-property: height, width, transform, max-width, left, right, top, bottom, box-shadow;
		width: 100%;
		border-color: rgba(var(--dal-border-color), var(--dal-border-opacity));
		border-style: solid;
		border-width: 0;
		box-shadow:
			0px 0px 0px 0px var(--dal-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
			0px 0px 0px 0px var(--dal-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
			0px 0px 0px 0px var(--dal-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
		border-radius: 0;
		background: var(--dal-theme-on-surface-variant);
		color: var(--dal-theme-on-surface);
	}

	.dal-toolbar .dal-toolbar--content {
		align-items: center;
		display: flex;
		flex: 0 0 auto;
		position: relative;
		transition: inherit;
		width: 100%;
	}

	.dal-toolbar.density-default .dal-toolbar--content {
		height: 64px;
	}
	.dal-toolbar.density-comfortable .dal-toolbar--content {
		height: 56px;
	}
	.dal-toolbar.density-compact .dal-toolbar--content {
		height: 48px;
	}

	.dal-toolbar.is-float {
		display: inline-flex;
	}

	.dal-toolbar.is-absolute {
		position: absolute;
	}
</style>
