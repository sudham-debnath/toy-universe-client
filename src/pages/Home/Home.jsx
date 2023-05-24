/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import Tabsss from "../Tabs/Tabsss";
import PageTitle from "../PageTitle/PageTitle";
import Aos from "aos";
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  },[])
  return (
    <div>
      <PageTitle title="Toy's Universe | Home Page" />

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

      {/* Shop by Category */}

      <div className="p-14" data-aos = "fade-right">
        <div className="my-10">
          <h1 className="text-3xl pb-5 font-bold">Shop by Category</h1>
          <p className="text-justify">
            The Best Toys Category offers an exceptional range of playthings
            carefully curated to provide children with the ultimate play
            experiences. From educational toys to imaginative playsets, our
            collection represents the pinnacle of quality, creativity, and
            entertainment. Discover innovative STEM toys that foster curiosity
            and critical thinking, alongside interactive games that promote
            social interaction and family bonding.
          </p>
        </div>

        <Tabsss></Tabsss>
      </div>

      {/* Car Gallery Section */}
      <div className="p-14" data-aos = "fade-left">
        <div className="">
          <h1 className="text-3xl pb-7 font-bold">Car Gallery Section</h1>
          <Gallery></Gallery>
        </div>
      </div>

      {/* Best Car Collection */}

      <div className="p-14" data-aos="fade-up">
        <div className="my-10">
          <h1 className="text-3xl font-bold">Best Car Collection</h1>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20">
          <div className=" bg-slate-100 p-6 rounded  ">
            <div className="p-3 rounded">
              <img
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>
            <h1 className=" text-xl text-bold py-4">Regular Car</h1>
            <p className="font-medium">10+ car Available</p>
          </div>
          <div className=" bg-slate-100 p-6 rounded">
            <div className="p-3 rounded">
              <img
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>
            <h1 className=" text-xl text-bold py-4">Sports Car</h1>
            <p className="font-medium">10+ car Available</p>
          </div>
          <div className=" bg-slate-100 p-6 rounded">
            <div className="p-3 rounded">
              <img
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>
            <h1 className=" text-xl text-bold py-4">Mini Fire Truck</h1>
            <p className="font-medium">10+ car Available</p>
          </div>
          <div className=" bg-slate-100 p-6 rounded">
            <div className="p-3 rounded">
              <img
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>
            <h1 className=" text-xl text-bold py-4">Mini Police Car</h1>
            <p className="font-medium">10+ car Available</p>
          </div>
        </div>
      </div>

      {/* About Us */}

      <div className="p-14 mt-0" data-aos="fade-down">
        <h1 className="text-3xl pb-5 font-bold">About Us</h1>
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
