import express from "express";
import swagger from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerDocs from "./swagger.json";

const app = express();
const swaggerOptions = {
  swaggerOptions: {
    validatorUrl: null,
  },
};

app.use(express.json());
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocs, swaggerOptions));
app.use("/users", usersRoutes);

export { app };
