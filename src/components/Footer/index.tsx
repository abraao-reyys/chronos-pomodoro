import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={`${styles['footer']} container`}>
      <Link to='/about-pomodoro/' className='footer__link'>
        Entenda como funciona a técnica pomodoro
      </Link>
      <Link to='https://github.com/abraao-reyys' className='footer__link'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Abraão Reis
      </Link>
    </footer>
  );
}
