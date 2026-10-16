import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        cases: resolve(import.meta.dirname, 'cases/index.html'),
        uirenGo: resolve(import.meta.dirname, 'cases/uiren-go/index.html'),
        spichka: resolve(import.meta.dirname, 'cases/spichka/index.html'),
        leadershipAcademy: resolve(import.meta.dirname, 'cases/leadership-academy/index.html'),
        goodRestaurants: resolve(import.meta.dirname, 'cases/good-restaurants/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
      },
    },
  },
});
