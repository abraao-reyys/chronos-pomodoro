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
  console.log(buttonLink);
  return (
    <>
      <a href={buttonLink} {...props}>
        <button className={styles.nav__button}>{children}</button>
      </a>
    </>
  );
}
