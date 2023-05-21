/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
    const { id } = useParams();
    
    const [toyDetails, setToyDetails] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/toy/${id}`)
          .then((res) => res.json())
          .then((data) => setToyDetails(data));
    }, [id]);
    
    // console.log(toyDetails);

  return (
      <div>
          
          <h1 className="text-2xl font-bold text-center m-5">Toy Details</h1>
 

      <div className="card w-96 bg-base-100 shadow-xl ml-[430px] my-10">
        <figure>
          <img
            src={toyDetails?.picture_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
                  <h2 className="card-title">{ toyDetails.name}</h2>
                  <p>{ toyDetails.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        </div>
          
    </div>
  );
};

export default ToyDetails;
