/* eslint-disable no-unused-vars */
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Tabsss = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Regular Car</Tab>
          <Tab>Mini Fire Truck</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20 text-center">
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="bg bg-gray-200 p-3 rounded">
                <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Sports Car V1.0</h1>
              <p className="font-medium">Price: $1233</p>
              <p className="font-medium p-4">Ratings: 4.5</p>
              <button className="btn m-4"> View Details</button>
            </div>
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="bg bg-gray-200 p-3 rounded">
                <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Sports Car V2.0</h1>
              <p className="font-medium">Price: $1233</p>
              <p className="font-medium p-4">Ratings: 4.5</p>
              <button className="btn m-4"> View Details</button>
            </div>
          </div>
          
        </TabPanel>
        <TabPanel>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20 text-center">
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="p-3 rounded">
                <img src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Regular Car V0.1</h1>
              <p className="font-medium">Price: $1233</p>
              <p className="font-medium p-4">Ratings: 4.5</p>
              <button className="btn m-4"> View Details</button>
            </div>
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="p-3 rounded">
                <img src="https://images.unsplash.com/photo-1581235707960-23b7e8612c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Regular Car V0.2</h1>
              <p className="font-medium">Price: $1233</p>
              <p className="font-medium p-4">Ratings: 4.5</p>
              <button className="btn m-4"> View Details</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20 text-center">
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="p-3 rounded">
                <img src="https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Mini Fire Truck V1.0</h1>
              <p className="font-medium">Price: $1233</p>
              <p className="font-medium p-4">Ratings: 4.5</p>
              <button className="btn m-4"> View Details</button>
            </div>
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="p-3 rounded">
                <img src="https://images.unsplash.com/photo-1531693251400-38df35776dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Mini Fire Truck V2.0</h1>
              <p className="font-medium">Price: $1233</p>
              <p className="font-medium p-4">Ratings: 4.5</p>
              <button className="btn m-4"> View Details</button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabsss;
