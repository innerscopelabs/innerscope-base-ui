import { Application, PageRouterConfig } from "innerscope";
import { page_routes } from "./routes";
import { HomePage } from "./pages";

const route_config: PageRouterConfig = {
    mode: 'history',
    routes: page_routes
}
export const app = new Application({
    title: 'InXHeadless-UI',
    routes: route_config,
})
app.onStart(HomePage)