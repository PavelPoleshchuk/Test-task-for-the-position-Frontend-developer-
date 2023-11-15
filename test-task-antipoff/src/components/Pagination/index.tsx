import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSelectedPage } from "../../redux/sliceSelectedPage";

export default function Pagination() {
  const fetchData = useSelector((state: RootState) => state.fetchData.data);
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setSelectedPage(e.selected + 1))}
      pageRangeDisplayed={fetchData.per_page}
      pageCount={fetchData.total_pages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
