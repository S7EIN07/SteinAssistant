<template>
  <header class="bg-dark text-white p-3 shadow-lg">
    <div
      class="container d-flex flex-column flex-md-row align-items-center justify-content-between"
    >
      <!-- Título -->
      <div class="d-flex align-items-center">
        <h1 class="h3 mb-2 mb-md-0 text-warning">{{ title_one }}</h1>
        <h1 class="h3 mb-2 mb-md-0">{{ title_two }}</h1>
      </div>

      <!-- Navegação -->
      <nav>
        <ul class="nav d-flex flex-column flex-md-row mb-0 gap-2">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="nav-item rounded-5 custom-nav-item-hover"
          >
            <router-link class="nav-link text-white fw-bold" :to="link.path">
              <i :class="link.icon" class="me-1" aria-hidden="true"></i>
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Botões -->
      <div class="d-flex flex-column flex-sm-row">
        <button class="btn btn-outline-light me-sm-2 mb-2 mb-sm-0">Login</button>
        <button class="btn btn-warning btn-hover-custom">Sign Up</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title_one: {
      type: String,
      default: 'Default ',
    },
    title_two: {
      type: String,
      default: 'Title',
    },
    links: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.custom-nav-item-hover {
  transition: background-color 0.3s ease-in-out;
}

.custom-nav-item-hover:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.btn {
  transition: all 0.3s ease-in-out;
}
</style>
