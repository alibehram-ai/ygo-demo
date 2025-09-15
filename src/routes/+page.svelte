<script lang="ts">
	import { queryParam, ssp } from 'sveltekit-search-params';
	import {page} from '$app/state';
	import { toasts } from '$lib/stores/toast';
	import { theme } from '$lib/stores/theme';
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	
	let {data} = $props();
	let cityParam = queryParam('city', ssp.string('Berlin'), );
	let inputCity = $state(page.url.searchParams.get('city') ?? '');
	let weather = $derived(data.weather);
	let error = $derived(data.error);
	let loading = $state(false);
	let debounceTimer: number | null = null;

	function searchWeather() {
		if (!inputCity.trim()) return;
		loading = true
		cityParam.set(inputCity.trim());
	}

	function debounceSearch() {
		if (debounceTimer) {
			clearTimeout(debounceTimer);
		}
		
		debounceTimer = setTimeout(() => {
			if (inputCity.trim()) {
				searchWeather();
			}
		}, 800); // Wait 800ms after user stops typing
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			if (debounceTimer) {
				clearTimeout(debounceTimer);
			}
			searchWeather();
		} else {
			debounceSearch();
		}
	}

	$effect(() => {
        if (weather || error) {
		loading = false;
		
		// Show error toast if there's an error
		if (error) {
			toasts.add({
				type: 'error',
				title: '',
				message: error,
				duration: 5000
			});
		}
	}
	}) 
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
	<div class="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-colors duration-300">
		<!-- Theme Toggle -->
		<div class="flex justify-end mb-4">
			<button
				onclick={() => {
					console.log('Theme before toggle:', $theme);
					theme.toggle();
					setTimeout(() => console.log('Theme after toggle:', $theme), 100);
				}}
				class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
				aria-label="Toggle theme"
			>
				{#if $theme === 'light'}
					🌙
				{:else}
					☀️
				{/if}
			</button>
		</div>
	

		<h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4 transition-colors duration-300">
			Weather Dashboard
		</h1>		<!-- Search Bar -->
		<div class="flex items-center space-x-2">
			<input
				type="text"
				placeholder="Enter city name..."
				bind:value={inputCity}
				onkeydown={handleKeydown}
				class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition-colors duration-200"
			/>
			<button
				class="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
				onclick={searchWeather}
			>
				Search
			</button>
		</div>

		{#if loading}
			<div class="mt-6 flex justify-center" transition:fade={{ duration: 200 }}>
				<svg class="animate-spin h-8 w-8 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
				  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
				</svg>
			</div>
		{/if}

		{#if weather && !loading}
			<!-- Weather Display -->
			<div 
				class="mt-6 text-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow transition-colors duration-300" 
				transition:fly={{ y: 20, duration: 500, easing: quintOut }}
			>
				<p 
					class="text-lg font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
					transition:fade={{ delay: 200, duration: 400 }}
				>
					🌍 City: <span class="font-semibold">{weather.city}</span>
				</p>
				<p 
					class="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-2 transition-colors duration-300"
					transition:scale={{ delay: 300, duration: 600, easing: quintOut }}
				>
					{weather.temperature}°C
				</p>
				<p 
					class="text-md text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300"
					transition:fade={{ delay: 500, duration: 400 }}
				>
					{weather.condition}
				</p>
			</div>
		{/if}
	</div>
</div>
