<template>
  <AppHeader />

  <div class="content-main">
    <aside class="aside">
      <EventForm @addNewEvent="addNewEvent" @error="showError" class="aside" />
      <ErrorCard v-if="error !== ''" :errorMessage="error" />
    </aside>
    <TimeLine :events="events" class="main" id="timelineHTML" />
  </div>
</template>

<script>
import AppHeader from "./header/AppHeader.vue";
import EventForm from "./events/EventForm.vue";
import TimeLine from "./timeline/TimeLine.vue";
import ErrorCard from "./components/ErrorCard.vue";
import { emitter } from "./helpers/eventEmitter";
import { getDocumentToPrint } from "./helpers/printTimeline";
import "boxicons/css/boxicons.min.css";

import { computed } from "vue";

export default {
  name: "App",
  components: {
    AppHeader,
    EventForm,
    TimeLine,
    ErrorCard,
  },
  data() {
    return {
      events: [],
      ITEM_KEY: "timeline-maker-data",
      error: "",
    };
  },
  provide() {
    return {
      events: computed(() => this.events),
    };
  },
  methods: {
    addNewEvent(newEvent) {
      this.events.push(newEvent);
      localStorage.setItem(this.ITEM_KEY, JSON.stringify(this.events));
    },
    deleteEvent(id) {
      this.events.splice(id, 1);
      localStorage.setItem(this.ITEM_KEY, JSON.stringify(this.events));
    },
    loadFile() {
      const input = document.createElement("input");
      input.type = "file";
      input.setAttribute("accept", "application/json");

      input.onchange = () => {
        let files = Array.from(input.files);
        const reader = new FileReader();

        reader.addEventListener("load", (e) => {
          this.events = JSON.parse(e.target.result);
        });
        reader.readAsText(files[0]);
      };

      input.click();
    },
    exportFileToPDF() {
      const doc = getDocumentToPrint(
        document.getElementById("timelineHTML").innerHTML
      );
      doc.print();
    },
    saveEditedEvent({ editedEvent, index }) {
      this.events[index] = editedEvent;
      localStorage.setItem(this.ITEM_KEY, JSON.stringify(this.events));
    },
    showError(msg) {
      this.error = msg;

      setTimeout(() => {
        this.error = "";
      }, 3500);
    },
  },
  beforeMount() {
    this.events = JSON.parse(localStorage.getItem(this.ITEM_KEY)) || [];
  },
  mounted() {
    emitter.on("deleteEvent", this.deleteEvent);
    emitter.on("loadFile", this.loadFile);
    emitter.on("exportFile", this.exportFileToPDF);
    emitter.on("saveEditedEvent", this.saveEditedEvent);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  max-width: 90%;
  margin: 0 auto;
}

#app {
  height: 100%;
  padding-bottom: 10px;
  display: grid;
  grid-template-rows: min-content minmax(500px, 1fr);
}

.content-main {
  height: 100%;
  display: grid;
  column-gap: 15px;
  grid-template-columns: 300px 1fr;
}
</style>
