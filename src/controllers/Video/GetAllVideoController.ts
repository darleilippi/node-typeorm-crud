import { Request, Response } from "express";
import { GetAllVideoService } from "../../services/Video/GetAllVideoService";

export class GetAllVideoController {
    async handle(request: Request, response: Response) {
        const service = new GetAllVideoService();

        const result = await service.execute();

        return response.json(result);
    }
}