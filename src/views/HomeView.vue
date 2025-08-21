<template>
  <ContentBlock
    text="Descubra uma nova forma de aprender com o Stein Aprendizado, o aplicativo que transforma seus estudos em uma jornada divertida e interativa. Aprenda junto a nossa comunidade, domine novas habilidades e alcance seus objetivos acadêmicos, tudo na palma da sua mão."
    alignment="left"
    imageSide="left"
    sectionClass="py-2 my-2"
  >
    <template #media>
      <EyeAnimation size="350"/>
    </template>
  </ContentBlock>

  <ContentBlock
    id="proxima-secao"
    text="Com lições dinâmicas, exercícios interativos e acompanhamento de progresso personalizado, o Stein Aprendizado se adapta ao seu ritmo. Desafie-se com atividades gamificadas, receba feedback instantâneo e aprenda de forma eficaz, onde quer que você esteja."
    alignment="right"
    imageSide="right"
    bgColor="bg-warning"
  >
    <template #media>
      <img
        src="https://placehold.co/350x350/000000/FFFFFF?text=App+Stein+Aprendizado"
        class="img-fluid rounded shadow"
        alt="App Stein Aprendizado"
        style="max-width: 350px;"
      />
    </template>
  </ContentBlock>
</template>

<script>
import ContentBlock from '@/components/ContentBlock.vue';
import EyeAnimation from '@/components/EyeAnimation.vue';

export default {
  name: 'HomeView',
  components: {
    EyeAnimation,
    ContentBlock,
  },
};
</script>

<style scoped>
</style>
