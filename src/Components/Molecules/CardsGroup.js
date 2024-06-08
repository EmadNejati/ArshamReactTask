import Card from "../Atoms/Card";

function CardsGroup() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 border-t-2 w-4/5 pt-10 lg:flex-row ">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardsGroup;
