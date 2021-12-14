import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { videosRouter } from "./videos.routes";

const routes = Router();

routes.use("/categories", categoriesRouter);
routes.use("/videos", videosRouter);

export { routes };