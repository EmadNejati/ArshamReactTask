import "./Header.css";

function Header() {
  return (
    <div className="header__container w-full h-screen flex ">
      <div className="w-full h-full relative">
        <img
          src="Images/bridge.jpg"
          alt="this is bridge"
          className="w-full h-full inset-0 object-cover absolute"
        />
        <div className="bg-black bg-opacity-80 absolute inset-0 w-full h-full text-white flex flex-col justify-center items-center">
          <div className="title__text flex justify-center items-center text-3xl font-bold my-2 sm:text-6xl sm:mb-8">
            Learn Tailwind with MDB
          </div>
          <div className="title__text flex justify-center items-center text-xl  text-center my-2 sm:text-2xl sm:mb-8">
            Best & free guide of responsive web design
          </div>
          <div className="button__container flex justify-center items-center flex-col sm:flex-row">
            <button className="rounded-sm  border-2 w-40 h-12 mt-8 sm:mt-4 sm:mx-4">
              START TUTORIAL
            </button>
            <button className="rounded-sm  border-2 w-48 h-12 mt-4">
              DOWNLOAD MDB UI KIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
