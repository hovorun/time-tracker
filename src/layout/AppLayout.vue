<template>
  <div class="AppLayout d-flex">
    <EmployeeSidebar
      @update-config="newEmployeeName = $event"
      :current-employee-name="name"
    />
    <ReportLayout
      :new-employee-name="newEmployeeName"
      :current-employee-name="name"
      @update-report-time="$emit('update-report-time', $event)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ReportLayout, EmployeeSidebar } from "@/layout";
import { useLocalState } from "@/helpers";

export default defineComponent({
  name: "AppLayout",
  components: { ReportLayout, EmployeeSidebar },
  props: {
    name: {
      type: String,
    },
  },
  emits: ["update-report-time"],
  setup() {
    const [newEmployeeName] = useLocalState("");
    return { newEmployeeName };
  },
});
</script>
<style lang="scss" scoped>
.AppLayout {
  padding-right: 40px;
  background: #f3f6f8;
  min-height: calc(100vh - 76px);
}
</style>
