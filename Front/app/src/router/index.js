import { createRouter, createWebHistory } from 'vue-router'
import InputUploading from '../components/Input-uploading/mainInput.vue'
import DragDrop from '@/components/Drag-drop/Drag-drop.vue'
 

const routes = [
  { path: '/input',component: InputUploading},
   {path:'/dragDrop',component:DragDrop}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
