<template>
  <ContentBlock
    text="Seu assistente pessoal para todas as tarefas diárias. Explore nossas funcionalidades e veja como podemos ajudar você a ser mais produtivo."
    alignment="left">
    <template #media>
      <FirstAnimation />
    </template>
    </ContentBlock>
</template>

<script>
import ContentBlock from '@/components/ContentBlock.vue';
import FirstAnimation from '@/components/FirstAnimation.vue';

export default {
  name: 'HomeView',
  components: {
    FirstAnimation,
    ContentBlock,
  },
};
</script>

<style scoped></style>
