import { createRouter, createWebHistory } from 'vue-router'
import CesiumVisualizationView from "@/views/CesiumVisualizationView.vue";

const routes = [
  {
    path: '/',
    name: 'cesium',
    component: CesiumVisualizationView
  },
  {
    path: '/graph',
    name: 'graph',
    component: () => import( '../views/GraphView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
