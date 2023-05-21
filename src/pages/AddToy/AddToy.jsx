
/* eslint-disable no-unused-vars */
import React from "react";
import PageTitle from "../PageTitle/PageTitle";

const AddToy = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const pictureURL = form.pictureURL.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const details = form.details.value;

    const formData = {
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      details,
    };
    console.log(formData);

    fetch("https://toy-universe-server-sudham-debnath.vercel.app/upload-toy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) =>console.log(data));


  };
  return (
    <div>
      <PageTitle title="Toy's Universe | Add a Toy"/>
      <div className="m-20 ">
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
          <div>
            <a href="#">
              <h3 className="text-4xl font-bold text-gray-600">Add a Toy</h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="pictureURL"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Picture URL
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Picture URL"
                    type="text"
                    name="pictureURL"
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
                  htmlFor="sellerName"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Seller Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter seller name"
                    type="text"
                    name="sellerName"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Seller Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter seller email"
                    type="text"
                    name="email"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subCategory"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Sub-category
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Sub-category"
                    type="text"
                    name="subCategory"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Price
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Price"
                    type="text"
                    name="price"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Rating
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Rating"
                    type="text"
                    name="rating"
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="availableQuantity"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Available quantity
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Available quantity"
                    type="text"
                    id="availableQuantity"
                    //   value={email}
                    name="availableQuantity"
                    required
                    // onChange={handleEmailChange}

                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="details"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Detail description
                </label>
                <div className="flex flex-col items-start">
                  <input
                    //   onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="details"
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
                  Add Toy
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
