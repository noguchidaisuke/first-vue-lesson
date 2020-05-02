<template>
  <div>
    <p v-border:dotted.shadow="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++"></button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from './CountNumber';
import { tokyoNumber } from "@/tokyoNumber";
  export default {
    mixins: [tokyoNumber],
    components: {
      CountNumber
    },
    directives: {
      border(el, binding) {
        el.style.borderWidth   = binding.value.width;
        el.style.borderColor   = binding.value.color;
        el.style.borderStyle   = binding.arg
        if (binding.modifiers.round) {
          el.style.borderRadius = "0.5rem"
        }
        if (binding.modifiers.shadow) {
          el.style.boxShadow    = "0.2rem 5px"
        }
      }
    }
  }
</script>