<script>
	import { onMount } from 'svelte';
	import Laptop from '@icons/Laptop.svelte';
	import Gridia from '@images/gridia.png';
	import Vscode from '@icons/Vscode.svelte';
	import Pentcloud from '@images/logo-pentcloud.jpg';
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let counter = 0;

	let visible = false;

	onMount(() => {
		visible = true;
		setInterval(() => {
			setTimeout(() => {
				if (counter >= 4) return;
				counter++;
			}, 200);
		}, 100);
	});
</script>

{#if visible}
	<section class="h-fit mt-14 flex md:flex-col flex-col justify-center gap-8" id="experencie">
		<h2 class="text-2xl font-poppins font-bold animate-fade animate-ease-in">Experencia</h2>
		<div class="flex w-full justify-evenly h-full items-center md:flex-row flex-col gap-8">
			<div class="flex flex-col items-center justify-between gap-3 md:min-w-[30rem] min-w-full">
				<h3 class="text-7xl font-bold text-primary font-poppins">+ {counter}</h3>
				<p class="text-sm">años de experencia</p>
			</div>
			<div class="flex flex-col justify-between h-full md:min-w-[30rem] w-full">
				<div
					class="flex gap-4 items-center my-2 w-full"
					in:fly={{ y: 200, duration: 2000 }}
					out:fade
				>
					<div class="flex bg-white rounded-full items-center justify-center w-[40px] h-[40px]">
						<img class="max-w-[25px] max-h-[25px] rounded-full" src={Gridia} alt="gridia" />
					</div>
					<div class="flex flex-col gap-2">
						<a class="text-base hover:font-bold" href="https://www.gridia.io/" target="_blank"
							>Frontend Developer</a
						>
						<p class="text-xs text-gray-400">Enero 20223 - Actualmente</p>
					</div>
				</div>
				<div class="w-[1px] h-10 bg-gray-400 ml-4" in:fade={{ duration: 1500, delay: 1200 }} />
				<div class="flex gap-4 items-center my-2" in:fly={{ y: 140, duration: 1800 }} out:fade>
					<div class="flex bg-gray-200 w-fit h-fit p-2 rounded-full items-center justify-center">
						<Vscode class="w-[20px] h-[20px] text-gray-600" />
					</div>
					<div class="flex flex-col gap-2">
						<a
							class="text-base hover:font-bold"
							href="https://github.com/JosueDonis?tab=repositories"
							target="_blank">Freenlancer Software Developer</a
						>
						<p class="text-xs text-gray-400">Agosto 2022 - Actualmente</p>
					</div>
				</div>
				<div class="w-[1px] h-10 bg-gray-400 ml-4" in:fade={{ duration: 1500, delay: 1200 }} />
				<div class="flex gap-4 items-center my-2" in:fly={{ y: 100, duration: 1400 }} out:fade>
					<img class="max-w-[40px] max-h-[40px] rounded-full" src={Pentcloud} alt="pentcloud" />
					<div class="flex flex-col gap-2">
						<a class="text-base hover:font-bold" href="https://www.pentcloud.com/" target="_blank"
							>Full-Stack Developer</a
						>
						<p class="text-xs text-gray-400">julio 2019 - Enero 2021</p>
					</div>
				</div>
				<div class="w-[1px] h-10 bg-gray-400 ml-4" in:fade={{ duration: 1500, delay: 1200 }} />
				<div class="flex gap-4 items-center my-2" in:fly={{ y: 80, duration: 1000 }} out:fade>
					<div class="flex bg-gray-200 w-fit h-fit p-2 rounded-full items-center justify-center">
						<Laptop class="w-[20px] h-[20px] text-gray-600" />
					</div>
					<div class="flex flex-col gap-2">
						<a class="text-base hover:font-bold" href="https://www.pentcloud.com/" target="_blank"
							>Maestro de computación</a
						>
						<p class="text-xs text-gray-400">Enero 2014 - Julio 2017</p>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}
