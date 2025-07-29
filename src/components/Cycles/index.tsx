import { useTaskcontext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskcontext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    pomodori: 'foco',
    pause: 'descanso curto',
    highPause: 'descanso longo',
  };

  return (
    <>
      <div className={styles['task-form__cycles']}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <div
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles['task-form__cycle']} ${
                styles[`cycle--${nextCycleType}`]
              }`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
            ></div>
          );
        })}
      </div>
    </>
  );
}
