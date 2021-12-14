import { Router } from "express";
import { CreateCategoryController } from "../controllers/Category/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/Category/DeleteCategoryController";
import { GetAllCategoryController } from "../controllers/Category/GetAllCategoryController";
import { UpdateCategoryController } from "../controllers/Category/UpdateCategoryController";

const categoriesRouter = Router();

categoriesRouter.post("/", new CreateCategoryController().handle);
categoriesRouter.get("/", new GetAllCategoryController().handle);
categoriesRouter.delete("/:id", new DeleteCategoryController().handle);
categoriesRouter.put("/:id", new UpdateCategoryController().handle);

export { categoriesRouter };