import { Router } from "express";
import { deliveriesRoutes } from "./deliveries-routes";
import { sessionsRoutes } from "./sessions-routes";
import { userRoutes } from "./user-routes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveriesRoutes);

export { routes };
