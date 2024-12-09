<script>
	import { page } from '$app/stores';
	import Kyra404 from '$lib/assets/images/kyra-404.png?enhanced';
	import Kyra500 from '$lib/assets/images/kyra-500.png?enhanced';

	const photo = $page.status === 404 ? Kyra404 : Kyra500;
</script>

<main class="flex h-screen items-center justify-center">
	<div class="flex max-w-3xl flex-col items-center gap-4 sm:flex-row">
		<div class="max-w-52">
			<enhanced:img src={photo} alt="My dog Kyra with her showing her tounge" />
		</div>
		<div class="text-blackish max-w-96">
			<h1 class="bg-orange mb-4 w-fit px-1 text-6xl font-bold text-white">{$page.status}!</h1>
			<p class="mb-4 text-4xl">{$page?.error?.message}</p>
			<p class="mb-4 text-lg">
				I guess you weren't expecting this page but on the other hand you found Kyra.
			</p>
			<div>
				<a class="link bg-teal px-1 text-4xl font-bold text-white underline" href="/">Go home</a>
			</div>
		</div>
	</div>
</main>
