<template>
  <footer class="bg-dark text-white p-3 mt-auto">
    <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <span class="text-secondary">&copy; {{ currentYear }} {{ companyName }}</span>
      </div>

      <nav>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link text-white" target="_blank" href="https://linkedin.com/in/jailson-stein-408933355" aria-label="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" target="_blank" href="https://github.com/S7EIN07/SteinAssistant" aria-label="GitHub">
              <i class="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    companyName: {
      type: String,
      default: 'Stein Assistant',
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
</style>
