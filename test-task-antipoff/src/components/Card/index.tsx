import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import { IUser } from "../../types/typed";

interface IProps {
  user: IUser;
}
export default function Card({ user }: IProps) {
  return (
    <Link to={`/card/${user.id}`} className={styles.card}>
      <img src={user.avatar} alt={user.last_name} />
      <p>{user.first_name + " " + user.last_name}</p>
    </Link>
  );
}
