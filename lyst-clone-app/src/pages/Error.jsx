import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[84vh] w-full flex justify-center items-center">
        <div className="text-center">
          <p className="font-extrabold text-xl">404 Error</p>
          <h1 className="text-6xl font-bold">Page not found.</h1>
          <p className="pt-2 text-gray-500 text-xl">
            Sorry, we couldn't find the page you are looking for.
          </p>
          <button
            className="bg-black text-white px-6 py-2 mt-2 rounded-lg hover:bg-[#363636]"
            onClick={() => navigate("/")}
          >
            Go back home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
