<template>
  <nav>
    <div class="menu">
      <a :download="fileName" :href="getDownloadURL" @click="downloadFile">
        <button>
          <i class="bx bx-save"></i>
          Save
        </button>
      </a>
      <button @click="importFile"><i class="bx bx-file"></i>Load</button>
      <button @click="exportFile">
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
  methods: {
    importFile() {
      const input = document.createElement("input");
      input.type = "file";
      input.setAttribute("accept", "application/json");

      input.onchange = () => {
        let files = Array.from(input.files);
        const reader = new FileReader();

        reader.addEventListener("load", (e) => {
          emitter.emit("fileLoaded", e.target.result);
        });
        reader.readAsText(files[0]);
      };

      input.click();
    },
    exportFile() {
      emitter.emit("exportFile");
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
