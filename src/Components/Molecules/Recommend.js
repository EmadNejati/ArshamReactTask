import "./Recommend.css";

function Recommend() {
  return (
    <div className="recom__container w-full h-auto flex flex-col justify-center items-center my-10 sm:flex-row sm:w-4/5">
      <img
        src="Images/Recom.jpg"
        alt="recomandedphoto"
        className="w-4/5 sm:w-2/4 sm:mr-8 h-auto  mb-4 rounded-md shadow-2xl"
      />
      <div className="text__container flex flex-col justify-center items-center sm:w-2/4">
      <div className="explain__cart w-4/5 h-auto flex flex-col justify-center items-start sm:mb-10">
          <div className="font-bold text-xl my-4 sm:text-3xl">
            Facilis consequatur eligendi
          </div>
          <div className="sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consequatur eligendi quisquam doloremque vero ex debitis veritatis
            placeat unde animi laborum sapiente illo possimus, commodi
            dignissimos obcaecati illum maiores corporis.
          </div>
        </div>
      <div className="question__cart w-4/5 h-auto flex flex-col justify-center items-start sm:mt-10">
          <div className="font-bold my-4 sm:text-xl">
            Doloremque vero ex debitis veritatis?
          </div>
          <div className="sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            itaque voluptate nesciunt laborum incidunt. Officia, quam
            consectetur. Earum eligendi aliquam illum alias, unde optio
            accusantium soluta, iusto molestiae adipisci et?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
