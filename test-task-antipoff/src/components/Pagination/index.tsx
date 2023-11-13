import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
import { IFetchData } from "../../pages/MainPage";


export interface IProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  fetchData: IFetchData | null;
}
export default function Pagination({ setSelectedPage, fetchData }: IProps) {
  if (fetchData == null) {
    return;
  } else
    return (
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => setSelectedPage(e.selected + 1)}
        pageRangeDisplayed={fetchData.per_page}
        pageCount={fetchData.total_pages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    );
}
