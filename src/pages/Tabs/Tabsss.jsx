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
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20 text-center">
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="bg bg-gray-200 p-3 rounded">
                <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Sports Car</h1>
              <p className="font-medium">50+ Items Available</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20 text-center">
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="bg bg-gray-200 p-3 rounded">
                <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Regular Car</h1>
              <p className="font-medium">50+ Items Available</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20 text-center">
            <div className=" bg-gray-100 p-6 rounded  ">
              <div className="bg bg-gray-200 p-3 rounded">
                <img src="https://i.ibb.co/cb2m9hK/black-jaguar.png" alt="" />
              </div>
              <h1 className=" text-xl text-bold py-4">Mini Fire Truck</h1>
              <p className="font-medium">50+ Items Available</p>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabsss;
