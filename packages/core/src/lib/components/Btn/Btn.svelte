<script lang="ts">
	import { className } from '../../utils';
	import type { BtnSize, BtnDensity, BtnRounded, BntTarget } from './types';

	// props
	export let href: string | undefined = undefined;
	export let target: BntTarget = undefined;
	export let size: BtnSize = 'md';
	export let density: BtnDensity = 'default';
	export let block: boolean = false;
	export let rounded: BtnRounded = undefined;
	export let outlined: boolean = false;
	export let text: boolean = false;
	export let icon: boolean = false;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let active: boolean = false;

	$: isDisabled = loading ? loading : disabled;

	$: classList = [
		{ class: `is-outlined`, value: outlined },
		{ class: `is-text`, value: text },
		{ class: `is-block`, value: block },
		{ class: `is-icon`, value: icon },
		{ class: `is-disabled`, value: isDisabled },
		{ class: `is-loading`, value: loading },
		{ class: `is-active`, value: active },
		{ class: `size-${size}`, value: size },
		{ class: `density-${density}`, value: density },
		{ class: `rounded`, value: typeof rounded === 'boolean' && rounded },
		{ class: `rounded-${rounded}`, value: typeof rounded !== 'boolean' && rounded }
	];
</script>

{#if href}
	<a
		{href}
		{target}
		class={className('dal-btn', $$props.class, classList)}
		{...$$props.style}
		{isDisabled}
	>
		<!-- slot: loading -->
		{#if loading}
			<span class="dal-btn--loading">
				<slot name="loading">Loading</slot>
			</span>
		{/if}
		<!-- slot: prepend -->
		{#if $$slots.prepend}
			<span class="dal-btn--prepend">
				<slot name="prepend" />
			</span>
		{/if}
		<!-- slot: default -->
		<span class="dal-btn--content">
			<slot />
		</span>
		<!-- slot: append -->
		{#if $$slots.append}
			<span class="dal-btn--append">
				<slot name="append" />
			</span>
		{/if}
	</a>
{:else}
	<button
		class={className('dal-btn', $$props.class, classList)}
		{...$$props.style}
		{isDisabled}
		on:click
	>
		<!-- slot: loading -->
		{#if loading}
			<span class="dal-btn--loading">
				<slot name="loading">Loading</slot>
			</span>
		{/if}
		<!-- slot: prepend -->
		{#if $$slots.prepend}
			<span class="dal-btn--prepend">
				<slot name="prepend" />
			</span>
		{/if}
		<!-- slot: default -->
		<span class="dal-btn--content">
			<slot />
		</span>
		<!-- slot: append -->
		{#if $$slots.append}
			<span class="dal-btn--append">
				<slot name="append" />
			</span>
		{/if}
	</button>
{/if}

<style>
	.dal-btn {
		align-items: center;
		border-radius: 4px;
		display: inline-grid;
		grid-template-areas: 'prepend content append';
		grid-template-columns: max-content auto max-content;
		font-weight: 500;
		justify-content: center;
		letter-spacing: 0.0892857143em;
		line-height: normal;
		max-width: 100%;
		outline: none;
		position: relative;
		text-decoration: none;
		text-indent: 0.0892857143em;
		transition-property: box-shadow, transform, opacity, background;
		transition-duration: 0.28s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;
		vertical-align: middle;
		flex-shrink: 0;
		border-style: solid;
		border-width: 0;
	}

	.dal-btn .dal-btn--content,
	.dal-btn .dal-btn--prepend,
	.dal-btn .dal-btn--append {
		align-items: center;
		display: flex;
		transition:
			transform,
			opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.dal-btn .dal-btn--content {
		grid-area: content;
		justify-content: center;
		white-space: nowrap;
	}

	.dal-btn .dal-btn--append,
	.dal-btn .dal-btn--prepend {
		font-size: var(--dal-btn-size-icon);
	}

	.dal-btn .dal-btn--prepend {
		grid-area: prepend;
		margin-inline: calc(var(--dal-btn-height) / -9) calc(var(--dal-btn-height) / 4.5);
	}

	.dal-btn .dal-btn--append {
		grid-area: append;
		margin-inline: calc(var(--dal-btn-height) / 4.5) calc(var(--dal-btn-height) / -9);
	}
	.dal-btn.is-disabled:not(.is-loading) {
		pointer-events: none;
		user-select: none;
		opacity: 0.6;
	}

	.dal-btn.is-disabled.is-loading {
		pointer-events: none;
		user-select: none;
	}

	.dal-btn.is-loading .dal-btn--prepend,
	.dal-btn.is-loading .dal-btn--append,
	.dal-btn.is-loading .dal-btn--content {
		opacity: 0;
		pointer-events: none;
		user-select: none;
	}

	.dal-btn .dal-btn--loading {
		display: flex;
		position: absolute;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		user-select: none;
	}

	button,
	[type='button'],
	[type='reset'],
	[type='submit'],
	[role='button'] {
		cursor: pointer;
		color: inherit;
	}

	a {
		text-decoration: none;
	}
	/* variant */
	.dal-btn:not(.is-outlined):not(.is-text) {
		border: thin solid transparent;
	}
	.dal-btn.is-outlined {
		background: transparent;
		border: thin solid currentColor;
	}
	.dal-btn.is-text {
		background: transparent;
		border: thin solid transparent;
	}
	/* icon */
	.dal-btn.is-icon {
		border-radius: 50% !important;
		min-width: 0 !important;
		padding: 0 !important;
	}
	/* block */
	.dal-btn.is-block {
		display: flex;
		flex: 1 0 auto;
		min-width: 100%;
	}
	/* density */
	.dal-btn.density-compact:not(.is-icon) {
		height: calc(var(--dal-btn-height) + -12px) !important;
	}
	.dal-btn.density-comfortable:not(.is-icon) {
		height: calc(var(--dal-btn-height) + -8px) !important;
	}
	.dal-btn.density-default:not(.is-icon) {
		height: calc(var(--dal-btn-height) + 0px) !important;
	}

	.dal-btn.density-compact.is-icon {
		width: calc(var(--dal-btn-height) + -8px) !important;
		height: calc(var(--dal-btn-height) + -8px) !important;
	}
	.dal-btn.density-comfortable.is-icon {
		width: calc(var(--dal-btn-height) + 0px) !important;
		height: calc(var(--dal-btn-height) + 0px) !important;
	}
	.dal-btn.density-default.is-icon {
		width: calc(var(--dal-btn-height) + 12px) !important;
		height: calc(var(--dal-btn-height) + 12px) !important;
	}

	/* sizing */
	.dal-btn.size-xs:not(.is-icon) {
		--dal-btn-size: 0.625rem;
		--dal-btn-size-icon: 1rem;
		--dal-btn-height: 20px;
		font-size: var(--dal-btn-size);
		min-width: 36px;
		height: var(--dal-btn-height);
		padding: 0 8px;
	}
	.dal-btn.size-sm:not(.is-icon) {
		--dal-btn-size: 0.75rem;
		--dal-btn-size-icon: 1rem;
		--dal-btn-height: 28px;
		font-size: var(--dal-btn-size);
		min-width: 50px;
		height: var(--dal-btn-height);
		padding: 0 12px;
	}
	.dal-btn.size-md:not(.is-icon) {
		--dal-btn-size: 0.875rem;
		--dal-btn-size-icon: 1.125rem;
		--dal-btn-height: 36px;
		font-size: var(--dal-btn-size);
		min-width: 64px;
		height: var(--dal-btn-height);
		padding: 0 16px;
	}
	.dal-btn.size-lg:not(.is-icon) {
		--dal-btn-size: 1rem;
		--dal-btn-size-icon: 1.25rem;
		--dal-btn-height: 44px;
		font-size: var(--dal-btn-size);
		min-width: 78px;
		height: var(--dal-btn-height);
		padding: 0 20px;
	}
	.dal-btn.size-xl:not(.is-icon) {
		--dal-btn-size: 1.125rem;
		--dal-btn-size-icon: 1.375rem;
		--dal-btn-height: 52px;
		font-size: var(--dal-btn-size);
		min-width: 92px;
		height: var(--dal-btn-height);
		padding: 0 24px;
	}

	.dal-btn.size-xs.is-icon {
		--dal-btn-size: 1rem;
		--dal-btn-height: 20px;
		font-size: var(--dal-btn-size);
		min-width: 36px;
		height: var(--dal-btn-height);
	}
	.dal-btn.size-sm.is-icon {
		--dal-btn-size: 1rem;
		--dal-btn-height: 28px;
		font-size: var(--dal-btn-size);
		min-width: 50px;
		height: var(--dal-btn-height);
	}
	.dal-btn.size-md.is-icon {
		--dal-btn-size: 1.5rem;
		--dal-btn-height: 36px;
		font-size: var(--dal-btn-size);
		min-width: 64px;
		height: var(--dal-btn-height);
	}
	.dal-btn.size-lg.is-icon {
		--dal-btn-size: 1.5rem;
		--dal-btn-height: 44px;
		font-size: var(--dal-btn-size);
		min-width: 78px;
		height: var(--dal-btn-height);
	}
	.dal-btn.size-xl.is-icon {
		--dal-btn-size: 1.75rem;
		--dal-btn-height: 52px;
		font-size: var(--dal-btn-size);
		min-width: 92px;
		height: var(--dal-btn-height);
	}
</style>
