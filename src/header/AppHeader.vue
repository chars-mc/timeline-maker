<template>
  <header>
    <LogoHeader />
    <MainMenu />
  </header>
</template>

<script>
import LogoHeader from "./LogoHeader.vue";
import MainMenu from "./MainMenu.vue";

export default {
  name: "AppHeader",
  components: {
    LogoHeader,
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
