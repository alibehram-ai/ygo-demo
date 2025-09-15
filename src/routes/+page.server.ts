import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const city = event.url.searchParams.get('city') ?? 'Berlin';
  const res = await event.fetch(`/api/weather?city=${encodeURIComponent(city)}`);
  const data = await res.json();
  return {
    weather: res.ok ? data : null,
    error: res.ok ? '' : (data.error || 'Failed to fetch weather.')
  };
};
