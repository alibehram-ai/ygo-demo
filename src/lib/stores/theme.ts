import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
  const { subscribe, set, update } = writable<Theme>('light');

  return {
    subscribe,
    toggle: () => {
      update(current => {
        const newTheme = current === 'light' ? 'dark' : 'light';
        
        if (browser) {
          localStorage.setItem('theme', newTheme);
          
          // Update DOM class immediately
          setTimeout(() => {
            if (newTheme === 'dark') {
              document.documentElement.classList.add('dark');
              console.log('Added dark class, classList:', document.documentElement.classList.toString());
            } else {
              document.documentElement.classList.remove('dark');
              console.log('Removed dark class, classList:', document.documentElement.classList.toString());
            }
          }, 0);
        }
        
        return newTheme;
      });
    },
    init: () => {
      if (browser) {
        // Get stored theme or default to light
        const stored = localStorage.getItem('theme') as Theme | null;
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = stored || (systemDark ? 'dark' : 'light');
        
        // Set the theme
        set(initialTheme);
        
        // Update DOM
        if (initialTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }
  };
}

export const theme = createThemeStore();
