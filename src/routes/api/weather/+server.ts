import { SECRET_OPENWEATHER_API_KEY } from '$env/static/private';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function GET({ url }) {
  const city = url.searchParams.get('city');
  if (!city) {
    return new Response(JSON.stringify({ error: 'City is required' }), { status: 400 });
  }
  try {
    const res = await fetch(`${BASE_URL}?q=${encodeURIComponent(city)}&appid=${SECRET_OPENWEATHER_API_KEY}&units=metric`);
    console.log('Fetch URL:', `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${SECRET_OPENWEATHER_API_KEY}&units=metric`);

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'City not found' }), { status: 404 });
    }
    const data = await res.json();
    console.log('API Response:', data);
    const weather = {
      city: data.name,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main
    };
    return new Response(JSON.stringify(weather), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch weather data' }), { status: 500 });
  }
}
