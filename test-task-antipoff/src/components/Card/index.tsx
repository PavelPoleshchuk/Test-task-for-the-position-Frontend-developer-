import React from "react";
import styles from "./Card.module.scss";
import { IUser } from "../../pages/MainPage";
import { Link } from "react-router-dom";

interface IProps {
  user: IUser;
}
export default function Card({ user }: IProps) {
  return (
    <Link to={`/${user.id}`} className={styles.card}>
      <img src={user.avatar} alt={user.last_name} />
      <p>{user.first_name + " " + user.last_name}</p>
    </Link>
  );
}
