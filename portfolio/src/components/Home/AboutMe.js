import React from "react";



export default function AboutMe(props) {


 

  return (

    <section className="bg-red-800 rounded-lg shadow-2xl lg:flex p-20 ">
    <img
      src={props.authorImage}
      className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
      alt="Kapehe"
    />
    <div className="text-lg flex flex-col justify-center">
      <h1 className="cursive text-6xl text-green-300 mb-4">
        Hey there. I'm{" "}
        <span className="text-green-100">{props.name}</span>
      </h1>
      <p className="text-green-200 text-lg">{props.bio}</p>
    </div>
  </section>
      
  );
}