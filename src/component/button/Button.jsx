import css from './Button.module.css';

function Button({ children }) {
  return <button className={css.btn}>{children}</button>;
}

export default Button;