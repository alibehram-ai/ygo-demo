import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const city = url.searchParams.get('city') ?? 'Berlin';
  const res = await fetch(`${url.origin}/api/weather?city=${encodeURIComponent(city)}`);
  const data = await res.json();
  return {
    weather: res.ok ? data : null,
    error: res.ok ? '' : (data.error || 'Failed to fetch weather.')
  };
};
