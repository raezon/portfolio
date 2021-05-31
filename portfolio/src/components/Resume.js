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
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <div className="p-8 pt-24  container mx-auto relative">
        <section className="bg-red-600 rounded-lg shadow-2xl lg:flex p-10 ">
          <div className="text-lg flex flex-col justify-center">
          <div className="content px-24 ">
            <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
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