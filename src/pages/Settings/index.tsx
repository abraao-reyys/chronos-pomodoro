import { SaveIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useRef } from 'react';
import { useTaskcontext } from '../../contexts/TaskContext/useTaskContext';
import { toastifyAdapter } from '../../adapters/toastifyAdapter';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskcontext();

  const pomodoriInput = useRef<HTMLInputElement>(null);
  const pauseInput = useRef<HTMLInputElement>(null);
  const highPauseInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toastifyAdapter.dismiss();

    const formErrors = [];

    const pomodori = Number(pomodoriInput.current?.value);
    const pause = Number(pauseInput.current?.value);
    const highPause = Number(highPauseInput.current?.value);

    if (isNaN(pomodori) || isNaN(pause) || isNaN(highPause)) {
      formErrors.push('Digite apenas números para todos os campos');
    }

    if (pomodori < 1 || pomodori > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco');
    }

    if (pause < 1 || pause > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto');
    }

    if (highPause < 1 || highPause > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        toastifyAdapter.error(error);
      });
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        pomodori,
        pause,
        highPause,
      },
    });

    toastifyAdapter.sucess('Configurações salvas');
  }
  return (
    <>
      <MainTemplate>
        <div className={styles['main__content']}>
          <div className={styles['heading']}>
            <h1>Configurações</h1>
          </div>
          <div>
            Modifique as configurações para o tempo de foco, descanso curto e
            descanso longo.
          </div>
          <form
            onSubmit={handleSaveSettings}
            action=''
            className={styles['form']}
          >
            <div className={styles['form__field']}>
              <label className={styles['field__title']} htmlFor='pomodori'>
                Foco
              </label>
              <DefaultInput
                id='pomodori'
                title='Foco'
                ref={pomodoriInput}
                defaultValue={state.config.pomodori}
                type='number'
              />
            </div>
            <div className={styles['form__field']}>
              <label className={styles['field__title']} htmlFor='pause'>
                Descanso curto
              </label>
              <DefaultInput
                id='pause'
                ref={pauseInput}
                defaultValue={state.config.pause}
                type='number'
              />
            </div>
            <div className={styles['form__field']}>
              <label className={styles['field__title']} htmlFor='highPause'>
                Descanso longo
              </label>
              <DefaultInput
                id='highPause'
                ref={highPauseInput}
                defaultValue={state.config.highPause}
                type='number'
              />
            </div>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </form>
        </div>
      </MainTemplate>
    </>
  );
}
