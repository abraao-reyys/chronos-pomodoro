import { useTaskcontext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskcontext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    pomodori: <span>Foque por {state.config.pomodori}min</span>,
    pause: <span>Descanse por {state.config.pause}min</span>,
    highPause: <span>Descanse por {state.config.highPause}min</span>,
  };

  const tipsForWhenNoActiveTask = {
    pomodori: <span>Próximo ciclo é de {state.config.pomodori}min</span>,
    pause: <span>Próximo descanso é de {state.config.pause}min</span>,
    highPause: <span>Próximo descanso é de {state.config.highPause}min</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForWhenNoActiveTask[nextCycleType]}
    </>
  );
}
