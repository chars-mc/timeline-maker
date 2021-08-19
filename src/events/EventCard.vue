<template>
  <div class="event-card">
    <img :src="event.image" :alt="event.name" class="event-card__image" />
    <h3 class="event-card__name">{{ event.name }}</h3>
    <time class="event-card__date">{{ event.date }}</time>
    <p class="event-card__description">{{ event.description }}</p>

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
import { emitter } from "../helpers/eventEmitter";

export default {
  name: "EventCard",
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
  min-width: 250px;
  max-height: 70%;
  padding: 5px;
  margin: 10px 20px;
  text-align: center;
  border: 1px solid white;
  position: relative;
}

.event-card__image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.event-card:hover .event-card__actions {
  opacity: 1;
}

.event-card__actions {
  display: flex;
  opacity: 0.3;
  position: absolute;
  top: 10px;
  right: 10px;
}
.event-card__action-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.danger {
  background-color: #e95678;
}
.warning {
  background-color: #fab795;
}
</style>
