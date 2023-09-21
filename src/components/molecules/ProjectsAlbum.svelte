<script lang="ts">
	import { Card } from '@atoms';
	import {
		MarketspaceMockup,
		GodoMockup,
		LearningMockup,
		LocalizameMockup,
		ClaroMockup,
		GridiaMockup
	} from '@images';
	import type { SvelteComponent } from 'svelte';
	import {
		React,
		Tailwindcss,
		Svelte,
		Typescript,
		Javascript,
		Vite,
		Ionic,
		Nodejs,
		Prisma,
		Vercel,
		Capacitor,
		Android,
		Apple,

		Mongo,

		Mysql


	} from '@icons';

	let projects = [
		{
			src: LearningMockup,
			title: 'Plantilla Learning',
			description:
				'He creado esta plantilla learning la cual esta construida con la última versión de Ionic y React aplicando un diseño interactivo para el usuario.',
			icons: [React, Typescript, Ionic, Vite, Vercel, Capacitor, Tailwindcss],
			href: "https://learning-mobile.vercel.app/",
		},
		{
			src: GridiaMockup,
			title: 'Gridia',
			description:
				'Actualmente participo con el equipo de Gridia en el desarrollo de la aplicación web y móvil que permite a los usuario gestionar el consumo del agua de forma remota.',
			icons: [Svelte, Javascript, Vite, Ionic, React, Vercel, Tailwindcss],
			href: "https://www.gridia.io/",
		},
		{
			src: ClaroMockup,
			title: 'Claro Club',
			description:
				'Con mi participación en la nueva versión se logró aumentar en un 30% los usuarios nuevos llegando a 300 mil instalaciones en Centroamérica y 30,000 cupones canjeados por mes.',
			icons: [React, Javascript, Ionic, Capacitor, Android, Apple],
			href: "https://clubclaro.com.gt/#/featured",
		},
		{
			src: LocalizameMockup,
			title: 'Localizame',
			description:
				'Participé activamente en la implementación de la aplicación móvil para el mercado de Centroamérica, lo que contribuyó significativamente el aumento de usuarios activos.',
			icons: [React, Typescript, Ionic, Capacitor, Android, Apple],
			href: "http://localizame.pentcloud.com/",
		},

		{
			src: GodoMockup,
			title: 'Godo',
			description:
				'Participé en el desarollo para la autenticación de usuarios mediante las plataformas de Google y Apple así facilitar al usuario en crear su cuenta de Godo, además de administrar la plataforma con un Backend.',
			icons: [Nodejs, Mongo,],
			href: "https://godocent.com/",

		},
		{
			src: MarketspaceMockup,
			title: 'Marketspace',
			description:
				'Con mi participación se lanzo Marktetspace para administrar multiples tiendas de los usuarios, así puedan vender sus productos en línea y llevar un inventario del mismo.',
			icons: [Svelte, Javascript, Nodejs, Prisma, Vercel, Mysql],
			href: "https://marketspace.digital/marketspace/",

		}
	];
</script>

<ul class="projects">
	{#each projects as project}
		<Card {...project} />
	{/each}
</ul>

<style>
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 40px;
	}
</style>
