import { Cycles } from '../../components/Cycles';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { useTaskcontext } from '../../contexts/TaskContext/useTaskContext';
import { MainTemplate } from '../../templates/MainTemplate';

import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';

import styles from './styles.module.css';

import { CirclePlayIcon, CircleStopIcon } from 'lucide-react';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Home() {
  const { state, dispatch } = useTaskcontext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput === null) return;

    const taskName = taskNameInput.current?.value.trim() ?? '';

    if (!taskName) {
      alert('Digite o nome da tarefa!');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch( {type: TaskActionTypes.START_TASK, payload: newTask } );
  }

  function handleInterruptTask() {
    dispatch( {type: TaskActionTypes.INTERRUPT_TASK } );
    // setState(prevState => {
    //   return {
    //     ...prevState,
    //     activeTask: null,
    //     secondsRemaining: 0,
    //     formattedSecondsRemaining: '00:00',
    //     tasks: prevState.tasks.map(task => {
    //       if (prevState.activeTask && prevState.activeTask.id === task.id) {
    //         return { ...task, interruptDate: Date.now() };
    //       }
    //       return task;
    //     }),
    //   };
    // });
  }

  return (
    <MainTemplate>
      <div className={styles['main__content']}>
        <div className={styles['time-display']}>
          {state.formattedSecondsRemaining}
        </div>
        <form
          onSubmit={handleCreateNewTask}
          className={styles['task-form']}
          action='/'
        >
          <div className={styles['task-form__field']}>
            <label className='task-form__label' htmlFor='inameTask'>
              task
            </label>
            <DefaultInput
              type='text'
              name='name-task'
              id='inameTask'
              placeholder='Digite algo'
              ref={taskNameInput}
              disabled={!!state.activeTask}
            />
          </div>
          <div className={styles['task-form__field']}>Foque por 25min</div>
          <div className={styles['task-form__field']}>
            {state.currentCycle > 0 && (
              <span className='task-form__subtitle'>Ciclos:</span>
            )}
            <Cycles />
          </div>
          <div className={styles['task-form__field']}>
            {!state.activeTask ? (
              <DefaultButton
                key='start_button'
                aria-label='Iniciar nova tarefa'
                title='Iniciar nova tarefa'
                type='submit'
                icon={<CirclePlayIcon />}
                color='green'
              />
            ) : (
              <DefaultButton
                key='interrupt_button'
                aria-label='Interromper tarefa'
                title='Interromper tarefa'
                type='button'
                icon={<CircleStopIcon />}
                color='red'
                onClick={handleInterruptTask}
              />
            )}
          </div>
        </form>
      </div>
    </MainTemplate>
  );
}
