<script lang="ts">
	import { className } from '../../utils';

	export let noGutters: boolean = false;

	$: classList = [{ class: `no-gutters`, value: noGutters }];
</script>

<div class={className('dal-card--text', $$props.class, classList)} {...$$props.style}>
	<!-- slot: default -->
	<slot />
</div>

<style>
	.dal-card--text {
		flex: 1 1 auto;
		font-size: 0.875rem;
		font-weight: 400;
		letter-spacing: 0.0178571429em;
		padding: 1rem;
		text-transform: none;
	}
</style>
