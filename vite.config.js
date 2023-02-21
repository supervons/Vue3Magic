import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';

const config = defineConfig(({command, mode})=>{
  if(command === 'serve'){ // dev mode
    const env = loadEnv(mode, process.cwd(), '')
    console.log('This is dev mode and BaseURL is : ' + env.BaseURL);
  }
  return {
    plugins: [vue()]
  }
})

export default config