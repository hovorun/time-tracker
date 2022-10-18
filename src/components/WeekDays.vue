<template>
  <div class="WeekDays d-flex js-space-between">
    <h4
      class="WeekDays-item ta-center"
      v-for="(day, idx) of mockedDaysPerWeek"
      :key="idx"
    >
      {{ day }}
    </h4>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useLocalState } from "@/helpers";

export default defineComponent({
  name: "WeekDays",
  setup() {
    const [mockedDaysPerWeek] = useLocalState<string[]>([
      "Monday ",
      "Tuesday ",
      "Wednesday ",
      "Thursday ",
      "Friday ",
      "Saturday ",
      "Sunday ",
    ]);

    return { mockedDaysPerWeek };
  },
});
</script>
<style lang="scss" scoped>
.WeekDays {
  max-width: 1840px;

  &-item {
    flex-basis: 205px;
    padding: 20px;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
