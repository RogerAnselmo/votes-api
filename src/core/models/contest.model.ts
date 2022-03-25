import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Candidate } from './candidate.model';
import { Vote } from './vote.model';

@Entity()
export class Contest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @OneToMany(() => Vote, vote => vote.contest)
  votes: Vote[];

  @ManyToMany(() => Candidate, candidate => candidate.contests, { eager: true })
  candidates: Candidate[];
}
