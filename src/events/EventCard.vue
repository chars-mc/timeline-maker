<template>
  <div class="event-card">
    <img :src="event.image" :alt="event.name" class="event-card__image" />
    <h3 class="event-card__name">{{ event.name }}</h3>
    <time class="event-card__date">{{ event.date }}</time>
    <p class="event-card__description">{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {},
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
}

.event-card__image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
