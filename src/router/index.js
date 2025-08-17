import CalendarView from '@/views/CalendarView.vue'
import HomeView from '@/views/HomeView.vue'
import NotesView from '@/views/NotesView.vue'
import SupportView from '@/views/SupportView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/calendar', name: 'Calendar', component: CalendarView },
    { path: '/notes', name: 'Notes', component: NotesView },
    { path: '/support', name: 'Support', component: SupportView },
  ],
})

export default router
