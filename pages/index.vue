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
import EventService from '@/services/EventService'

export default {
  asyncData() {
    return EventService.getEvents().then((response) => {
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
