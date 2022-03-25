import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Contest } from './contest.model';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false })
  name: string;
}
