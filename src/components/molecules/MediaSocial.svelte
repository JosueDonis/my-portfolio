<script>
	import {Mail, Linkedin, Instagram, Github} from '@icons';

	let items = [
		{
			href: 'https://github.com/JosueDonis',
			icon: Github
		},
		{
			href: 'https://www.instagram.com/joshtech_/',
			icon: Instagram
		},
		{
			href: 'mailto:bjosh.donis@gmail.com',
			icon: Mail
		},
		{
			href: 'https://www.linkedin.com/in/josh-donis/',
			icon: Linkedin
		}
	];
</script>

<div
	class="flex flex-wrap gap-2 animate-fade animate-once animate-ease-in justify-center items-center"
>
	{#each items as item}
		<a
			class="flex bg-[#efeeee] rounded-full p-2 hover:-translate-y-1 transition-transform duration-200"
			href={item.href}
			target="_blank"
		>
			<svelte:component this={item.icon} class="w-[20px] h-[20px]" />
		</a>
	{/each}
</div>
