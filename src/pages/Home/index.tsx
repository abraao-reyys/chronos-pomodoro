import { Cycles } from '../../components/Cycles';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { useTaskcontext } from '../../contexts/TaskContext/useTaskContext';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';

import styles from './styles.module.css';

import { CirclePlayIcon } from 'lucide-react';

export function Home() {
  const { state } = useTaskcontext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
