import CardSkeleton from "../Card/CardSkeleton";

export default function SkeletonsBlock() {
  return (
    <>
      {[...new Array(6)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </>
  );
}
