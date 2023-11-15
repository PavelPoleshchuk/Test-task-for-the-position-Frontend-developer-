import React from "react";
import Pagination from "../components/Pagination";
import CardsBlock from "../components/CardsBlock";
import SkeletonsBlock from "../components/CardsBlock/SkeletonsBlock";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setFetchData } from "../redux/sliceFetch";
import { RootState } from "../redux/store";

export default function MainPage() {
  const dispatch = useDispatch();
  const selectedPage = useSelector(
    (state: RootState) => state.selectedPage.page
  );
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const BASE_URL = "https://reqres.in/api/users?";
    setIsLoading(true);
    fetch(`${BASE_URL}page=${selectedPage}`)
      .then((res) => {
        if (res.status != 200) {
          alert(`Response status: ${res.status}`);
        } else return res.json();
      })
      .then((data) =>
        setTimeout(() => {
          dispatch(setFetchData(data));
          setIsLoading(false);
        }, 1000)
      )
      .catch((error) => console.log(error.message));
  }, [dispatch, selectedPage]);

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="cards__blok">
          {!isLoading && <CardsBlock />}
          {isLoading && <SkeletonsBlock />}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
