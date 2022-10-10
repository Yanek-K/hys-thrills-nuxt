<template>
  <div class="container">
    <p>{{ event.title }}</p>
    <h2>{{ event.location }}</h2>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      const event = await $axios.$get(
        `https://my-json-server.typicode.com/Yanek-K/hys-thrills-nuxt/events/${params.slug}`
      )
      console.log(event)
      return event
    } catch (e) {
      console.log(e.message)
    }
  },
  data() {
    return {
      event: {},
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: black;
}
p {
  color: white;
}
</style>
