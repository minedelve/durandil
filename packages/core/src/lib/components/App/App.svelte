<div id="dal-application" {...$$props.class} {...$$props.style}>
	<div class="dal-application--wrapper">
		<!-- slot: default -->
		<slot />
	</div>
</div>

<style>
	div#dal-application {
		display: flex;
		background: var(--dal-theme-background);
		color: var(--dal-theme-text);
	}

	div.dal-application--wrapper {
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
