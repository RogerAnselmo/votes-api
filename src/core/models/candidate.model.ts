import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    braza: string;

    @Column({nullable: false})
    brazante: string;

    @Column({nullable: false})
    chaama: string;
}