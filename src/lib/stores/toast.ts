import { writable } from 'svelte/store';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

function createToastStore() {
  const { subscribe, update } = writable<Toast[]>([]);

  return {
    subscribe,
    add: (toast: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).substring(7);
      const newToast = { ...toast, id };
      
      update(toasts => [...toasts, newToast]);
      
      // Auto remove after duration (default 5 seconds)
      setTimeout(() => {
        update(toasts => toasts.filter(t => t.id !== id));
      }, toast.duration || 5000);
      
      return id;
    },
    remove: (id: string) => {
      update(toasts => toasts.filter(t => t.id !== id));
    },
    clear: () => {
      update(() => []);
    }
  };
}

export const toasts = createToastStore();
