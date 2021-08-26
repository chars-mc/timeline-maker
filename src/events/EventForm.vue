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
      <input type="number" placeholder="Year" v-model="event.date.year" />
    </div>

    <textarea placeholder="Description" v-model="event.description"></textarea>
    <input type="url" placeholder="Image url" v-model="event.image" />

    <button v-if="eventIndexToEdit === null">
      <i class="bx bx-message-alt-add"></i>
      ADD EVENT
    </button>

    <div class="editButtons" v-else>
      <button class="cancel-btn" @click="setDefaultDataValues">
        <i class="bx bx-x-circle"></i>
        CANCEL
      </button>
      <button class="edit-btn" @click="handleSubmitEditEvent">
        <i class="bx bx-save"></i>
        EDITAR
      </button>
    </div>
  </form>
</template>

<script>
import { emitter } from "../helpers/eventEmitter";

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
      eventIndexToEdit: null,
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

      this.$emit("addNewEvent", this.event);
      this.setDefaultDataValues();
    },
    editEvent({ eventToEdit, index }) {
      this.event = eventToEdit;
      this.eventIndexToEdit = index;
    },
    setDefaultDataValues() {
      this.event = {
        name: "",
        description: "",
        date: { day: null, month: null, year: null },
        image: "",
      };
      this.eventIndexToEdit = null;
    },
    handleSubmitEditEvent() {
      emitter.emit("saveEditedEvent", {
        editedEvent: JSON.parse(JSON.stringify(this.event)),
        index: this.eventIndexToEdit,
      });
      this.setDefaultDataValues();
    },
  },
  mounted() {
    emitter.on("editEvent", this.editEvent);
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

.editButtons {
  display: flex;
  gap: 10px;
}

.cancel-btn {
  background-color: #e95678;
}

.edit-btn {
  background-color: #27d796;
}
</style>
