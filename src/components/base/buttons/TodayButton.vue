<template>
  <button class="TodayButton pointer" @click="scrollToCurrentDay">Today</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodayButton",
  components: {},
  props: {},
  setup() {
    const scrollToCurrentDay = () => {
      const elementToScroll = document.querySelector(
        ".current-day.highlighted"
      )!;

      window.scrollTo(
        0,
        elementToScroll?.getBoundingClientRect().top + window.scrollY - 400
      );
      elementToScroll.parentElement?.focus();
    };

    return { scrollToCurrentDay };
  },
});
</script>
<style lang="scss" scoped>
.TodayButton {
  text-transform: uppercase;
  border: 1px solid white;
  padding: 10px;
  border-radius: 8px;
  color: white;
  background: transparent;
}
</style>
