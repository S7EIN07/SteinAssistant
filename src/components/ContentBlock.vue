<template>
  <div :class="[bgColorClass, sectionClass]">
    <h2 v-if="title" :class="titleTextColorClass + ' text-center mb-4'">
      {{ title }}
    </h2>

    <div class="container p-4">
      <div
        class="d-flex w-100"
        :class="{
          'align-items-center flex-column flex-md-row': imageSide !== 'center',
          'flex-column text-center': imageSide === 'center'
        }"
      >
        <div
          v-if="imageSide !== 'center'"
          class="p-4 flex-grow-1"
          :class="{ 'order-md-2': imageSide === 'right' }"
        >
          <p class="lead" :class="bodyTextColorClass" v-html="text"></p>
        </div>

        <div
          class="p-4 d-flex justify-content-center w-100"
          :class="{ 'order-md-1': imageSide === 'right' }"
        >
          <slot name="media">
            <img
              v-if="image"
              :src="image"
              class="img-fluid d-block mx-auto"
              alt="Conteúdo da Seção"
              style="max-width: 350px;"
            />
          </slot>
        </div>

        <div
          v-if="imageSide === 'center'"
          class="p-4 flex-grow-1"
        >
          <p class="lead" :class="bodyTextColorClass" v-html="text"></p>
        </div>
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
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    imageSide: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right', 'center'].includes(value),
    },
    bgColor: {
      type: String,
      default: 'bg-white',
      validator: (value) =>
        [
          'bg-primary',
          'bg-secondary',
          'bg-success',
          'bg-danger',
          'bg-warning',
          'bg-info',
          'bg-light',
          'bg-dark',
          'bg-white',
        ].includes(value),
    },
    sectionClass: {
      type: String,
      default: 'py-5 my-5',
    },
  },
  computed: {
    bgColorClass() {
      return this.bgColor;
    },
    titleTextColorClass() {
      if (['bg-warning', 'bg-info', 'bg-light', 'bg-white'].includes(this.bgColor)) {
        return 'text-dark';
      }
      return 'text-white';
    },
    bodyTextColorClass() {
      if (['bg-warning', 'bg-info', 'bg-light', 'bg-white'].includes(this.bgColor)) {
        return 'text-dark';
      }
      return 'text-white';
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
