import React from "react";



export default function AboutMe(props) {


 

  return (

    <section className="rounded-lg shadow-2xl lg:flex p-10 " style={{"background": 'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))'}}>
    <img
      src={props.authorImage}
      className="rounded w-32 h-32 lg:w-64 lg:h-56 mr-8"
      alt="Kapehe"
    />
    <div className="text-lg flex flex-col justify-center">
      <h1 className="cursive text-6xl text-white mb-4">
        Hey there. I'm{" "}
        <span className="text-white">{props.name}</span>
      </h1>
      <p className="text-white text-lg">{props.bio}</p>
    </div>
  </section>
      
  );
}