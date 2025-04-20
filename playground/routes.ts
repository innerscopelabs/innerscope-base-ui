import { Routes, PageRouterConfig } from "innerscope";
import { HomePage } from "./pages";

export const page_routes: Routes = [
  {
    path: "./",
    component: HomePage,
  },
];

export const route_config: PageRouterConfig = {
  mode: "history",
  routes: page_routes,
};
