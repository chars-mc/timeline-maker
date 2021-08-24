<template>
  <form @submit.prevent="handleSubmit" class="event-form">
    <input type="text" placeholder="Event name" v-model="event.name" />

    <div class="date">
      <input
        type="number"
        placeholder="Day"
        min="0"
        max="31"
        v-model="event.date.day"
      />
      <input
        type="number"
        placeholder="Month"
        min="0"
        max="12"
        v-model="event.date.month"
      />
      <input type="number" placeholder="2000" v-model="event.date.year" />
    </div>

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
        date: {
          day: "",
          month: "",
          year: "",
        },
        image: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      if (
        this.event.name === "" ||
        this.event.description === "" ||
        this.event.image === "" ||
        this.event.date.year === ""
      ) {
        this.$emit(
          "error",
          "The name, description, year and the url of the image are required."
        );
        return;
      }
      if (this.event.date.day === "") this.event.date.day = 0;
      if (this.event.dateday === "") this.event.date.month = 0;
      console.log(this.event);
      this.$emit("addNewEvent", this.event);
      this.event = {
        name: "",
        description: "",
        date: { day: null, month: null, year: null },
        image: "",
      };
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

.date {
  display: flex;
  gap: 10px;
}
</style>
