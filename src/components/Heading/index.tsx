import { useState, useEffect } from 'react';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';

import styles from './styles.module.css';

import { SquareButton } from '../SquareButton';

type AvaliableThemes = 'dark' | 'light';

export function Heading() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
    return storageTheme;
  });
  const icon = theme === 'dark' ? <SunIcon /> : <MoonIcon />;

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className={`${styles.header} container`}>
      <a href='#'>
        <div className={styles.header__logo}>
          <TimerIcon className={styles.header__icon} />
          <div className={styles.header__text}>Chronos</div>
        </div>
      </a>
      <nav className={styles.nav}>
        <SquareButton
          buttonLink='#1'
          aria-label='Ir para a Home'
          title='Ir para a Home'
        >
          <HouseIcon />
        </SquareButton>
        <SquareButton
          buttonLink='#2'
          aria-label='Ver histórico'
          title='Ver histórico'
        >
          <HistoryIcon />
        </SquareButton>
        <SquareButton
          buttonLink='#3'
          aria-label='Configurações'
          title='Configurações'
        >
          <SettingsIcon />
        </SquareButton>
        <SquareButton
          buttonLink=''
          aria-label='Alterar tema'
          title='Alterar tema'
          onClick={handleThemeChange}
        >
          {icon}
        </SquareButton>
      </nav>
    </header>
  );
}
