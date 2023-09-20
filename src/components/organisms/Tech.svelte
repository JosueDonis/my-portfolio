<script>
	import {
		React,
		Svelte,
		Ionic,
		Typescript,
		Javascript,
		Nodejs,
		Prisma,
		Tailwindcss,
		Vercel,
		Vercel2,
		Vite,
		Sequelize,
		Github,
		Graphql,
		Postgres,
		Sass
	} from '@icons';
	import Capacitor from '@icons/Capacitor.svelte';
	import Css from '@icons/Css.svelte';
	import Git from '@icons/Git.svelte';
	import Html from '@icons/Html.svelte';
	import Mongo from '@icons/Mongo.svelte';
	import Mysql from '@icons/Mysql.svelte';

	let techs = [
		{
			title: 'Frontend',
			frameworks: [
				{
					name: 'Sveltekit',
					icon: Svelte
				},
				{
					name: 'React',
					icon: React
				},
				{
					name: 'Ionic',
					icon: Ionic
				},
				{
					name: 'Javascript',
					icon: Javascript
				},
				{
					name: 'Typescript',
					icon: Typescript
				},
				{
					name: 'Html',
					icon: Html
				},
				{
					name: 'Sass',
					icon: Sass
				},
				{
					name: 'Tailwindcss',
					icon: Tailwindcss
				},
				{
					name: 'Capacitor',
					icon: Capacitor
				},
				{
					name: 'Vite',
					icon: Vite
				}
			]
		},
		{
			title: 'Backend',
			frameworks: [
				{
					name: 'Nodejs',
					icon: Nodejs
				},
				{
					name: 'Prisma',
					icon: Prisma
				},
				{
					name: 'Graphql',
					icon: Graphql
				},
				{
					name: 'Sequelize',
					icon: Sequelize
				}
			]
		},
		{
			title: 'Base de Datos',
			frameworks: [
				{
					name: 'Mysql',
					icon: Mysql
				},
				{
					name: 'Postgres',
					icon: Postgres
				},
				{
					name: 'Mongo',
					icon: Mongo
				}
			]
		},
		{
			title: 'DevOps',
			frameworks: [
				{
					name: 'Git',
					icon: Git
				},

				{
					name: 'Github',
					icon: Github
				},
				{
					name: 'Vercel',
					icon: Vercel2
				}
			]
		}
	];
</script>

<section id="tech" class="md:mt-24 mt-14 flex md:flex-col flex-col justify-center gap-8">
	<h2 class="text-2xl font-poppins font-bold animate-fade animate-ease-in">Tecnologías</h2>
	<p class="text-sm animate-fade animate-ease-in">
		A lo largo de mi carrera, me he apasionado por la tecnología y he adquirido una amplia gama de
		habilidades, desde programación con JavaScript y React hasta gestión de bases de datos con SQL y
		MongoDB. Mi portafolio refleja mi dedicación para aplicar estas habilidades en proyectos
		impactantes y colaborar en equipos multidisciplinarios. Estoy emocionado por el futuro y ansioso
		por seguir aprendiendo y creciendo en este campo.
	</p>
	<div class="flex gap-2 flex-col">
		{#each techs as tech}
			<div class="flex gap-3 flex-col">
				<h3 class="font-poppins font-bold text-base">{tech.title}</h3>
				<div class="flex flex-wrap gap-8 items-center mb-10">
					{#each tech.frameworks as framework}
						<div
							class="p-2 flex justify-center items-center flex-col hover:cursor-pointer animate-fade animate-ease-in"
						>
							<svelte:component
								this={framework.icon}
								class="w-[40px] h-[40px] text-gray-500 scale-75 hover:scale-100 transition-transform duration-300"
							/>
							<span class="text-[0.63rem]">{framework.name}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
