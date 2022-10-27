<template>
  <section class="ReportLayout w-100">
    <Loader v-if="isLoading" />
    <main v-else>
      <WeekDays />
      <div class="d-flex flex-wrap">
        <ReportDayTime
          v-for="(day, idx) in currentUserConfiguration"
          :work-day="day"
          :key="`user${idx}`"
          @update-reported-time="onUpdateTime(day, $event)"
          @update-start-time="day.startTime = $event"
          @update-end-time="day.endTime = $event"
        />
      </div>
    </main>
  </section>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  SetupContext,
  watch,
} from "vue";
import { Loader, ReportDayTime, WeekDays } from "@/components";
import { useCalculateTotalTime, useLocalState } from "@/helpers";
import { useRoute } from "vue-router";
import { UserConfiguration, WorkDay } from "./types";
import { RequestMethods, useAxios } from "@/helpers/useAxios";

export default defineComponent({
  name: "ReportLayout",
  components: { WeekDays, ReportDayTime, Loader },
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
    const [isLoading, setIsLoading] = useLocalState(true);

    onMounted(async () => {
      const { response, loading } = await useAxios({ url: "/api/users" });

      setIsLoading(loading.value);
      allUsersConfiguration.value = response.value;
    });

    const route = useRoute();
    const allUsersConfiguration = ref<UserConfiguration[]>([]);

    const currentUserConfiguration = computed(() => {
      return allUsersConfiguration.value.find(
        (config) => config.userName === route.query.name
      )?.config;
    });

    const currentUserId = computed(() => {
      return allUsersConfiguration.value.find(
        (config) => config.userName === route.query.name
      )?.id;
    });

    const generalTime = computed(() =>
      useCalculateTotalTime(currentUserConfiguration.value!)
    );

    const onUpdateTime = async (day: WorkDay, updateTo: string) => {
      const { response } = await useAxios({
        url: `/api/users/${currentUserId.value}`,
        method: RequestMethods.Patch,
        body: {
          data: day,
        },
      });
      day.reportedTime = updateTo;
      emit("update-report-time", generalTime.value);
    };

    watch(
      () => props.newEmployeeName,
      async () => {
        const { response } = await useAxios({
          url: "/api/users",
          method: RequestMethods.Post,
          body: {
            data: props.newEmployeeName,
          },
        });

        allUsersConfiguration.value.push(response.value);
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
      isLoading,
    };
  },
});
</script>
<style lang="scss" scoped>
.ReportLayout {
  max-width: 1840px;
}
</style>
