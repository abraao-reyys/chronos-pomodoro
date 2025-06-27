import { CircleStopIcon } from 'lucide-react';

export function Home() {
  return (
    <div className='main__content'>
      {/* Alterado com base na seção */}
      <div className='time-display'>
        <span className='time-display__unit'>09</span>
        <span className='time-display__separator'>:</span>
        <span className='time-display__unit'>38</span>
      </div>
      <form className='task-form' action='/'>
        <div className='task-form__field'>
          <label className='task-form__label' htmlFor='inameTask'>
            task
          </label>
          <input
            className='task-form__input'
            type='text'
            name='name-task'
            id='inameTask'
          />
        </div>
        <div className='task-form__field'>Foque por 25min</div>
        <div className='task-form__field'>
          <span className='task-form__subtitle'></span>
          <div className='task-form__cycles'>{/* cycle divs */}</div>
        </div>
        <div className='task-form__field'>
          <button className='task-form__button'>
            <CircleStopIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
