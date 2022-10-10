<template>
  <div>
    <h2 class="page-title">Upcoming Events</h2>
    <div class="events">
      <EventCard
        v-for="event in upcomingEvents"
        :key="event.id"
        :event="event"
      />
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
          upcomingEvents: response.data,
        }
      })
  },
}
</script>

<style scoped>
.page-title {
  margin-top: 30px;
  text-align: center;
}

.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
</style>
