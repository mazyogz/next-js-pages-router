import styles from "./Register.module.scss";
import Link from "next/link";
const RegisterView = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register Page</h1>
      <div className={styles.register__form}>
        <form action="">
          <div className={styles.register__form__items}>
            <label
              htmlFor="email"
              className={styles.register__form__items__label}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className={styles.register__form__items__input}
            />
          </div>
          <div className={styles.register__form__items}>
            <label
              htmlFor="fullname"
              className={styles.register__form__items__label}
            >
              Fullname
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="fullname"
              className={styles.register__form__items__input}
            />
          </div>
          <div className={styles.register__form__items}>
            <label
              htmlFor="password"
              className={styles.register__form__items__label}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className={styles.register__form__items__input}
            />
          </div>
          <button className={styles.register__form__items__button} type="submit">Register</button>
        </form>
      </div>
      <p className={styles.register__link}>Have an account? Sign in <Link href='/auth/login'>here</Link></p>
    </div>
  );
};

export default RegisterView;
