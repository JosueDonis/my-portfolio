<script>
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<button
	class="back-to-top rounded-full bg-primary w-fit h-fit p-3 hover:bg-opacity-80 animate-fade-up animate-once"
	on:click={goTop}
	class:hidden
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-[30px] h-[30px] text-white float-ease-in-out"
		viewBox="0 0 512 512"
		><path
			d="M461.81 53.81a4.4 4.4 0 00-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 00-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 009.8 10.4l81.07-8.9a180.29 180.29 0 001.1 18.3 18.15 18.15 0 005.3 11.09l31.39 31.39a18.15 18.15 0 0011.1 5.3 179.91 179.91 0 0018.19 1.1l-8.89 81a9 9 0 0010.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0039.19-33.09c68.38-68 115.47-190.86 102.37-247.95zM298.66 213.67a42.7 42.7 0 1160.38 0 42.65 42.65 0 01-60.38 0z"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="32"
		/><path
			d="M109.64 352a45.06 45.06 0 00-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 00160 402.32"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="32"
		/></svg
	>
</button>

<style>
	.back-to-top {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}

	.float-ease-in-out {
		animation: float 3s infinite ease-in-out;
	}
	@keyframes float {
		0% {
			transform: translateY(0);
			-webkit-transform: translateY(0);
		}

		50% {
			transform: translateY(0.25rem);
			-webkit-transform: translateY(0.25rem);
		}

		100% {
			transform: translateY(0);
			-webkit-transform: translateY(0);
		}
	}
</style>
