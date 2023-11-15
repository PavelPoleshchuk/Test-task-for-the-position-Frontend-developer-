import Card from "../Card";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function CardsBlock() {
  const fetchData = useSelector((state: RootState) => state.fetchData.data)
  return (
    <>
      {fetchData.data.map((user) => <Card key={user.id} user={user} />)}
    </>
  );
}
