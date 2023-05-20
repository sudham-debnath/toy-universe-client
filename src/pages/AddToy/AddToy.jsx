/* eslint-disable no-unused-vars */
import React from "react";

const AddToy = () => {
  return (
    <div>
      <div className="m-20 ">
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
          <div>
            <a href="#">
              <h3 className="text-4xl font-bold text-gray-600">Add a Toy</h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <form>
              <div>
                <label
                  htmlFor="Picture URL"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Picture URL
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Picture URL"
                    type="text"
                    name="name"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter toy name"
                    type="text"
                    name="name"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="seller name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Seller Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter seller name"
                    type="text"
                    name="name"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Seller Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter seller email"
                    type="text"
                    name="name"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                 Sub-category
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Sub-category"
                    type="text"
                    name="name"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Price
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Price"
                    type="text"
                    name="name"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Rating
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Rating"
                    type="text"
                    name="name"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Available quantity
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Available quantity"
                    type="email"
                    id="email"
                    //   value={email}
                    name="email"
                    required
                    // onChange={handleEmailChange}

                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="photo_url"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Detail description
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="photo_url"
                    required
                    placeholder="Enter Detail description"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="flex items-center mt-4">
                <button
                  // onClick={handleRegistration}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Add
                </button>
              </div>
            </form>

            <div className="my-6 space-y-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
