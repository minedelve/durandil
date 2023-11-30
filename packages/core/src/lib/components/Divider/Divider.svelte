<script lang="ts">
	import { className } from '../../utils';
	export let inset: boolean = false;
	export let vertical: boolean = false;

	$: classList = [
		{ class: `is-inset`, value: inset },
		{ class: `is-vertical`, value: vertical }
	];
</script>

<hr class={className('dal-divider', $$props.class, classList)} {...$$props.style} />

<style>
	hr {
		overflow: visible;
	}
	.dal-divider {
		display: block;
		flex: 1 1 100%;
		height: 0px;
		max-height: 0px;
		opacity: var(--dal-border-opacity);
		transition: inherit;
		border-style: solid;
		border-width: thin 0 0 0;
	}

	.dal-divider.is-vertical {
		align-self: stretch;
		border-width: 0 thin 0 0;
		display: inline-flex;
		height: inherit;
		margin-left: -1px;
		max-height: 100%;
		max-width: 0px;
		vertical-align: text-bottom;
		width: 0px;
	}

	.dal-divider.is-inset:not(.is-vertical) {
		max-width: calc(100% - 72px);
		margin-inline-start: 72px;
	}
</style>
