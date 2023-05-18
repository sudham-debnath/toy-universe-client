/* eslint-disable no-unused-vars */
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        {/* <FaceFrownIcon className='w-40 h-40 text-yellow-500' /> */}

        <img
          className=" w-96 p-10"
          src="https://i.ibb.co/f8vqR9N/404-2.png"
          alt=""
        />

        <div className="max-w-md text-center">
          {/* <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2> */}

          <p className="text-2xl font-semibold md:text-3xl text-gray-500 mb-8">
            {error?.message}
          </p>

          <Link to="/" className="btn">
            <h1>Back to Homepage!!!</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
