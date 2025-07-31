import { Link } from 'react-router';
import styles from './styles.module.css';

type SquareButtonProps = {
  children: React.ReactNode;
  buttonLink: string;
} & React.ComponentProps<'a'>;

export function SquareButton({
  children,
  buttonLink,
  ...props
}: SquareButtonProps) {
  return (
    <>
      <Link to={buttonLink} {...props}>
        <button className={styles.nav__button}>{children}</button>
      </Link>
    </>
  );
}
