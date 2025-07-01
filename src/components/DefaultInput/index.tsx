import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  type,
  id,
  name,
  placeholder,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <input
        className={styles['default-input']}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}
