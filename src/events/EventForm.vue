<template>
  <form @submit.prevent="handleSubmit" class="event-form">
    <input type="text" placeholder="Event name" v-model="event.name" />
    <input type="date" v-model="event.date" />
    <textarea placeholder="Description" v-model="event.description"></textarea>
    <input type="url" placeholder="Image url" v-model="event.image" />

    <button>
      <i class="bx bx-message-alt-add"></i>
      ADD EVENT
    </button>
  </form>
</template>

<script>
export default {
  name: "EventForm",
  data() {
    return {
      event: {
        name: "",
        description: "",
        date: null,
        image: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("addNewEvent", this.event);
      this.event = { name: "", description: "", date: null, image: "" };
    },
  },
};
</script>

<style scoped>
input,
textarea,
button {
  width: 100%;
  margin: 5px 0px;
}
</style>
