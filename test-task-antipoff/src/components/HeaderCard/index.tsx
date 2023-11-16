import styles from "./HeaderCard.module.scss";
import { Link } from "react-router-dom";
import { IUser } from "../../types/typed";
interface IProps {
  user: IUser;
}
export default function HeaderCard({ user }: IProps) {
  return (
    <header className={styles.header}>
      <Link to={`/`} className="button button__left">
        <span>Назад</span>
        <svg
          height="25px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="25px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
        </svg>
      </Link>
      <div className="container">
        <img src={user.avatar} alt={user.last_name} />
        <div className={styles.text}>
          <p
            className={styles.text__name}
          >{`${user.first_name} ${user.last_name}`}</p>
          <p className={styles.text__job}>Партнер</p>
        </div>
      </div>
    </header>
  );
}
