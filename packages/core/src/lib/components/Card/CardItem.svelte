<script lang="ts">
	import { className } from '../../utils';

	export let noGutters: boolean = false;

	$: classList = [{ class: `no-gutters`, value: noGutters }];
</script>

<div class={className('dal-card-item', $$props.class, classList)} {...$$props.style}>
	<!-- slot: prepend -->
	{#if $$slots.prepend}
		<div class="dal-card-item--prepend">
			<slot name="prepend" />
		</div>
	{/if}
	<!-- slot: default -->
	<div class="dal-card-item--content">
		<slot />
	</div>
	<!-- slot: append -->
	{#if $$slots.append}
		<div class="dal-card-item--append">
			<slot name="append" />
		</div>
	{/if}
</div>

<style>
	.dal-card-item {
		align-items: center;
		display: grid;
		flex: none;
		grid-template-areas: 'prepend content append';
		grid-template-columns: max-content auto max-content;
		padding: 0.625rem 1rem;
	}

	.dal-card-item--prepend {
		grid-area: prepend;
		padding-inline-end: 1rem;
	}

	.dal-card-item--append {
		grid-area: append;
		padding-inline-start: 1rem;
	}
</style>
