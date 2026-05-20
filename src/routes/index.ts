import { Router } from "express";
import { deliveriesRoutes } from "./deliveries-routes";
import { deliveryLogsRoutes } from "./delivery-logs-routes";
import { sessionsRoutes } from "./sessions-routes";
import { userRoutes } from "./user-routes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveriesRoutes);
routes.use("/delivery-logs", deliveryLogsRoutes);

export { routes };
