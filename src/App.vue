<template>
  <HeaderComponent title_one="Stein" title_two="Assistant" route_logo_link="/" :links="navLinks" />
  <router-view />
  <FooterComponent companyName="Stein Assistant" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

const route = useRoute()

const allLinks = [
  { path: '/calendar', name: 'Calendário', icon: 'bi bi-calendar-fill' },
  { path: '/notes', name: 'Bloco de Notas', icon: 'bi bi-pencil-square' },
  { path: '/support', name: 'Suporte', icon: 'bi bi-question-circle-fill' },
]

const navLinks = computed(() => {
  if (route.path === '/') {
    return allLinks
  }
  const remaining = allLinks.filter((link) => link.path !== route.path)
  return [{ path: '/', name: 'Início', icon: 'bi bi-house-fill' }, ...remaining]
})
</script>

<style>
html {
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
}
</style>
