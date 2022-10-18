<template>
  <div class="HeaderBar">
    <TodayButton />
    <SelectDate />
    <TotalTime :total-time-amount="totalTimeAmount" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { SelectDate, TotalTime } from "@/components";
import { TodayButton } from "@/components/base/buttons";

export default defineComponent({
  name: "HeaderBar",
  components: { SelectDate, TotalTime, TodayButton },
  props: {
    totalTimeAmount: {
      type: String,
    },
  },
});
</script>
<style lang="scss" scoped>
.HeaderBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #5b34ea;
  padding: 0 50px;
}
</style>
