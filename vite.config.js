import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import image from '@rollup/plugin-image'
import viteCompression from 'vite-plugin-compression'
// vite.config.js
export default {
  resolve: {
    alias: {
      vue: '@vue/compat',
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
            COMPILER_V_BIND_OBJECT_ORDER: false,
          },
        },
      },
    }),
  ],
  build: {
    outDir: 'dist/lib',
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vueHotelDatepicker',
      fileName: (format) => `vueHotelDatepicker.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@vue/compat'],
    },
    plugins: [
      {
        ...image(),
        ...viteCompression(),
        enforce: 'pre',
      },
    ]
  },
}