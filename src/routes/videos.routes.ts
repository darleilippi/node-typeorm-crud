import { Router } from "express";
import { CreateVideoController } from "../controllers/Video/CreateVideoController";
import { DeleteVideoController } from "../controllers/Video/DeleteVideoController";
import { GetAllVideoController } from "../controllers/Video/GetAllVideoController";
import { UpdateVideoController } from "../controllers/Video/UpdateVideoController";

const videosRouter = Router();

videosRouter.post("/", new CreateVideoController().handle);
videosRouter.get("/", new GetAllVideoController().handle);
videosRouter.delete("/:id", new DeleteVideoController().handle);
videosRouter.put("/:id", new UpdateVideoController().handle);

export { videosRouter };