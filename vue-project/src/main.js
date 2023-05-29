import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import uiComponent from './ui-component/index.js'


const app = createApp(App)

uiComponent.map(component => app.component(component.name, component))

app.mount('#app')
