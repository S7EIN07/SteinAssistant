<template>
  <section id="download" class="py-5 bg-dark text-center text-white">
    <div class="container">
      <h2 class="fw-bold mb-4">Download</h2>
      <p class="lead mb-4">Clique abaixo e acesse a página oficial de download.</p>
      <a
        :href="downloadLink"
        target="_blank"
        class="btn btn-warning btn-lg fw-semibold"
      >
        Ir para Download
      </a>
    </div>
  </section>
</template>

<script setup>
const downloadLink = "https://meuapp.com/download";
</script>
