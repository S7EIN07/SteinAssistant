<template>
  <header class="bg-dark text-white p-3 shadow-lg">
    <div
      class="container d-flex flex-column flex-md-row align-items-center justify-content-between"
    >
      <div class="d-flex align-items-center">
        <router-link to="/" class="d-flex align-items-center text-decoration-none">
          <h1 class="h3 ms-2 mb-0 text-warning">{{ title_one }}</h1>
          <h1 class="h3 ms-1 mb-0 text-white">{{ title_two }}</h1>
        </router-link>
      </div>

      <div class="d-flex flex-column flex-sm-row">
        <nav class="nav mb-2 mb-sm-0 me-sm-3">
          <ul class="nav d-flex flex-column flex-md-row mb-0 gap-2">
            <li v-for="link in links" :key="link.path" class="nav-item">
              <router-link
                :to="link.path"
                class="nav-link text-white custom-nav-item-hover rounded-4 d-flex align-items-center gap-2"
              >
                <i :class="link.icon"></i>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>

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
