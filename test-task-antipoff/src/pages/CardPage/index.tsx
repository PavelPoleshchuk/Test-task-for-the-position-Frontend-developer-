import styles from "./CardPage.module.scss";
import HeaderCard from "../../components/HeaderCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CardPage() {
  const fetchData = useSelector((state: RootState) => state.fetchData.data);
  const { id } = useParams();
  const user = fetchData.data.find((item) => {
    if (id) {
      return item.id === Number(id);
    }
  });

  return (
    <>
      {user && (
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
      )}
    </>
  );
}
