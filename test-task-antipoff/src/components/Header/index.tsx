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

  console.log("Header-tokenInStorage=", tokenInStorage);

  const handleClick = () => {
    if (!tokenInStorage){return}
    removeToken();
    dispatch(setTokenInStorage(false));
  };
  return (
    <header className={styles.header}>
      <button onClick={() => handleClick()} className="button button__right">
        {tokenInStorage ? "Выход": "Зарегистрируйтесь"}
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
