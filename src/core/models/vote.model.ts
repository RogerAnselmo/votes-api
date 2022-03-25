import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Candidate } from './candidate.model';
import { Contest } from './contest.model';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  date: Date;

  @OneToOne(() => Candidate, { eager: true })
  @JoinColumn({ name: 'candidate_id' })
  candidate: Candidate;

  @OneToOne(() => Contest, { eager: true })
  @JoinColumn({ name: 'contest_id' })
  contest: Contest;
}
