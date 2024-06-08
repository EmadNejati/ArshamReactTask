import "./Card.css"
function Card() {
  return (
    <div className="card__container w-full h-auto flex flex-col rounded-lg  items-center justify-center shadow-3xl my-4 lg:mx-4">
      <img
        src="Images/Recom.jpg"
        alt=" "
        className="rounded-t-lg w-full h-auto"
      />
      <div className="card__title font-bold my-3">Card title</div>
      <div className="card__dsc px-6">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </div>
      <button className="flex flex-col justify-center items-center bg-blue-800 px-8 py-2 text-white rounded-md my-4">Button</button>
    </div>
  );
}

export default Card;


