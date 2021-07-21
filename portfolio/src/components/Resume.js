import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";


import Education from "./resume/Education.js";
import Experience from "./resume/Experience.js";
import Languages from "./resume/Languages.js";
import Tools from "./resume/Tools.js";
import Header from "./resume/Header.js";


export default function Resume() {
  

  return (
    <main className="relative">
      <div className="xl:p-8 xl:pt-24 2xl:p-8 2xl:pt-24  container sm:12 ju mx-auto relative">
        <Header/>
        <section className="rounded-lg shadow-2xl lg:flex lg:pl-10 md:pl-10 xl:pl-10    pr-10 pb-10 pt-10" style={{"background": 'linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))'}}>

        <div className="text-lg flex flex-col justify-center">
          <div className="content pl-100 ">
            <div className="grid mt-12   sm:gap-12 gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          
                <Education />
               
           
                <Experience />
               
            
                <Languages />
               
           
                <Tools />
               
      </div>
          </div>
          </div>
        </section>
      </div>
    </main>
  );
}