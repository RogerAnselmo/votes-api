import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Candidate } from '@models/candidate.model';
import { Vote } from '@models/vote.model';

@Entity()
export class Contest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @OneToMany(() => Vote, vote => vote.contest)
  votes: Vote[];

  @ManyToMany(() => Candidate, {eager: true})
  @JoinTable()
  candidates: Candidate[];
}
