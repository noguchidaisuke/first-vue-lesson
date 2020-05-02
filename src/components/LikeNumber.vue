<template>
  <div>
    <p>いいね！{{halfNumber}}</p>
    <button @click="increment">+1</button>
  </div>
</template>
<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      default: 100
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1);//event作るだけ @my-click使えるだけ
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>