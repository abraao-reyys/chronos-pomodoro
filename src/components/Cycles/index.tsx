import styles from './styles.module.css';

export function Cycles() {
  return (
    <>
      <div className={styles['task-form__cycles']}>
        <div
          className={`${styles['task-form__cycle']} ${styles['cycle--pomodori']}`}
        ></div>
        <div
          className={`${styles['task-form__cycle']} ${styles['cycle--pause']}`}
        ></div>
        <div
          className={`${styles['task-form__cycle']} ${styles['cycle--pomodori']}`}
        ></div>
        <div
          className={`${styles['task-form__cycle']} ${styles['cycle--pause']}`}
        ></div>
        <div
          className={`${styles['task-form__cycle']} ${styles['cycle--pomodori']}`}
        ></div>
        <div
          className={`${styles['task-form__cycle']} ${styles['cycle--pause']}`}
        ></div>
        <div
          className={`${styles['task-form__cycle']} ${styles['cycle--pomodori']}`}
        ></div>
        <div
          className={`${styles['task-form__cycle']} ${styles['cycle--high-pause']}`}
        ></div>
      </div>
    </>
  );
}
