import React from "react";
import ListOfOffers from "./ListOfOffers";


export default function Offers() {


 

  return (

        <section className=" rounded-lg shadow-2xl lg:flex   " style={{"background": 'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))'}}>

          <div className="text-lg flex flex-col justify-center pb-12 ">
            <h1 className="cursive text-6xl text-white mb-4 pl-12">
              What I offer
             
            </h1>
            <ListOfOffers/>

          </div>
        </section>
      
  );
}