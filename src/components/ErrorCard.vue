<template>
  <div class="error">
    <i class="bx bx-info-circle"></i>
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: "ErrorCard",
  props: {
    errorMessage: String,
  },
};
</script>

<style scoped>
.error {
  padding: 10px 10px;
  margin-top: 10px;
  text-align: center;
  color: white;
  background-color: #e95678;
  border-radius: 5px;
}
</style>
