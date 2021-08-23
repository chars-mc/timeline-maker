<template>
  <div class="event-card">
    <img :src="event.image" :alt="event.name" class="event-card__image" />
    <EventDate :date="event.date" class="example" />

    <div class="content">
      <h3 class="event-card__name">{{ event.name }}</h3>
      <p class="event-card__description">{{ event.description }}</p>
    </div>

    <div class="event-card__actions">
      <button class="event-card__action-button danger" @click="emitDeleteEvent">
        <i class="bx bxs-trash"></i>
      </button>
      <button class="event-card__action-button warning" @click="emitEditEvent">
        <i class="bx bxs-edit"></i>
      </button>
    </div>
  </div>
</template>

<script>
import EventDate from "./EventDate.vue";
import { emitter } from "../helpers/eventEmitter";

export default {
  name: "EventCard",
  components: {
    EventDate,
  },
  props: {
    event: {},
    index: Number,
  },
  methods: {
    emitDeleteEvent() {
      emitter.emit("deleteEvent", this.$props.index);
    },
    emitEditEvent() {
      emitter.emit("editEvent", this.$props.index);
    },
  },
};
</script>

<style scoped>
.event-card {
  min-width: 350px;
  max-width: 350px;
  margin: 5px 0;
  padding: 5px;
  position: relative;
  display: grid;
  grid-template-rows: 200px 130px 1fr;
  justify-items: center;
}

.event-card__image {
  width: 80%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
}

.content {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.event-card:hover .event-card__actions {
  opacity: 1;
}

.event-card__name,
.event-card__description {
  margin-top: 5px;
}

.event-card__actions {
  display: flex;
  opacity: 0.3;
  position: absolute;
  top: 10px;
  right: 10px;
}

.danger {
  background-color: #e95678;
}
.warning {
  background-color: #fab795;
}
</style>
