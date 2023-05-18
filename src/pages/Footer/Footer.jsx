/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black pt-14 px-14 ">
      <div className="grid justify-items-center lg:grid-cols-5 sm:grid-cols-1 gap-6 pb-5 text-black">
        <div>
          <h1 className="text-2xl font-bold">Toy's Universe</h1>
          <p className="my-5">
            Toy's Universe is a haven for toy enthusiasts imagination in
            children of all ages.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p>About Our Toy</p>
          <p>About Toy Cars</p>
          <p>Latest Blogs</p>
          <p>Best Selling Toys</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Category</h1>
          <p>Sports Car</p>
          <p>Truck</p>
          <p>Regular Car</p>
          <p>Mini Fire Truck</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Support</h1>
          <p>Help Desk</p>
          <p>Our Sales</p>
          <p>Become our Partner</p>
          <p>Our Developers</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Address</h1>
          <p>524, Broadway</p>
          <p>12th NY Street</p>
          <p>New York</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>

      <div className="lg:flex justify-between items-center py-5 border-t-2 ">
        <p> © 2023 Toy's Universe. All Rights Reserved</p>
        <a href="#">
          <img src="https://i.ibb.co/hWrj59T/Group-9969.png" alt="" />
        </a>
        <p>Powered by Toy's Universe</p>
      </div>
    </div>
  );
};

export default Footer;
