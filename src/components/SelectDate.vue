<template>
  <div class="SelectDate">
    <p>{{ formattedCurrentDate }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useCurrentYearAndMonth } from "@/helpers";

const MONTHS = [
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
];

export default defineComponent({
  name: "SelectDate",
  components: {},
  props: {},
  setup() {
    const [currentYear, currentMonth] = useCurrentYearAndMonth();
    const formattedCurrentDate = `${MONTHS[currentMonth]} ${currentYear}`;
    return { formattedCurrentDate };
  },
});
</script>
<style lang="scss" scoped>
.SelectDate {
  color: white;
}
</style>
