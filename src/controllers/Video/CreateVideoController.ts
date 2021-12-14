import { Request, Response } from "express";
import { CreateVideoService } from "../../services/Video/CreateVideoService";

export class CreateVideoController {
    async handle(request: Request, response: Response) {
        const {
            name,
            description,
            duration,
            categories_id
        } = request.body;

        const service = new CreateVideoService();

        const result = await service.execute({name, description, duration, categories_id});

        if (result instanceof Error) {
            response.status(400).json(result.message);
        }

        return response.json(result);
    }
}