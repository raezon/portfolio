import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

import imageUrlBuilder from "@sanity/image-url";
import Education from "./resume/Education.js";
import Experience from "./resume/Experience.js";
import Languages from "./resume/Languages.js";
import Tools from "./resume/Tools.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Resume() {
  

  return (
    <main className="relative">
      <div className="xl:p-8 xl:pt-24 2xl:p-8 2xl:pt-24  container sm:12 sm:justify-left ju mx-auto relative">
        <section className="rounded-lg shadow-2xl lg:flex  p-10 " style={{"background": 'linear-gradient(to left, #F2709C, #FF9472)'}}>
          <div className="text-lg flex flex-col justify-center">
          <div className="content px-24 ">
            <div className="grid mt-8  gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <Education/>
                <Experience/>
                <Languages/>
                <Tools/>
            </div>
          </div>
          </div>
        </section>
      </div>
    </main>
  );
}