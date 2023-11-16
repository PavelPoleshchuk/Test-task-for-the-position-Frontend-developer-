import React from "react";
import Pagination from "../components/Pagination";
import CardsBlock from "../components/CardsBlock";
import SkeletonsBlock from "../components/CardsBlock/SkeletonsBlock";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Form } from "../components/Form";
import { getToken } from "../tools/useToken";
import { setTokenInStorage } from "../redux/sliceToken";
import { setFetchData } from "../redux/sliceFetch";

export default function MainPage() {
  const dispatch = useDispatch();
  const tokenInStorage = useSelector(
    (state: RootState) => state.tokenAndForm.tokenInStorage
  );
  const selectedPage = useSelector(
    (state: RootState) => state.selectedPage.page
  );
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const item = getToken();
    if (item) {
      dispatch(setTokenInStorage(true));
    } else dispatch(setTokenInStorage(false));

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
          {!tokenInStorage && <Form />}
          {tokenInStorage && !isLoading && <CardsBlock />}
          {tokenInStorage && isLoading && <SkeletonsBlock />}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
