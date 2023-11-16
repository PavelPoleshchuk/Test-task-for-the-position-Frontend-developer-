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
import { fetchMainData } from "../tools/fetchMainData";

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
    fetchMainData(BASE_URL, setIsLoading, selectedPage);
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
        {tokenInStorage && <Pagination />}
      </div>
    </div>
  );
}
