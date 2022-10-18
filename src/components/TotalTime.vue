<template>
  <div class="TotalTime">
    <p class="time-amount capitalize">
      Reported per month:
      {{ hours + " " + usePluralizeFormatter(hours, "hour") }}
      {{ minutes + " " + usePluralizeFormatter(minutes, "minute") }}
    </p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { usePluralizeFormatter } from "@/helpers";

export default defineComponent({
  name: "TotalTime",
  components: {},
  props: {
    totalTimeAmount: {
      type: String,
      default: "00:00",
    },
  },
  setup(props) {
    const hours = computed(() => Number(props.totalTimeAmount.split(":")[0]));
    const minutes = computed(() => Number(props.totalTimeAmount.split(":")[1]));
    return { hours, minutes, usePluralizeFormatter };
  },
});
</script>
<style lang="scss" scoped>
.TotalTime {
  .time-amount {
    color: white;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid white;
  }
}
</style>
