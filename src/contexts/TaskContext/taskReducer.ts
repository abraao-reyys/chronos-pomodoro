import { TaskActionTypes, type TaskActionModel } from './taskActions';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getFormattedSecondsRemaining } from '../../utils/getFormattedSecondsRemaining';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;
      const formattedSecondsRemaining =
        getFormattedSecondsRemaining(secondsRemaining);

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining,
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }

  return state;
}
