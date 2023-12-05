<script lang="ts">
	import { className, styleName } from '../../utils';
	import type { CardElevated, CardRounded, CardTarget } from './types';

	// props
	export let color: string | undefined = undefined;
	export let background: string | undefined = undefined;
	export let elevation: CardElevated | undefined = true;
	export let width: string | number | undefined = undefined;
	export let height: string | number | undefined = undefined;
	export let minWidth: string | number | undefined = undefined;
	export let maxWidth: string | number | undefined = undefined;
	export let minHeight: string | number | undefined = undefined;
	export let maxHeight: string | number | undefined = undefined;
	export let rounded: CardRounded | undefined = undefined;
	export let href: string | undefined = undefined;
	export let target: CardTarget = undefined;
	export let role: 'button' | undefined = undefined;
	export let theme: 'dark' | 'light' | undefined = undefined;

	$: classList = [
		{ class: `card`, value: true },
		{ class: `elevation-2`, value: typeof elevation === 'boolean' && elevation },
		{ class: `elevation-${elevation}`, value: typeof elevation !== 'boolean' && elevation },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded },
		{ class: `${theme}`, value: theme }
	];

	$: styleList = [
		{ property: `background`, value: background },
		{ property: `color`, value: color },
		{ property: `width`, value: width },
		{ property: `height`, value: height },
		{ property: `min-width`, value: minWidth },
		{ property: `max-width`, value: maxWidth },
		{ property: `min-height`, value: minHeight },
		{ property: `max-height`, value: maxHeight }
	];

	$: idHtml = $$props.id;
	$: classHtml = className(undefined, $$props.class, classList);
	$: styleHtml = styleName($$props.style, styleList);
</script>

{#if href}
	<a {href} {target}>
		<div id={idHtml} class={classHtml} style={styleHtml}>
			<div>
				<!-- slot: default -->
				<slot />
			</div>
		</div>
	</a>
{:else}
	<div id={idHtml} class={classHtml} style={styleHtml} {role} on:click>
		<div>
			<!-- slot: default -->
			<slot />
		</div>
	</div>
{/if}

<style>
	a {
		text-decoration: none;
	}

	.card[role='button'] {
		cursor: pointer;
	}

	.card {
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
		background: var(--dal-theme-surface);
		color: var(--dal-theme-on-surface);
	}

	.card :global([class*='card-text']) {
		line-height: 1.25rem;
	}
</style>
