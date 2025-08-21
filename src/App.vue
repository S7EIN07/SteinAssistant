<template>
  <HeaderComponent title_one="Stein" title_two="Assistant" route_logo_link="/" :links="navLinks" />
  <router-view />
  <FooterComponent companyName="Stein Assistant" />
</template>

<script setup>
import { computed } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


const allLinks = [
  { path: '/', name: 'Início', icon: 'bi bi-house-fill' },
  {path: '/download', name: 'Download', icon: 'bi bi-download'},
  { path: '/support', name: 'Suporte', icon: 'bi bi-question-circle-fill' },
]

const navLinks = computed(() => {
  return allLinks
})
</script>

<style>
html {
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
}
</style>
