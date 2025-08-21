<template>
  <h2 v-if="title" class="text-center mb-4">{{ title }}</h2>
  <div class="container my-5 p-4 d-flex align-items-center flex-column flex-md-row ">


    <div
      class="d-flex align-items-center flex-column flex-md-row"
      :class="{ 'flex-md-row-reverse': imageSide === 'right' }"
    >
      <div class="p-4" :class="textClass">
        <p class="lead" v-html="text"></p>
      </div>

      <div class="p-4 d-flex justify-content-center">
        <slot name="media">
          <img v-if="image" :src="image" class="img-fluid rounded shadow" alt="Conteúdo da Seção" style="max-width: 350px;" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBlock',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    imageSide: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value),
    },
    alignment: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'center'].includes(value),
    },
  },
  computed: {
    textClass() {
      return this.alignment === 'center' ? 'text-center' : 'text-start';
    },
  },
};
</script>

<style scoped>
.img-fluid {
  max-height: 400px;
  object-fit: contain;
}
</style>
