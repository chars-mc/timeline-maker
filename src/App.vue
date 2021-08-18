<template>
  <app-header></app-header>
</template>

<script>
import AppHeader from "./header/AppHeader.vue";
import "boxicons/css/boxicons.min.css";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
body {
  min-width: 90%;
}
</style>
