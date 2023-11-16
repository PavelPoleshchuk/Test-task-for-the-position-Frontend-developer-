import styles from "./NotFound.module.scss";

export default function NotFound() {
  console.log("not found===");
  return <h1 className={styles.text}>Error 404 page not found :(</h1>;
}
