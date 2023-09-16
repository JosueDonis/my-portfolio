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
				'Esta plantilla te permite ofrecer contenido interactivo, seguimiento de progreso, y una experiencia de usuario intuitiva. Plataforma de cursos en línea',
			icons: [React, Typescript, Ionic, Vite, Vercel, Capacitor, Tailwindcss],
			href: "https://learning-mobile.vercel.app/",
		},
		{
			src: GridiaMockup,
			title: 'Gridia',
			description:
				'Gestiona el consumo de agua de uno o varios proyectos de vivienda y recibe alertas de posibles problemas o fugas de agua de manera inmediata en la aplicación web / móvil Gridia para solucionarlo rápidamente.',
			icons: [Svelte, Javascript, Vite, Ionic, React, Vercel, Tailwindcss],
			href: "https://www.gridia.io/",
		},
		{
			src: ClaroMockup,
			title: 'Claro Club',
			description:
				' App de beneficios que premia tu fidelidad  y preferencia. Obteniendo gratis, de forma fácil y rápida, una amplia gama de promociones y descuentos exclusivos en establecimientos seleccionados',
			icons: [React, Javascript, Ionic, Capacitor, Android, Apple],
			href: "https://clubclaro.com.gt/#/featured",
		},
		{
			src: LocalizameMockup,
			title: 'Localizame',
			description:
				'Es una herramienta que permite localizar líneas móviles Claro en tiempo real por medio de GPS, dirección IP y localización por antenas (SIM).',
			icons: [React, Typescript, Ionic, Capacitor, Android, Apple],
			href: "http://localizame.pentcloud.com/",
		},

		{
			src: GodoMockup,
			title: 'Godo',
			description:
				'La aplicación GoDo es una poderosa herramienta que permite a los usuarios escanear, guardar y compartir fácilmente las páginas de GoDo',
			icons: [Nodejs, Mongo,],
			href: "https://godocent.com/",

		},
		{
			src: MarketspaceMockup,
			title: 'Marketspace',
			description:
				'Dale a tus clientes una manera rápida y segura de hacer sus pedidos en línea con MarketSpace.',
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
