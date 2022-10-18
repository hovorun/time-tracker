import { shallowMount } from "@vue/test-utils";

import { EmployeeSidebar } from "@/layout";

describe("EmployeeSidebar", () => {
  const mockedEmployeesConfig = [{ id: 1, name: "Volodymyr" }];
  const wrapper = shallowMount(EmployeeSidebar, {
    props: {
      currentEmployeeName: "Volodymyr",
    },
    data() {
      return {
        employees: mockedEmployeesConfig,
      };
    },
  });

  it("It should load successfully", () => {
    expect(wrapper.find(".EmployeeSidebar").exists()).toBe(true);
  });

  it("It should highlight selected employee name", () => {
    expect(
      wrapper.find(".employee-section").classes().includes("highlighted")
    ).toBe(true);
  });

  it("It should update employees config", () => {
    const addEmployee = wrapper.find(".add-employee");
    addEmployee.trigger("click");
    expect(wrapper.vm.employees["length"]).toBe(2);
  });
});
