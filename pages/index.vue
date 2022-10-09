<template>
  <div>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    }
  },

  // async asyncData({ axios }) {
  //   events = await axios.get("")
  // },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
