<template>
  <div class="timeline">
    <EventCard
      :event="event"
      :index="i"
      v-for="(event, i) of events"
      :key="i"
    />
  </div>
</template>

<script>
import EventCard from "../events/EventCard.vue";

export default {
  name: "TimeLine",
  components: {
    EventCard,
  },
  props: {
    events: Array,
  },
};
</script>

<style scoped>
.timeline {
  display: flex;
  overflow-x: auto;
}

.timeline::-webkit-scrollbar {
  height: 20px;
}
</style>
