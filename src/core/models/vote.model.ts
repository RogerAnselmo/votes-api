import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Candidate } from '@models/candidate.model';
import { Contest } from '@models/contest.model';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  date: Date;

  @OneToOne(() => Candidate)
  @JoinColumn({ name: 'candidate_id' })
  candidate: Candidate;

  @Column()
  candidate_id!: string;

  @OneToOne(() => Contest, { eager: true })
  @JoinColumn({ name: 'contest_id' })
  contest: Contest;

  @Column()
  contest_id!: string;
}
