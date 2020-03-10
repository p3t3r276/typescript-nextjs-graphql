//import Routes, * as nextRoutes from "next-routes";

//// @ts-ignore
//export const routes = nextRoutes() as Routes;
//export const Router = routes.Router;
//export const Link = routes.Link;

const routes = require("next-routes");
export default routes().add("confirm", "/user/confirm/:token");
