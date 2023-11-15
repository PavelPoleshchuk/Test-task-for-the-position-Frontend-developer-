import styles from "./HeaderCard.module.scss";
import { Link } from "react-router-dom";
import { IUser } from "../../types/typed";
interface IProps {
  user: IUser;
}
export default function HeaderCard({ user }: IProps) {
  return (
    <header className={styles.header}>
      <Link to={`/`} className="button button__left">Назад</Link>
      <Link to={`/`} className="button button__right">Выход</Link>
      <div className="container">
        <img src={user.avatar} alt={user.last_name} />
        <div className={styles.text}>
        <p className={styles.text__name}>{`${user.first_name} ${user.last_name}`}</p>
        <p className={styles.text__job}>Партнер</p>
        </div>
        
      </div>
    </header>
  );
}
