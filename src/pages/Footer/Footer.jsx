/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-400 text-white pt-14 px-14 ">
      <div className="grid justify-items-center lg:grid-cols-5 sm:grid-cols-1 gap-6 pb-5 bg-gray-400 text-white">
        <div>
          <h1 className=" text-white text-2xl font-bold">Toy's Universe</h1>
          <p className="my-5">
          If you're looking for the best pizza in town, look no further than our restaurant!
          </p>
          <img src="https://i.ibb.co/hWrj59T/Group-9969.png" alt="" />
        </div>
        <div>
          <h1 className=" text-white text-2xl font-semibold">About Us</h1>
          <p>About Our Toy</p>
          <p>About Toy Cars</p>
          <p>Latest Blogs</p>
          <p>Best Selling Toys</p>
        </div>
        <div>
          <h1 className=" text-white text-2xl font-semibold">Cuisines</h1>
          <p>Sports Car</p>
          <p>Truck</p>
          <p>Regular Car</p>
          <p>Mini Fire Truck</p>
        </div>
        <div>
          <h1 className=" text-white text-2xl font-semibold">Support</h1>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        <div>
          <h1 className=" text-white text-2xl font-semibold">Address</h1>
          <p>524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
          </div>
          
          <hr className="h-1" />

          <div className="flex justify-between py-5">
              <p> © 2023 Toy's Universe. All Rights Reserved</p>
              <p>Powered by Toy's Universe</p>
          </div>

    </div>
  );
};

export default Footer;