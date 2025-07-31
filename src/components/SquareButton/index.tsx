import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

type SquareButtonProps = {
  children: React.ReactNode;
  buttonLink?: string;
} & React.ComponentProps<'a'>;

export function SquareButton({
  children,
  buttonLink,
  ...props
}: SquareButtonProps) {
  return (
    <>
      <RouterLink to={buttonLink || ''} {...props}>
        <button className={styles.nav__button}>{children}</button>
      </RouterLink>
    </>
  );
}
