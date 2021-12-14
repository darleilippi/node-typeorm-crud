import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"
import { Category } from "./Category";

@Entity("videos")
export class Video {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    categories_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({name: "categories_id"})
    category: Category;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidv4()
        }
    }
}