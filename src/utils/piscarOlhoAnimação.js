// src/utils/animacoesOlho.js
import { gsap } from 'gsap';

export function animarPiscar(elemento) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
  tl.to(elemento, { scaleY: 0.1, duration: 0.1 })
    .to(elemento, { scaleY: 1, duration: 0.1, delay: 0.3 });
}
