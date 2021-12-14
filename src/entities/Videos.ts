import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"

@Entity("videos")
export class Category {
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
    categorie: Category;

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