<template>
  <div class="timeline">
    <EventCard
      v-for="(event, i) of events"
      :event="event"
      :index="i"
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

<style>
.timeline {
  width: 100%;
  display: flex;
  overflow-x: auto;
}

.timeline::-webkit-scrollbar {
  height: 20px;
}
</style>
