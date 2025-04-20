import { Application, PageRouterConfig } from "innerscope";
import { page_routes, route_config } from "./routes";
import { HomePage } from "./pages";

export const app = new Application({
  title: "InXHeadless-UI",
  routes: route_config,
});
app.onStart(HomePage);
