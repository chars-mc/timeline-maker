<template>
  <time>
    {{ getDay }}<br />
    {{ getMonth }}<br />
    {{ getYear }}
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
    date: String,
  },
  computed: {
    getDay() {
      return this.$props.date.split("-")[2];
    },
    getMonth() {
      return this.MONTHS[Number.parseInt(this.$props.date.split("-")[1] - 1)];
    },
    getYear() {
      return this.$props.date.split("-")[0];
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
