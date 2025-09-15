<script lang="ts">
  import { toasts } from '$lib/stores/toast';
  
  function getToastStyles(type: string) {
    switch (type) {
      case 'success':
        return 'bg-green-500 dark:bg-green-600 text-white';
      case 'error':
        return 'bg-red-500 dark:bg-red-600 text-white';
      case 'warning':
        return 'bg-yellow-500 dark:bg-yellow-600 text-white';
      case 'info':
        return 'bg-blue-500 dark:bg-blue-600 text-white';
      default:
        return 'bg-gray-500 dark:bg-gray-600 text-white';
    }
  }
  
  function getIcon(type: string) {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return '•';
    }
  }
</script>

<div class="fixed top-4 right-4 z-50 space-y-2">
  {#each $toasts as toast (toast.id)}
    <div
      class="flex items-center justify-between p-4 rounded-lg shadow-lg max-w-sm {getToastStyles(toast.type)} transform transition-all duration-300 ease-in-out"
      role="alert"
    >
      <div class="flex items-center space-x-2">
        <span class="text-lg font-bold">{getIcon(toast.type)}</span>
        <div>
          <div class="font-semibold">{toast.title}</div>
          {#if toast.message}
            <div class="text-sm opacity-90">{toast.message}</div>
          {/if}
        </div>
      </div>
      <button
        onclick={() => toasts.remove(toast.id)}
        class="ml-4 text-white hover:text-gray-200 transition-colors"
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  {/each}
</div>
