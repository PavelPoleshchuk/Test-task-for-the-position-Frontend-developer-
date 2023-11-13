import Card from "../Card";
import { IFetchData } from "../../pages/MainPage";
interface IProps {
  fetchData: IFetchData | null;
}
export default function CardsBlock({ fetchData }: IProps) {
  return (
    <>
      {fetchData?.data &&
        fetchData.data.map((user) => <Card key={user.id} user={user} />)}
    </>
  );
}
