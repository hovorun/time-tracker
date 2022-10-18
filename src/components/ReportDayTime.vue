<template>
  <div
    class="ReportDayTime"
    :style="{ visibility: workDay.isHidden && 'hidden' }"
    tabindex="-1"
  >
    <p
      class="current-day ta-center ml-auto"
      :class="{ highlighted: workDay.id === currentDate }"
    >
      {{ workDay.id }}
    </p>
    <div class="d-flex start-time ai-center js-space-between">
      <p class="start-time__description">Start time:</p>
      <input class="ReportDayTime-input" v-model="startTime" type="time" />
    </div>
    <div class="d-flex end-time ai-center js-space-between">
      <p class="end-time__description">End time:</p>
      <input class="ReportDayTime-input" v-model="endTime" type="time" />
    </div>
    <div class="reported-hours">
      <p class="d-flex js-space-between">
        Reported hours:
        <span class="reported-hours-count">{{ reportedTimePerDay }} h</span>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { useCurrentDate, useSubstractTimes } from "@/helpers";
import { WorkDay } from "@/layout/ReportLayout/types";

export default defineComponent({
  name: "ReportDayTime",
  components: {},
  props: {
    workDay: {
      type: Object as PropType<WorkDay>,
      required: true,
    },
  },
  emits: ["update-reported-time", "update-start-time", "update-end-time"],
  setup(props, { emit }) {
    const currentDate = useCurrentDate();
    const reportedTimePerDay = computed(() => {
      if (startTime.value && endTime.value) {
        return useSubstractTimes(startTime.value!, endTime.value!);
      }

      return "00:00";
    });

    const startTime = computed({
      get: () => props.workDay.startTime,
      set: (value) => {
        emit("update-start-time", value);
        emit("update-reported-time", reportedTimePerDay);
      },
    });
    const endTime = computed({
      get: () => props.workDay.endTime,
      set: (value) => {
        emit("update-end-time", value);
        emit("update-reported-time", reportedTimePerDay);
      },
    });

    return {
      reportedTimePerDay,
      currentDate,
      startTime,
      endTime,
    };
  },
});
</script>
<style lang="scss" scoped>
.ReportDayTime {
  background: white;
  border-radius: 10px;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
  flex-basis: 204px;
  border: 1px solid white;

  &.hover {
    border: 1px solid #5b34ea;
  }

  &:hover,
  &:focus {
    border: 1px solid #5b34ea;
  }

  &:nth-child(7n) {
    margin-right: 0;
  }

  .current-day {
    max-width: 20px;
    margin-right: 5px;
    font-size: 14px;
    color: #c8c7cc;

    &.highlighted {
      color: white;
      background: #5b34ea;
      border-radius: 5px;
      padding: 5px;
    }
  }

  .start-time {
    &__description {
      font-size: 14px;
      margin-right: 5px;
    }
  }

  .end-time {
    &__description {
      font-size: 14px;
      margin-right: 5px;
    }
  }

  &-input {
    background: white;
    padding: 10px;
    text-align: center;
    border: 1px solid ghostwhite;
    border-radius: 8px;
  }

  .reported-hours {
    font-size: 14px;
    margin-right: 5px;
  }
}
</style>
