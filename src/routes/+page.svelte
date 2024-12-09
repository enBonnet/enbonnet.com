<script>
	import Butterfly from '$lib/components/butterfly.svelte';
</script>

<main class="flex min-h-screen items-center justify-center text-blackish">
	<div class="max-w-2xl text-blackish">
		<div class="mb-6">
			<img src="./80.png" alt="Logo" />
			<h1 class="text-6xl font-bold">Ender Bonnet</h1>
		</div>
		<div class="mb-6 text-4xl leading-relaxed">
			I'm a Software Engineer based on Santiago, Chile. 🇨🇱
		</div>
		<div class="mb-6 text-4xl leading-relaxed">
			Currently working at <span class="link bg-black px-1 font-bold text-white underline"
				><a class="uber" target="_blank" href="https://www.uber.com/">Uber</a></span
			>
			in
			<span class="link bg-[#0e8345] px-1 font-bold text-white underline"
				><a class="ubereats" target="_blank" href="https://www.ubereats.com/">UberEats</a></span
			>.
		</div>
		<div class="mb-6 text-4xl leading-relaxed">
			Reach me out on the Internet: <span class="link inline-flex items-baseline bg-teal px-1"
				><Butterfly bluesky="enbonnet.com" /><a
					rel="me"
					class="font-bold text-white underline"
					target="_blank"
					href="https://bsky.app/profile/enbonnet.com">Bluesky</a
				></span
			>,
			<a
				rel="me"
				class="link linkedin items-center bg-teal px-1 font-bold text-white underline"
				target="_blank"
				href="https://www.linkedin.com/in/enbonnet/">LinkedIn</a
			>, and
			<a
				rel="me"
				class="link github bg-teal px-1 font-bold text-white underline"
				target="_blank"
				href="https://github.com/enbonnet">Github</a
			>.
		</div>
	</div>
</main>

<style>
	.link {
		min-height: 3rem;
		display: inline-flex;
	}
</style>
