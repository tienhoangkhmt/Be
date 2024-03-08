import { Task_Status } from '../types/task.type';

export class CreateTaskDto {
  taskId: number;
  // parentId?: number | null;
  title: string;
  // sprintId?: number;
  description?: string;
  // assignment?: number;
  estimate?: Date;
  status?: Task_Status;
  startDate?: Date;
  endDate?: Date;
}
