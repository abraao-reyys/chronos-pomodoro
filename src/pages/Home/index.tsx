import { Cycles } from '../../components/Cycles';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';

import { CirclePlayIcon } from 'lucide-react';

export function Home() {
  return (
    <MainTemplate>
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
    </MainTemplate>
  );
}
