import { setTokenInStorage } from "../redux/sliceToken";
import { store } from "../redux/store";

export type StoredToken = {
  value: string;
  timeStamp: number;
};

const TOKEN_KEY = "auth_token";
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

const isExpired = (timeStamp?: number): boolean => {
  if (!timeStamp) return false;

  const now = new Date().getTime();
  const diff = now - timeStamp;

  return diff > TOKEN_TTL_MS;
};

const setToken = (access_token: string): void => {
  localStorage.setItem(
    TOKEN_KEY,
    JSON.stringify({
      value: access_token,
      timeStamp: new Date().getTime(),
    })
  );
};

const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

const getToken = (): StoredToken | null => {
  let result = null;

  const storedToken = localStorage.getItem(TOKEN_KEY);
  storedToken && (result = JSON.parse(storedToken));

  return result;
};

const fetchToken = (email: string, password: string, reset:()=>void) => {
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
        alert(`Response status in function 'fetchToken': ${res.status} ВНИМАНИЕ!!! В проекте использыется учебный сервер. Возврат токена возможен только для определенных пользователей. Для успешного получения токена используйте E-mail: eve.holt@reqres.in`);
      } else return res.json();
    })
    .then((data) => {
      if (data.token) {
        setToken(data.token);
        store.dispatch(setTokenInStorage(true));
        reset();
      }
    });
};

export { getToken, setToken, removeToken, isExpired, fetchToken };
