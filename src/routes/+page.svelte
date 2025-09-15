<script lang="ts">
	import { queryParam, ssp } from 'sveltekit-search-params';

    import {page} from '$app/state';
	 let {data} = $props();
	let cityParam = queryParam('city', ssp.string('Berlin'), );
	let inputCity = $state(page.url.searchParams.get('city') ?? '');
	let weather = $derived(data.weather);
	let error = $derived(data.error);

	function searchWeather() {
		if (!inputCity) return;
        cityParam.set(inputCity);
		
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
	<div class="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
		<h1 class="text-2xl font-semibold text-gray-800 text-center mb-4">
			Weather Dashboard
		</h1>

		<!-- Search Bar -->
		<div class="flex items-center space-x-2">
			<input
				type="text"
				placeholder="Enter city name..."
				bind:value={inputCity}
				class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
			/>
			<button
				class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
				onclick={searchWeather}
			>
				Search
			</button>
		</div>

		{#if error}
			<div class="mt-4 text-center text-red-500">{error}</div>
		{/if}

		{#if weather}
			<!-- Weather Display -->
			<div class="mt-6 text-center bg-gray-50 p-4 rounded-lg shadow">
				<p class="text-lg font-medium text-gray-700">🌍 City: <span class="font-semibold">{weather.city}</span></p>
				<p class="text-4xl font-bold text-blue-600 mt-2">{weather.temperature}°C</p>
				<p class="text-md text-gray-600 mt-1">{weather.condition}</p>
			</div>
		{/if}
	</div>
</div>
