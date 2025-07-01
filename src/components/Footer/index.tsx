import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={`${styles['footer']} container`}>
      <a href='#footer1' className='footer__link'>
        Entenda como funciona a técnica pomodoro
      </a>
      <a href='#footer2' className='footer__link'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
