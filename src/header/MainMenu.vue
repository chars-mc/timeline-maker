<template>
  <nav>
    <div class="menu">
      <a :download="fileName" :href="getDownloadURL" @click="downloadFile">
        <button>
          <i class="bx bx-save"></i>
          Save
        </button>
      </a>
      <button @click="emitter.emit('loadFile')">
        <i class="bx bx-file"></i>Load
      </button>
      <button @click="emitter.emit('exportFile')">
        <i class="bx bxs-file-export"></i> Export
      </button>

      <a href="https://github.com/chars-mc/timeline-maker" target="_blank">
        <i class="bx bxl-github"></i>
      </a>
    </div>
  </nav>
</template>
<script>
import { emitter } from "../helpers/eventEmitter";

export default {
  name: "MainMenu",
  data() {
    return {
      fileName: "timeline-maker.json",
      emitter,
    };
  },
  inject: ["events"],
  computed: {
    getDownloadURL() {
      return (
        "data:text/plain;charset=utf-8," +
        encodeURIComponent(JSON.stringify(this.events.value))
      );
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px 5px;
}

i {
  margin-right: 5px;
}
</style>
