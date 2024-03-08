import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Task_Status } from '../types/task.type';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  taskId: number;

  // @Column()
  // parentId?: number;

  @Column()
  title: string;

  // @Column()
  // sprintId?: number;

  @Column()
  description?: string;

  // @Column()
  // assignment?: number;

  @Column()
  estimate?: Date;

  @Column()
  status?: Task_Status;

  // @Column()
  // startDate?: Date;

  // @Column()
  // endDate?: Date;
}
