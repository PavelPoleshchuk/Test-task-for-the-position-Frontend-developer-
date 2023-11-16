import { setFetchData } from "../redux/sliceFetch";
import { store } from "../redux/store";

export const fetchMainData = (
  BASE_URL:string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  selectedPage: number
) => {
  setIsLoading(true);
  fetch(`${BASE_URL}page=${selectedPage}`)
    .then((res) => {
      if (res.status != 200) {
        alert(`Response status: ${res.status} Error in fetchMainData`);
      } else return res.json();
    })
    .then((data) =>
      setTimeout(() => {
        store.dispatch(setFetchData(data));
        setIsLoading(false);
      }, 1000)
    )
    .catch((error) => console.log(error.message));
};