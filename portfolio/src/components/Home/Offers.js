import React from "react";
import ListOfOffers from "./ListOfOffers";


export default function Offers() {


 

  return (

        <section className="bg-red-600 rounded-lg shadow-2xl lg:flex   ">

          <div className="text-lg flex flex-col justify-center pb-12 ">
            <h1 className="cursive text-6xl text-white mb-4 pl-12">
              What I offer
             
            </h1>
            <ListOfOffers/>

          </div>
        </section>
      
  );
}