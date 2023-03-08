import { ElButton, ElSelect } from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);
app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);
app.mount('#app');
