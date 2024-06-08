function DownloadBtn(){
    return(
        <div className="btn__container w-4/5 flex flex-col justify-center items-center my-10 border-t-2 pt-10 sm:flex-row">
        <button className="flex flex-col  font-semibold py-3 justify-center items-center rounded-md bg-blue-800 px-8  text-white my-2 mr-2">LEARN TAILWIND</button>
        <button className="flex flex-col font-semibold py-3 justify-center  rounded-md items-center bg-blue-800 px-8  text-white my-2 mx-2">DOWNLOAD MDB UI KIT</button>
        </div>
    );

}

export default DownloadBtn