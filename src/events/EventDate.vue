<template>
  <time>
    <template v-if="date.day !== 0"> {{ date.day }} <br /> </template>
    <template v-if="date.month !== 0"> {{ getMonth }} <br /> </template>
    {{ date.year }}
  </time>
</template>

<script>
export default {
  name: "EventDate",
  data() {
    return {
      MONTHS: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  props: {
    date: Object,
  },
  computed: {
    getMonth() {
      return this.MONTHS[this.$props.date.month - 1];
    },
  },
};
</script>

<style scoped>
time {
  width: 120px;
  height: 120px;
  margin: 15px;
  text-align: center;
  border: 3px solid #fac29a;
  border-radius: 100%;
  background-color: #1a1c23;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

time::before,
time::after {
  content: " ";
  width: 110%;
  height: 5px;
  display: block;
  background: #fab795;
  top: 50%;
  position: absolute;
  z-index: -1;
}

time::after {
  left: 100%;
}

time::before {
  right: 100%;
}
</style>
