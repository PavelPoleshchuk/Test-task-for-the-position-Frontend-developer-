import styles from "./CardPage.module.scss";
import { IUser } from "../MainPage";
import Header from "../../components/Header";
import HeaderCard from "../../components/HeaderCard";
// import { useNavigate, useParams } from "react-router-dom";

interface IProps {
  user: IUser;
}
export default function CardPage({ user }: IProps) {
  // const navigate = useNavigate();
  // const { id } = useParams();
  // const note = notes.find((note) => note.id === id);
  return (
    <div className="wrapper">
      <HeaderCard user={user} />
      <div className="container">
        <div className="cards__blok">
          <div className={styles.card}>
            <p>
              <b>ID:</b>
              {` ${user.id}`}
            </p>
            <p>
              <b>First name:</b>
              {` ${user.first_name}`}
            </p>
            <p>
              <b>Last name:</b>
              {` ${user.last_name}`}
            </p>
            <p>
              <b>E-mail:</b>
              {` ${user.email}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
