<script lang="ts">
	const name = 'Ender';
	const lastName = 'Bonnet';
	const username = '@enBonnet';
	const role = 'Frontend Developer';
	const location = 'Santiago, Chile 🇨🇱';
	const taglines = [
		'🧪 My methods are questionable, but not my results.',
		'🤷‍♂️ Actually… I have no methods. Or results.'
	];

	const socials = [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/enbonnet',
			color: 'border-[#0A66C2]',
			aria: 'Connect with me on LinkedIn'
		},
		{
			name: 'Github',
			url: 'https://github.com/enbonnet',
			color: 'border-[#333333]',
			aria: 'Check my projects on Github'
		},
		{
			name: 'Bluesky',
			url: 'https://bsky.app/profile/enbonnet.com',
			color: 'border-[#1DA1F2]',
			aria: 'Follow me on Bluesky'
		},
		{
			name: 'Reddit',
			url: 'https://www.reddit.com/user/enbonnet/',
			color: 'border-[#FF4500]',
			aria: 'Follow me on Reddit'
		}
	];

	const projects = [
		{
			title: 'RTK Map Hook Navigator',
			description:
				'A VSCode extension that provides intelligent navigation from Redux Toolkit Query (RTK Query) auto-generated hooks directly to their endpoint definitions using both CodeLens annotations and "Go to Definition" functionality.',
			image: 'https://enbonnet.com/images/rtk-map.png',
			links: [
				{
					label: 'VSCode Extension',
					url: 'https://marketplace.visualstudio.com/items?itemName=enbonnet.rtk-map'
				},
				{ label: 'Open VSX', url: 'https://open-vsx.org/extension/enBonnet/rtk-map' },
				{ label: 'Github', url: 'https://github.com/enBonnet/rtk-map' }
			]
		},
		{
			title: 'Deletudo',
			description:
				'Chrome/Firefox extensions to allow you to use the "del" key directly to delete an email, I made it trying to keep my hands on the keyboard while Fast reading and Deleting those emails that I don\'t want to keep.',
			image: 'https://enbonnet.com/images/deletudo-store-screenshot.png',
			links: [
				{
					label: 'Chromium Extension',
					url: 'https://chromewebstore.google.com/detail/deletudo/aojjacdnefgogmkmigpdgbfimfjfpghn?hl=en'
				},
				{
					label: 'Firefox Extension',
					url: 'https://addons.mozilla.org/en-US/firefox/addon/deletudo/'
				},
				{ label: 'Github', url: 'https://github.com/enBonnet/deletudo' }
			]
		},
		{
			title: 'Routes - React Router',
			description:
				'Routes is a VSCode extension that adds helpful annotations to your routes.ts files when working with react-router. It displays clickable CodeLens links above each route or index declaration.',
			image: 'https://enbonnet.com/images/routes-react-router-screenshot.png',
			links: [
				{
					label: 'VSCode Extension',
					url: 'https://marketplace.visualstudio.com/items?itemName=enBonnet.routes-react-router'
				},
				{ label: 'Open VSX', url: 'https://open-vsx.org/extension/enBonnet/routes-react-router' },
				{ label: 'Github', url: 'https://github.com/enBonnet/routes-react-router' }
			]
		},
		{
			title: 'Il Pane',
			description:
				'An easy way to craft and share bread recipes, pretty cool it calculates the amount of hydration based on the absorption capacity of each ingredient or the user can adjust the percentage of humidity.',
			image: 'https://enbonnet.com/images/ilpane-screenshot.png',
			links: [
				{ label: 'Site', url: 'https://ilpane.lat' },
				{ label: 'Github', url: 'https://github.com/enbonnet/ilpane' }
			]
		},
		{
			title: 'Frontend Tools',
			description:
				'A collection of tools for frontend developers, including a color picker, a font size calculator, and a responsive design tool.',
			image: 'https://enbonnet.com/images/frontend-tools-screenshot.png',
			links: [{ label: 'Github', url: 'https://github.com/enBonnet/Frontend-Tools' }]
		}
	];
</script>

<svelte:head>
	<title>{name} {lastName} - Software Engineer</title>
	<meta
		name="description"
		content="Software Engineer at Lilo. Based in Santiago, Chile. Experienced in web development and software engineering."
	/>
</svelte:head>

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="flex max-w-full items-center justify-center py-8 md:min-h-screen md:py-0">
		<div class="flex w-4xl flex-col justify-center gap-8 p-4 md:flex-row md:justify-start md:p-0">
			<div class="flex items-center justify-center md:flex-1">
				<div role="img" aria-labelledby="logo-title logo-desc">
					<span id="logo-title" class="sr-only">Ender Bonnet Logo</span>
					<span id="logo-desc" class="sr-only">
						Personal logo of Ender Bonnet, Frontend Developer based in Santiago, Chile
					</span>
					<div
						class="h-48 w-48 md:h-64 md:w-64"
					>
						<img
							class="h-full w-full object-cover"
							src="https://enbonnet.com/logo-edge-less.png"
							alt="Ender Bonnet Logo"
						/>
					</div>
				</div>
			</div>

			<div class="flex flex-1 flex-col justify-center gap-4 text-left">
				<div class="max-w-xl">
					<h1 class="text-4xl">
						<span class="font-bold">{name}</span>
						<span class="font-normal">{lastName}</span>
					</h1>
					<h2 class="w-fit border-b-4 border-[#462b6d] text-2xl">
						{username}
					</h2>
					<div class="text-2xl">
						<p class="py-2">
							<span class="font-bold">{role}</span> based on {location}
						</p>
						{#each taglines as tagline}
							<p class="py-2 font-thin">
								{tagline}
							</p>
						{/each}
						<p class="py-2">
							Currently working at
							<a
								class="border-b-4 border-[#007670]"
								href="https://www.lilohq.com/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Visit Lilo's website"
							>
								Lilo
							</a>
						</p>
						<p class="py-2">
							Reach me out in the internet on
							{#each socials as social, i}
								<a
									class="border-b-4 {social.color} font-semibold"
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.aria}
								>
									{social.name}</a
								>{i === socials.length - 1 ? '.' : i === socials.length - 2 ? ' or ' : ', '}
							{/each}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section class="flex max-w-full items-center justify-center bg-[#875da9] dark:bg-[#392358]">
		<div class="w-4xl px-4 py-12 text-white">
			<div class="mb-12">
				<h2 class="text-4xl font-extrabold">Projects</h2>
			</div>

			<div class="flex flex-col gap-16">
				{#each projects as project, i}
					<div
						class="flex flex-col items-center gap-9 md:flex-row {i % 2 === 0
							? 'md:flex-row'
							: 'md:flex-row-reverse'}"
					>
						<div class="w-full md:flex-1">
							<div class="mb-4">
								<h3 class="text-2xl font-bold">{project.title}</h3>
								<p class="mt-2 text-lg opacity-90">
									{project.description}
								</p>
							</div>
							<div class="flex flex-col gap-1">
								{#each project.links as link}
									<div>
										<span class="mr-2">{link.label}:</span>
										<a
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											class="font-bold hover:underline"
										>
											{link.url.replace('https://', '').split('/')[0]}...
										</a>
									</div>
								{/each}
							</div>
						</div>
						<div class="flex shrink-0 justify-center md:flex-1">
							<div class="max-w-64 overflow-hidden rounded-lg shadow-xl shadow-black/20">
								<img src={project.image} alt={project.title} class="h-auto w-full" />
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>
