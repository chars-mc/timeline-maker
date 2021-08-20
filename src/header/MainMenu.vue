<template>
  <nav>
    <div class="menu">
      <a :download="fileName" :href="getDownloadURL" @click="downloadFile">
        <button>
          <i class="bx bx-save"></i>
          Save
        </button>
      </a>
      <button><i class="bx bx-file"></i>Load</button>
      <button><i class="bx bxs-file-export"></i> Export</button>

      <a href="https://github.com/chars-mc/timeline-maker" target="_blank">
        <i class="bx bxl-github"></i>
      </a>
    </div>
  </nav>
</template>
<script>
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
};
</script>

<style scoped>
i {
  margin-right: 5px;
}
</style>
