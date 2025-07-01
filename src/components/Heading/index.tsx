import styles from './styles.module.css';

import { SquareButton } from '../SquareButton';
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
      <a href='#'>
        <div className={styles.header__logo}>
          <TimerIcon className={styles.header__icon} />
          <div className={styles.header__text}>Chronos</div>
        </div>
      </a>
      <nav className={styles.nav}>
        <SquareButton buttonLink='#1'>
          <HouseIcon />
        </SquareButton>
        <SquareButton buttonLink='#2'>
          <HistoryIcon />
        </SquareButton>
        <SquareButton buttonLink='#3'>
          <SettingsIcon />
        </SquareButton>
        <SquareButton buttonLink='#4'>
          <SunIcon />
        </SquareButton>
      </nav>
    </header>
  );
}
