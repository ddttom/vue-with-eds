import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// Look for block container first, fallback to #app
const mountPoint = document.getElementById('vue-slide-app') || 
                   document.getElementById('app')
if (mountPoint) {
  createApp(App).mount(mountPoint)
}
