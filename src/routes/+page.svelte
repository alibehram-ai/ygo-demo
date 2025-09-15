<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />

	<!-- Tailwind CSS Demo Section -->
	<div class="mt-8 p-6 bg-white rounded-lg shadow-lg border-2 border-blue-200 max-w-md">
		<h3 class="text-xl font-bold text-blue-800 mb-4">🎉 Tailwind CSS is working!</h3>
		<p class="text-gray-600 mb-4">This card demonstrates that Tailwind CSS is successfully integrated into your SvelteKit app.</p>
		<div class="flex space-x-2">
			<span class="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">Responsive</span>
			<span class="inline-block px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">Utility-first</span>
			<span class="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full">Fast</span>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
