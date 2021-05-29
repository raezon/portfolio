import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

import imageUrlBuilder from "@sanity/image-url";
import Offers from "./Home/Offers";
import AboutMe from "./Home/AboutMe";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
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
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <AboutMe name={author.name} bio={author.bio} authorImage={urlFor(author.authorImage).url()}/>
      </div>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <Offers/>
      </div>
    </main>
  );
}