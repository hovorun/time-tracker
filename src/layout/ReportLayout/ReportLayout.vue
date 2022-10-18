<template>
  <main class="ReportLayout w-100">
    <WeekDays />
    <div class="d-flex flex-wrap">
      <ReportDayTime
        v-for="(day, idx) in currentUserConfiguration"
        :work-day="day"
        :key="idx"
        @update-reported-time="onUpdateTime(day, $event)"
        @update-start-time="day.startTime = $event"
        @update-end-time="day.endTime = $event"
      />
    </div>
  </main>
</template>
<script lang="ts">
import { computed, defineComponent, ref, SetupContext, watch } from "vue";
import { WeekDays, ReportDayTime } from "@/components";
import { useCalculateTotalTime, useCreateMockedConfiguration } from "@/helpers";
import { useRoute } from "vue-router";
import { UserConfiguration, WorkDay } from "./types";

export default defineComponent({
  name: "ReportLayout",
  components: { WeekDays, ReportDayTime },
  props: {
    currentEmployeeName: {
      type: String,
      required: true,
    },
    newEmployeeName: {
      type: String,
      required: true,
    },
  },
  emits: ["update-report-time"],
  setup(props, { emit }: SetupContext) {
    const route = useRoute();

    const allUsersConfiguration = ref<UserConfiguration[]>([
      useCreateMockedConfiguration(props.currentEmployeeName),
    ]);

    const currentUserConfiguration = computed(() => {
      return allUsersConfiguration.value.find(
        (config) => config.userName === route.query.name
      )?.config;
    });

    const generalTime = computed(() =>
      useCalculateTotalTime(currentUserConfiguration.value!)
    );

    const onUpdateTime = (day: WorkDay, updateTo: string) => {
      day.reportedTime = updateTo;
      emit("update-report-time", generalTime.value);
    };

    watch(
      () => props.newEmployeeName,
      () => {
        allUsersConfiguration.value.push(
          useCreateMockedConfiguration(props.newEmployeeName)
        );
      }
    );

    watch(
      () => route.query.name,
      () => setTimeout(() => emit("update-report-time", generalTime.value))
    );

    return {
      onUpdateTime,
      currentUserConfiguration,
      allUsersConfiguration,
      generalTime,
    };
  },
});
</script>
<style lang="scss" scoped>
.ReportLayout {
  max-width: 1840px;
}
</style>
