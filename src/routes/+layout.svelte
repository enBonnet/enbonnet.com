<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Ender Bonnet (@enBonnet)</title>
	<meta
		name="description"
		content="Hey, this is my personal site, I'd like to share here some small projects, those will be added like pages to this site, I'll post some articles in a blog section, I like writting and thinking about programming as a tool, also reading books about life style and parenting. You can reach me out on the internet as @enBonnet."
	/>
</svelte:head>

<div class="px-2">
	{@render children()}
</div>
