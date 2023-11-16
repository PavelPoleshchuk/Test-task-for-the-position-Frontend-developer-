import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { fetchToken } from "../../tools/useToken";

export type FormValues = {
  name: string;
  email: string;
  password1: string;
  password2: string;
};

const patternMinMax = {
  required: "Поле обязательно к заполнению",
  minLength: {
    value: 3,
    message: "Минимальная длина 3 символа",
  },
  maxLength: {
    value: 20,
    message: "Максимальная длина 20 символа",
  },
};

export const Form = () => {
  const [passwordMatched, setPasswordMatched] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit = (data: FormValues) => {
    if (data.password1 !== data.password2) {
      setPasswordMatched(true);
      setTimeout(() => {
        setPasswordMatched(false);
      }, 3000);
    } else {
      fetchToken(data.email, data.password1, reset);
    }
  };

  return (
    <div className="wrapper center">
      <div className={styles.root}>
        <p>Регистрация</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <label>Имя:</label>
            <input
              className={errors.name && "border--red"}
              type="text"
              placeholder="Введите имя"
              {...register("name", {
                ...patternMinMax,
                pattern: {
                  value: /[A-Z]{1}|[А-Я]{1}/,
                  message: "Первая букава должна быть заглавная",
                },
              })}
            />
          </div>
          <div className={styles.valid}>
            {errors.name && (
              <p className={styles.validP}>{String(errors.name.message)}</p>
            )}
          </div>
          <div className={styles.input}>
            <label>Электронная почта:</label>
            <input
              type="text"
              placeholder="Введите почту"
              {...register("email", {
                ...patternMinMax,
                pattern: {
                  value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                  message: "Некорректный формат мэил",
                },
              })}
            />
          </div>
          <div className={styles.valid}>
            {errors.email && (
              <p className={styles.validP}>{String(errors.email.message)}</p>
            )}
          </div>

          <div className={styles.input}>
            <label>Пароль:</label>
            <input
              type="text"
              placeholder="Введите пароль"
              {...register("password1", patternMinMax)}
            />
          </div>
          <div className={styles.valid}>
            {errors.password1 && (
              <p className={styles.validP}>
                {String(errors.password1.message)}
              </p>
            )}
          </div>
          <div className={styles.input}>
            <label>Подтвердите пароль:</label>
            <input
              type="text"
              placeholder="Введите пароль"
              {...register("password2", patternMinMax)}
            />
          </div>
          <div className={styles.valid}>
            {errors.password2 && (
              <p className={styles.validP}>
                {String(errors.password2.message)}
              </p>
            )}
            {passwordMatched && (
              <p className={styles.validP}>Введенные пароли не совпадают</p>
            )}
          </div>

          <button className="button" type="submit">
            Зарегистрироваться
          </button>
          <div className={styles.valid}></div>
        </form>
      </div>
    </div>
  );
};
