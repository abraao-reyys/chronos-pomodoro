import type { TaskModel } from '../models/TaskModel';

export function getTaskType(task: TaskModel) {
  switch (task.type) {
    case 'pomodori': {
      return 'Foco';
    }
    case 'pause': {
      return 'Descanso curto';
    }
    case 'highPause': {
      return 'Descanso longo';
    }
    default: {
      return 'error';
    }
  }
}
