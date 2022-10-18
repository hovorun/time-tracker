<template>
  <aside class="EmployeeSidebar w-100">
    <h4 class="sidebar-header">Employees list:</h4>
    <section
      class="employee-section pointer"
      v-for="employee of employees"
      :key="employee.id"
      :class="{ highlighted: employee.name === currentEmployeeName }"
    >
      <p class="employee-name" @click="redirectToEmployee(employee.name)">
        {{ employee.name }}
      </p>
    </section>
    <button class="add-employee pointer" @click="addNewEmployee">
      + Add employee
    </button>
  </aside>
</template>
<script lang="ts">
import { defineComponent, ref, SetupContext } from "vue";
import { useRouter } from "vue-router";

export interface Employee {
  id: number;
  name: string;
}

export default defineComponent({
  name: "EmployeeSidebar",
  props: {
    currentEmployeeName: {
      type: String,
    },
  },
  emits: ["update-config"],
  setup(_, { emit }: SetupContext) {
    const employees = ref<Employee[]>([{ id: 1, name: "Volodymyr" }]);

    const router = useRouter();

    const redirectToEmployee = async (employeeName: string) => {
      await router.push({
        name: "AppLayout",
        query: { name: employeeName },
      });
    };

    const addNewEmployee = () => {
      const newEmployeeId = employees.value.length + 1;
      employees.value.push({
        id: newEmployeeId,
        name: `TestEmployee${newEmployeeId}`,
      });
      emit("update-config", `TestEmployee${newEmployeeId}`);
    };

    return { employees, addNewEmployee, redirectToEmployee };
  },
});
</script>
<style lang="scss" scoped>
.EmployeeSidebar {
  max-width: 150px;
  padding: 0 10px;
  margin-right: 15px;
  background: white;

  .sidebar-header {
    padding: 20px 10px;
    margin-bottom: 0;
  }

  .employee-section {
    padding: 5px 15px;
    border-radius: 8px;
    margin-bottom: 5px;

    &.highlighted {
      background: #e6f4fe;
    }

    &:hover {
      background: #e6f4fe;
    }
  }

  .employee-name {
    margin: 0;
    font-size: 14px;
  }

  .add-employee {
    background: none;
    color: #008ef4;
    font-size: 14px;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    &:hover {
      background: #e6f4fe;
    }
  }
}
</style>
