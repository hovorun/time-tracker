<template>
  <HeaderBar :total-time-amount="totalReportedTime"></HeaderBar>
  <router-view @update-report-time="onUpdateReportTime"></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HeaderBar } from "@/layout";
import { useLocalState } from "@/helpers";

export default defineComponent({
  name: "App",
  components: {
    HeaderBar,
  },
  setup() {
    const [totalReportedTime, setTotalReportedTime] = useLocalState("00:00");
    const onUpdateReportTime = (updatedReportedTime: string) => {
      setTotalReportedTime(updatedReportedTime);
    };
    return { onUpdateReportTime, totalReportedTime };
  },
});
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
