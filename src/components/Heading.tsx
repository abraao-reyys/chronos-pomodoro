import styles from './Heading.module.css';

import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';

export function Heading() {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__logo}>
        <TimerIcon className={styles.header__icon} />
        <div className={styles.header__text}>Chronos</div>
      </div>
      <nav className='nav'>
        <button className='nav__button'>
          <HouseIcon />
        </button>
        <button className='nav__button'>
          <HistoryIcon />
        </button>
        <button className='nav__button'>
          <SettingsIcon />
        </button>
        <button className='nav__button'>
          <SunIcon />
        </button>
      </nav>
    </header>
  );
}
