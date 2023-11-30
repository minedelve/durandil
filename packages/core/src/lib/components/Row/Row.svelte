<script lang="ts">
	import { className } from '../../utils';
	import type { RowAlign, RowAlignContent, RowJustify } from './types';

	export let noGutters: boolean = false;
	export let dense: boolean = false;
	export let align: RowAlign | undefined = undefined;
	export let alignSm: RowAlign | undefined = undefined;
	export let alignMd: RowAlign | undefined = undefined;
	export let alignLg: RowAlign | undefined = undefined;
	export let alignXl: RowAlign | undefined = undefined;
	export let alignXxl: RowAlign | undefined = undefined;
	export let alignContent: RowAlignContent | undefined = undefined;
	export let alignContentSm: RowAlignContent | undefined = undefined;
	export let alignContentMd: RowAlignContent | undefined = undefined;
	export let alignContentLg: RowAlignContent | undefined = undefined;
	export let alignContentXl: RowAlignContent | undefined = undefined;
	export let alignContentXxl: RowAlignContent | undefined = undefined;
	export let justify: RowJustify | undefined = undefined;
	export let justifySm: RowJustify | undefined = undefined;
	export let justifyMd: RowJustify | undefined = undefined;
	export let justifyLg: RowJustify | undefined = undefined;
	export let justifyXl: RowJustify | undefined = undefined;
	export let justifyXxl: RowJustify | undefined = undefined;

	$: classList = [
		{ class: `no-gutters`, value: noGutters },
		{ class: `is-dense`, value: dense },
		{ class: `align-${align}`, value: align },
		{ class: `align-sm-${alignSm}`, value: alignSm },
		{ class: `align-md-${alignMd}`, value: alignMd },
		{ class: `align-lg-${alignLg}`, value: alignLg },
		{ class: `align-xl-${alignXl}`, value: alignXl },
		{ class: `align-xxl-${alignXxl}`, value: alignXxl },
		{ class: `align-content-${alignContent}`, value: alignContent },
		{ class: `align-content-sm-${alignContentSm}`, value: alignContentSm },
		{ class: `align-content-md-${alignContentMd}`, value: alignContentMd },
		{ class: `align-content-lg-${alignContentLg}`, value: alignContentLg },
		{ class: `align-content-xl-${alignContentXl}`, value: alignContentXl },
		{ class: `align-content-xxl-${alignContentXxl}`, value: alignContentXxl },
		{ class: `justify-${justify}`, value: justify },
		{ class: `justify-sm-${justifySm}`, value: justifySm },
		{ class: `justify-md-${justifyMd}`, value: justifyMd },
		{ class: `justify-lg-${justifyLg}`, value: justifyLg },
		{ class: `justify-xl-${justifyXl}`, value: justifyXl },
		{ class: `justify-xxl-${justifyXxl}`, value: justifyXxl }
	];
</script>

<div class={className('dal-row', $$props.class, classList)} {...$$props.style}>
	<!-- slot: default -->
	<slot />
</div>

<style>
	.dal-row {
		display: flex;
		flex-wrap: wrap;
		flex: 1 1 auto;
		margin: -12px;
	}

	.dal-row.no-gutters {
		margin: 0;
	}

	.dal-row.no-gutters > :global([class*='dal-col']) {
		padding: 0;
	}
</style>
