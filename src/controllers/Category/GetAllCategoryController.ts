import { Request, Response } from "express";
import { GetAllCategoryService } from "../../services/Category/GetAllCategoryService";

export class GetAllCategoryController {
    async handle(request: Request, response: Response) {
        const service = new GetAllCategoryService();

        const result = await service.execute();

        return response.json(result);
    }
}