/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Home = () => {
  return (
    <div>
      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 sm:flex-row-reverse bg-slate-100">
        <div>
          <img
            className="pt-20 pl-8"
            src="https://i.ibb.co/ypdmrFn/sports-car.png"
          />
        </div>

        <div className="p-16 text-center ">
          <h1 className="text-5xl font-bold">Best Sports Toys </h1>
          <span className="text-5xl font-bold text-gray-500">
            Car in the City
          </span>
          <p className="py-5 text-justify">
            Toy Cars offers a wide selection of thrilling and realistic vehicles
            for young car enthusiasts. From sleek sports cars to rugged trucks
            and classic sedans, our collection caters to every automotive
            passion.
          </p>
          <button className="btn">Order Now!</button>
        </div>
      </div>

      {/* Food Category List */}

      <div className="p-14">
        <div className=" text-center my-10">
          <h1 className=" text-3xl p-5 font-bold">Best Toys Category</h1>
          <p className=" text-justify">
            The Best Toys Category offers an exceptional range of playthings
            carefully curated to provide children with the ultimate play
            experiences. From educational toys to imaginative playsets, our
            collection represents the pinnacle of quality, creativity, and
            entertainment. Discover innovative STEM toys that foster curiosity
            and critical thinking, alongside interactive games that promote
            social interaction and family bonding.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20 text-center">
          <div className=" bg-gray-100 p-6 rounded  ">
            <div className="bg bg-gray-200 p-3 rounded">
              <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
            </div>
            <h1 className=" text-xl text-bold py-4">Sports Car</h1>
            <p className="font-medium">50+ Items Available</p>
          </div>
          <div className=" bg-gray-100 p-6 rounded">
            <div className="bg bg-gray-200 p-3 rounded">
              <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
            </div>
            <h1 className=" text-xl text-bold py-4">Regular Car</h1>
            <p className="font-medium">50+ Items Available</p>
          </div>
          <div className=" bg-gray-100 p-6 rounded">
            <div className="bg bg-gray-200 p-3 rounded">
              <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
            </div>
            <h1 className=" text-xl text-bold py-4">Mini Car</h1>
            <p className="font-medium">50+ Items Available</p>
          </div>
          <div className=" bg-gray-100 p-6 rounded">
            <div className="bg bg-gray-200 p-3 rounded">
              <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
            </div>
            <h1 className=" text-xl text-bold py-4">Mini Fire Truck</h1>
            <p className="font-medium">50+ Items Available</p>
          </div>
        </div>
      </div>

      {/* Our Best Chefs */}
      <div className="p-14">
        <div className=" text-center">
          <h1 className="text-3xl p-5 font-bold">Gallery Section</h1>
          <p className=" text-justify">
            Our best chefs are highly skilled and experienced professionals who
            are passionate about creating delicious and innovative dishes. With
            their expertise and creativity, they constantly strive to push the
            boundaries of culinary artistry and deliver a memorable dining
            experience for our customers.
          </p>
        </div>
      </div>

      {/* About Us */}

      <div className=" text-center p-14 mt-0">
        <h1 className="text-3xl p-5 font-bold">About Us</h1>
        <p className=" text-justify">
          Best Sports Toys is a premier destination for sports enthusiasts,
          offering a handpicked selection of top-quality sporting equipment and
          accessories. Our collection is designed to ignite a passion for sports
          and inspire active play in children and adults alike. From basketball
          hoops and soccer goals to tennis rackets and golf sets, our diverse
          range of sports toys caters to various interests and skill levels. We
          prioritize both fun and skill development, ensuring that our toys
          foster physical activity, coordination, and a love for the game. With
          a commitment to exceptional quality and durability, Best Sports Toys
          guarantees that each product meets the highest standards for safety
          and performance. Whether you're a seasoned athlete or just starting
          out, explore our selection and discover the best sports toys to
          elevate your game.
        </p>
      </div>
    </div>
  );
};

export default Home;
