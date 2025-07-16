import { Cycles } from '../../components/Cycles';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { useTaskcontext } from '../../contexts/TaskContext/useTaskContext';
import { MainTemplate } from '../../templates/MainTemplate';

import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';

import styles from './styles.module.css';

import { CirclePlayIcon } from 'lucide-react';

export function Home() {
  const { state, setState } = useTaskcontext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput === null) return;

    const taskName = taskNameInput.current?.value.trim() ?? ''; // retorna '' se for null

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
      duration: 1,
      type: 'pomodori',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1, //conferir
        secondsRemaining, //conferir
        formattedSecondsRemaining: '00:00', //conferir
        tasks: [...prevState.tasks, newTask],
      };
    });
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
            />
          </div>
          <div className={styles['task-form__field']}>Foque por 25min</div>
          <div className={styles['task-form__field']}>
            <span className='task-form__subtitle'>Ciclos:</span>
            <Cycles />
          </div>
          <div className={styles['task-form__field']}>
            <DefaultButton icon={<CirclePlayIcon />} color='green' />
          </div>
        </form>
      </div>
    </MainTemplate>
  );
}
