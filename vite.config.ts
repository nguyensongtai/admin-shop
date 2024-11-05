import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    tsconfigPathsPlugin(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vue-router'],
      dts: 'src/auto-imports.d.ts', // plugins auto generated file auto-imports.d.ts in source src.
      dirs: [], // Here you can specify the directories that contain the files you want to be automatically imported. For example, if you have a `src/stores` directory with all your store files, you can add it here and then you can access any store file in any Vue file without importing it.
      vueTemplate: true,
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({importStyle: false})
      ],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts', // Auto generated file components.d.ts in src.
    }),
  ],
  server: {
    port: 8080,
  },
})
