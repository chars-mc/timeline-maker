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
  display: flex;
  justify-content: center;
  align-items: center;
}
time {
  position: relative;
}

time::after {
  content: " ";
  display: block;
  position: absolute;
  height: 5px;
  background: #fab795;
  width: 100%;
  left: 100%;
  top: calc(50% - 2px);
}

time::before {
  content: " ";
  display: block;
  position: absolute;
  height: 5px;
  background: #fab795;
  width: 110%;
  right: 100%;
  top: calc(50% - 2px);
}
</style>
