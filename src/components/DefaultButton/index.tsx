import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'red' | 'green';
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, color = 'green', ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles['default-button']} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
