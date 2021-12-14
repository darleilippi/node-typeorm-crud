import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
    name: string;
    description: string;
}

export class GetAllCategoryService {
    async execute() {
        const repo = getRepository(Category);

        const categories = repo.find();

        return categories;
    }
}