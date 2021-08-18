<template>
  <header>
    <div class="logo">
      <h1>Timeline Maker</h1>
    </div>
    <MainMenu />
  </header>
</template>

<script>
import MainMenu from "./MainMenu.vue";

export default {
  name: "AppHeader",
  components: {
    MainMenu,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  margin: 0px;
}
</style>
