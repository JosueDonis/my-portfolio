<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let src: string = '';
	export let title: string = '';
	export let description: string = '';
	export let icons: any;
</script>

<li class="rounded-md project flex flex-col">
	<div class="card-image">
		<img class="object-cover object-center w-full h-60 rounded-t-md" {src} alt="project" />
	</div>
	<div class="flex px-4 py-4 flex-col justify-between h-full gap-4">
		<div class="flex flex-col h-[90%] gap-2">
			<h3 class="text-base font-bold text-primary font-poppins">{title}</h3>
			<p class="text-sm break-words text-gray-500 h-full">{description}</p>
		</div>
		<div class="flex gap-2">
			{#each icons as icon}
				<svelte:component this={icon} class="w-[25px] h-[25px] text-gray-500" />
			{/each}
		</div>
	</div>
</li>

<style lang="scss">
	.project {
		transition: 1000ms all;
		transform-origin: center left;
		position: relative;
		left: 0px;
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
		transition: all 0.6s ease;

		&:hover {
			box-shadow: rgba(96, 109, 206, 0.2) -10px 10px, rgba(96, 109, 206, 0.19) -20px 20px;
			cursor: pointer;
		}
		.card-image {
			background: rgb(84, 77, 208);
			background: linear-gradient(
				90deg,
				rgba(84, 77, 208, 1) 0%,
				rgba(96, 109, 206, 1) 39%,
				rgba(35, 48, 152, 1) 100%
			);
		}
	}
</style>
