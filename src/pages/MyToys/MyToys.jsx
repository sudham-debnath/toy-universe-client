/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-toys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  console.log(allToys);

  // const { _id, name, picture_url, available_quantity, description, price, rating, seller_email, seller_name, sub_category } = allToys;

  //Delete data function
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/toy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-7">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Serial
              </th>
              <th scope="col" className="px-6 py-3">
                Seller
              </th>
              <th scope="col" className="px-6 py-3">
                Toy Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sub-category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Available Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                View Details button
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, i) => (
              <tr
                key={toy._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4">{i + 1}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {toy.seller_name}
                </th>
                <td className="px-6 py-4">{toy.name}</td>
                <td className="px-6 py-4">{toy.sub_category}</td>
                <td className="px-6 py-4">${toy.price}</td>
                <td className="px-6 py-4">{toy.available_quantity}</td>
                <td className="px-6 py-4">
                  <Link to={`/details/${toy._id}`}>
                    <button className="btn">View details</button>
                  </Link>
                </td>
                <td className="flex justify-between items-center px-6 py-4 space-x-3">
                  <Link to={`/edit/${toy?._id}`}>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Update
                  </a>
                    
                  </Link>
                
                  <a
                    onClick={() => handleDelete(toy._id)}
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
