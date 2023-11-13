import React from "react";
import Pagination from "../components/Pagination";
import CardsBlock from "../components/CardsBlock";
import SkeletonsBlock from "../components/CardsBlock/SkeletonsBlock";
import Header from "../components/Header";

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IFetchData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}

export default function MainPage() {
  const BASE_URL = "https://reqres.in/api/users?";

  const [selectedPage, setSelectedPage] = React.useState(1);
  const [fetchData, setFetchData] = React.useState<IFetchData | null>(null);
  const [fetchError, setFetchError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}page=${selectedPage}`)
      .then((res) => {
        if (res.status != 200) {
          setFetchError(true);
        } else return res.json();
      })
      .then((data) =>
        setTimeout(() => {
          setFetchData(data);
          setIsLoading(false);
        }, 1000)
      )
      .catch((error) => console.log(error.message));
  }, [selectedPage]);
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="cards__blok">
          {!isLoading && <CardsBlock fetchData={fetchData} />}
          {isLoading && <SkeletonsBlock />}
        </div>
        <Pagination setSelectedPage={setSelectedPage} fetchData={fetchData} />
      </div>
    </div>
  );
}

//  {
//   page: 1,
//   per_page: 4,
//   total: 0,
//   total_pages: 0,
//   data: [
//     {
//       id: 0,
//       email: "string",
//       first_name: "string",
//       last_name: "string",
//       avatar: "string",
//     },
//   ],
// };
