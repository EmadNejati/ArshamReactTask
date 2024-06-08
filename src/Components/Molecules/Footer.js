import "./Footer.css";

function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="w-full bg-gray-100 flex justify-center items-center pb-4">
        <div className="footer__container w-4/5 flex justify-center items-center flex-col mt-10 border-t-2 pt-10">
          <div className="footer__title font-bold">
            Follow MDB on social media
          </div>
          <div className="social__media flex flex-row mt-2">
            <button className="flex flex-col w-10 h-10 justify-center items-center rounded-md bg-blue-800 px-8 py-2 text-white my-4 mr-2">
              f
            </button>
            <button className="flex flex-col w-10 h-10 justify-center  rounded-md items-center bg-blue-800 px-8 py-2 text-white my-4 mx-2">
              f
            </button>
            <button className="flex flex-col w-10 h-10 justify-center rounded-md items-center bg-blue-800 px-8 py-2 text-white my-4 mx-2">
              f
            </button>
            <button className="flex flex-col w-10 h-10 justify-center rounded-md items-center bg-blue-800 px-8 py-2 text-white my-4 ml-2">
              f
            </button>
          </div>
        </div>
      </div>

      <div className="copyright__container flex justify-center items-center p-6 bg-gray-200 w-full mt-0">
        © 2020 Copyright: MDBootstrap.com
      </div>
    </div>
  );
}

export default Footer;
