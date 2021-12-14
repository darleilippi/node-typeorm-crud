import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { Video } from "../../entities/Video";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    categories_id: string;
}

export class CreateVideoService {
    async execute({ name, description, duration, categories_id }: VideoRequest): Promise<Video | Error> {
        const repo = getRepository(Video);
        const repoCategory = getRepository(Category);

        if (await repo.findOne({name})) {
            return new Error("Video already exists!");
        }

        if (await !repoCategory.findOne({id: categories_id})) {
            return new Error("Category does not exists!");
        }

        const video = repo.create({
            name,
            description,
            duration,
            categories_id
        });

        await repo.save(video);

        return video;
    }
}