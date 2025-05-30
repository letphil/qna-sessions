import { serve } from "@hono/node-server";
import { Hono } from "hono";

import clientRoutes from "./client/index.tsx";

const app = new Hono();

// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });

app.get("/ping", (c) => {
  return c.text("pong");
});

// client routes
app.route("/", clientRoutes);

serve(
  {
    fetch: app.fetch,
    port: 8888,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
