<template>
  <div class="d-flex justify-content-center align-items-center">
    <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
      <circle cx="125" cy="125" r="120" fill="#ffc107" />
      <circle cx="125" cy="125" r="90" fill="#ffde59" />
      <circle ref="pretoOlho" cx="125" cy="125" r="60" fill="#000000" />
      <circle ref="pupilaOlho" cx="125" cy="125" r="30" fill="#FFFFFF" />
      <ellipse cx="125" cy="60" rx="80" ry="30" fill="#ffc107" />
    </svg>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'FirstAnimation',
  mounted() {
    const pretoOlho = this.$refs.pretoOlho;
    const pupilaOlho = this.$refs.pupilaOlho;

    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });

    timeline.to([pretoOlho], {
      x: 15,
      duration: 1,
      ease: "power2.inOut",
    });

    timeline.to([pupilaOlho], {
      x: 30,
      duration: 1,
      ease: "power2.inOut",
    }, "<");
    timeline.to([pretoOlho], {
      x: -25,
      duration: 2,
      ease: "power2.inOut",
    });

    timeline.to([pupilaOlho], {
      x: -40,
      duration: 2,
      ease: "power2.inOut",
    }, "<");
  },
};
</script>

<style scoped></style>
