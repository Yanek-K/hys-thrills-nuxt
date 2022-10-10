<template>
  <div>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return await $axios
      .get(
        'https://my-json-server.typicode.com/Yanek-K/hys-thrills-nuxt/events'
      )
      .then((response) => {
        return {
          events: response.data,
        }
      })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
