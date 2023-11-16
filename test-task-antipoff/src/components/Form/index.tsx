import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import { useDispatch } from "react-redux";
import { setFormValues } from "../../redux/sliceForm";
import { getToken, setToken } from "../../tools/useToken";
import { setTokenInStorage } from "../../redux/sliceToken";

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
  const dispatch = useDispatch();

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
      console.log("Form data=", data);
      dispatch(setFormValues(data));

      const fetchToken = (email: string, password: string) => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        };
        fetch("https://reqres.in/api/register", requestOptions)
          .then((res) => {
            if (res.status != 200) {
              alert(`Response status in function 'fetchToken': ${res.status} ВНИМАНИЕ!!! В проекте использыется учебный сервер. Возврат токена возможен только для определенных пользователей. Для успешного получения токена введите следующие данные: email: eve.holt@reqres.in 
              password: pistol`);
            } else return res.json();
          })
          .then((data) => {
            console.log("Токен полученный из fetchToken= ", data);
            if (data.token) {
              setToken(data.token);
              dispatch(setTokenInStorage(true));
              reset();
            }
          });
      };
      fetchToken(data.email, data.password1);
      console.log("getToken()?.value=", getToken()?.value);
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
