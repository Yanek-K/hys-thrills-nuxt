<template>
  <div class="event-card">
    <!-- Display Event Data-->
    <div class="info">
      <span>{{ event.date }} at {{ event.time }}</span>
      <h4>{{ event.title }}</h4>
    </div>
    <div class="details">
      <!-- Link to view and register-->
      <p>View</p>
      <p>Register</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
}
</script>

<style>
.event-card {
  margin: 20px 20px -10px 20px;
  padding: 15px 20px 10px 30px;
  width: 90%;
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 10px;
  margin-bottom: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #dbb6b6a2;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}

.details {
  display: flex;
  flex-direction: row;
  margin: 10px 10px 0 0;
  width: 20%;
  justify-content: space-between;
  align-items: center;
}

.details > p {
  font-weight: bold;
}

h4 {
  margin-top: 10px;
}
</style>
