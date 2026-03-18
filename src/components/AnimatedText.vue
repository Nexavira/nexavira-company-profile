<script setup>
/**
 * AnimatedText — reusable GSAP text animation component.
 *
 * Props:
 *   tag       — HTML tag to render (default: 'div')
 *   type      — 'fade' | 'words' | 'chars'
 *               fade  → whole element fades up as one
 *               words → each word is individually animated with stagger
 *               chars → each character is animated with stagger
 *   trigger   — 'scroll' (ScrollTrigger) | 'mount' (fires on mounted)
 *   delay     — initial delay in seconds
 *   duration  — animation duration per item
 *   stagger   — stagger between words/chars
 *   y         — starting Y offset (px)
 *   x         — starting X offset (px)
 *   blur      — starting blur radius (px). 0 = no blur. Combines with any type.
 *   ease      — GSAP ease string
 *   start     — ScrollTrigger start position (e.g. 'top 85%')
 *
 * Usage:
 *   <AnimatedText tag="h2" type="words" :stagger="0.06">
 *     Your heading text here
 *   </AnimatedText>
 *
 *   <!-- Blur + fade on the whole element -->
 *   <AnimatedText tag="p" type="fade" :blur="8" :y="0">
 *     Paragraph text that comes into focus
 *   </AnimatedText>
 *
 *   <!-- Blur + word stagger (each word blurs in individually) -->
 *   <AnimatedText tag="h1" type="words" :blur="12" :stagger="0.07" trigger="mount">
 *     Big hero heading
 *   </AnimatedText>
 *
 *   <AnimatedText tag="h1" type="chars" :stagger="0.03" trigger="mount">
 *     Hero title
 *   </AnimatedText>
 */

import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  tag: { type: String, default: "div" },
  type: { type: String, default: "fade" },
  trigger: { type: String, default: "scroll" },
  delay: { type: Number, default: 0 },
  duration: { type: Number, default: 1 },
  stagger: { type: Number, default: 0.08 },
  y: { type: Number, default: 24 },
  x: { type: Number, default: 0 },
  blur: { type: Number, default: 8 },
  ease: { type: String, default: "power2.out" },
  start: { type: String, default: "top 80%" },
});

const el = ref(null);
let ctx = null;

/**
 * Walks all text nodes inside `element` and wraps each non-whitespace
 * word in a <span data-word> with display:inline-block.
 * Returns a NodeList of all inserted word spans.
 */
function splitByWords(element) {
  const walk = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = node.textContent.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach((part) => {
        if (!part.trim()) {
          frag.appendChild(document.createTextNode(part));
        } else {
          const span = document.createElement("span");
          span.setAttribute("data-word", "");
          span.style.display = "inline-block";
          span.textContent = part;
          frag.appendChild(span);
        }
      });
      node.parentNode.replaceChild(frag, node);
    } else {
      [...node.childNodes].forEach(walk);
    }
  };
  walk(element);
  return element.querySelectorAll("[data-word]");
}

/**
 * Same as splitByWords but per character.
 * Returns a NodeList of all inserted char spans.
 */
function splitByChars(element) {
  const walk = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      [...node.textContent].forEach((char) => {
        if (char === " ") {
          frag.appendChild(document.createTextNode("\u00A0"));
        } else {
          const span = document.createElement("span");
          span.setAttribute("data-char", "");
          span.style.display = "inline-block";
          span.textContent = char;
          frag.appendChild(span);
        }
      });
      node.parentNode.replaceChild(frag, node);
    } else {
      [...node.childNodes].forEach(walk);
    }
  };
  walk(element);
  return element.querySelectorAll("[data-char]");
}

onMounted(() => {
  if (!el.value) return;

  ctx = gsap.context(() => {
    let targets = null;

    if (props.type === "words") {
      targets = splitByWords(el.value);
    } else if (props.type === "chars") {
      targets = splitByChars(el.value);
    }

    const animVars = {
      opacity: 0,
      y: props.y,
      ...(props.x !== 0 && { x: props.x }),
      ...(props.blur > 0 && { filter: `blur(${props.blur}px)` }),
      duration: props.duration,
      ease: props.ease,
      delay: props.delay,
      ...(targets?.length && { stagger: props.stagger }),
    };

    if (props.trigger === "scroll") {
      animVars.scrollTrigger = {
        trigger: el.value,
        start: props.start,
        toggleActions: "play none none none",
      };
    }

    gsap.from(targets?.length ? targets : el.value, animVars);
  });

  el.value.classList.add("animated-text");
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <component :is="tag" ref="el">
    <slot />
  </component>
</template>

<style scoped>
.animated-text {
  will-change: transform, opacity, filter;
}
</style>
