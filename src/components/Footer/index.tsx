import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={`${styles['footer']} container`}>
      <RouterLink to='/about-pomodoro/' className='footer__link'>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink to='https://github.com/abraao-reyys' className='footer__link'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Abraão Reis
      </RouterLink>
    </footer>
  );
}
