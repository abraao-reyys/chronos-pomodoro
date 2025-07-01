import styles from './styles.module.css';

type SquareButtonProps = {
  children: React.ReactNode;
  buttonLink: string;
};

export function SquareButton({ children, buttonLink }: SquareButtonProps) {
  console.log(buttonLink);
  return (
    <>
      <a href={buttonLink}>
        <button className={styles.nav__button}>{children}</button>
      </a>
    </>
  );
}
