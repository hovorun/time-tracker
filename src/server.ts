import { Server } from "miragejs";
import { useCreateConfiguration } from "@/helpers";
import { WorkDay } from "@/layout/ReportLayout/types";

const DEFAULT_MONTH_CONFIG = useCreateConfiguration("Volodymyr");

new Server({
  seeds(server) {
    server.db.loadData({
      users: [DEFAULT_MONTH_CONFIG],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/users", (schema) => {
      return schema.db.users;
    });

    this.post("/users", (schema, request) => {
      const userName = JSON.parse(request.requestBody).data;

      return schema.db.users.insert({ ...useCreateConfiguration(userName) });
    });

    this.patch("/users/:id", (schema, request) => {
      const userToUpdate = schema.db.users.find(request.params.id);
      const data = JSON.parse(request.requestBody).data;
      const indexOfConfig =
        userToUpdate.config.findIndex((el: WorkDay) => el?.id === data.id) - 1;

      userToUpdate.config[indexOfConfig] = data;
      return schema.db.users.update(request.params.id, userToUpdate);
    });
  },
});
