<script context="module">
	import { readable } from "svelte/store";
	import { onMount } from "svelte";

	/** Boolean for if there is a visible vertical scrollbar. */
	export const scrollbarVisible = readable(false, (set) => {
		onMount(() => {
			/** @type {HTMLElement} Root HTML element. */
			const root = document.documentElement;

			/** Listener for if scrollbar is visible. */
			const scrollbarListener = () => {
				set(root.scrollHeight > root.offsetHeight && window.scrollY !== 0)
			};

			// Watch for scrollbar visibility when scrolling or resizing document window:
			document.addEventListener("scroll", scrollbarListener);
			window.addEventListener("resize", scrollbarListener);
		});
	});
</script>