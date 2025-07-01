import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

import styles from './styles.module.css';

import { CirclePlayIcon } from 'lucide-react';

export function Home() {
  return (
    <div className={styles['main__content']}>
      <div className={styles['time-display']}>09:38</div>
      <form className={styles['task-form']} action='/'>
        <div className={styles['task-form__field']}>
          <label className='task-form__label' htmlFor='inameTask'>
            task
          </label>
          <DefaultInput
            type='text'
            name='name-task'
            id='inameTask'
            placeholder='Digite algo'
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
  );
}
