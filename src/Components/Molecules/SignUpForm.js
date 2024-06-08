import "./SignUpForm.css";

function SignUpForm() {
  return (
    <div className="form__container w-4/5 flex flex-col mt-10  border-t-2 sm:w-1/2">
      <div className="form__title font-bold text-xl my-10 flex justify-center items-center ">
        Facilis consequatur eligendi
      </div>
      <div className="name flex flex-row mb-2">
        <input
          type="text"
          className="mr-1 w-1/2 border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          placeholder="FirstName"
        ></input>
        <input
          type="text"
          className="ml-1 w-1/2 border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
          placeholder="LastName"
        ></input>
      </div>
      <input
        type="email"
        className=" my-2 border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Email Address"
      ></input>
      <input
        type="password"
        className=" my-2 border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Password"
      ></input>
      <div className="checkbox__container flex my-4 flex-row justify-center items-center">
        <input
          type="checkbox"
          id="newsletter"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <label htmlFor="newsletter" className="ml-2 text-gray-700">
          Subscribe to our newsletter
        </label>
      </div>
      <button className="flex flex-col justify-center items-center bg-blue-800 px-8 py-2 text-white rounded-md my-4">
        SIGN UP
      </button>
      <div className="flex justify-center items-center">Or sign up with:</div>
      <div className="social__signup flex flex-row justify-center items-center">
        <button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-800 text-white my-4 mr-2">
          f
        </button>
        <button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-800 text-white my-4 mx-2">
          f
        </button>
        <button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-800 text-white my-4 mx-2">
          f
        </button>
        <button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-800 text-white my-4 ml-2">
          f
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
