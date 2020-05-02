export const tokyoNumber = {
  data() {
    return {
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great City",
      number: 10
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
}