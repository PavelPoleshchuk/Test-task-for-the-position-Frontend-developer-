import styles from "./Header.module.scss";
import { removeToken } from "../../tools/useToken";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTokenInStorage } from "../../redux/sliceToken";

export default function Header() {
  const dispatch = useDispatch();
  const tokenInStorage = useSelector(
    (state: RootState) => state.tokenAndForm.tokenInStorage
  );

  const handleClick = () => {
    if (!tokenInStorage) {
      return;
    }
    removeToken();
    dispatch(setTokenInStorage(false));
  };
  return (
    <header className={styles.header}>
      <button onClick={() => handleClick()} className="button button__right">
        <span>{tokenInStorage ? "Выход" : "Регистрация"}</span>
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4H19C20.1046 4 21 4.89543 21 6V7M16 20H19C20.1046 20 21 19.1046 21 18V17M4.4253 19.4276L10.4253 21.2276C11.7085 21.6126 13 20.6517 13 19.3119V4.68806C13 3.34834 11.7085 2.38744 10.4253 2.77241L4.4253 4.57241C3.57934 4.8262 3 5.60484 3 6.48806V17.5119C3 18.3952 3.57934 19.1738 4.4253 19.4276Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M9.001 12H9"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M16 12H21M21 12L19 10M21 12L19 14"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div className="container">
        <div className={styles.header__text}>
          <h1>Наша команда</h1>
          <p>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.{" "}
          </p>
        </div>
      </div>
    </header>
  );
}
