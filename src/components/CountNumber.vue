<template>
  <div>
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++"></button>
  </div>
</template>

<script>
  import { tokyoNumber } from "@/tokyoNumber";
  export default {
    mixins: [tokyoNumber]
  }
</script>