<template>
  <AppHeader @exportFile="exportFileTo" />

  <div class="content">
    <aside class="aside">
      <EventForm @addNewEvent="addNewEvent" />
    </aside>

    <main class="main">Timeline content</main>
  </div>
</template>

<script>
import AppHeader from "./header/AppHeader.vue";
import EventForm from "./events/EventForm.vue";
import "boxicons/css/boxicons.min.css";

export default {
  name: "App",
  components: {
    AppHeader,
    EventForm,
  },
  methods: {
    addNewEvent(newEvent) {
      console.log(newEvent);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  max-width: 90%;
}

.content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 15px;
}
</style>
