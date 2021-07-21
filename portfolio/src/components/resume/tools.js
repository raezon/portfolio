import React from "react";
import ProgressBar from "./ProgessBar";

const languages = [
  { id: 1, title: "devicon-git-plain", pourcent: 75 },
  { id: 2, title: "devicon-jenkins-plain", pourcent: 30 },
  { id: 3, title: "devicon-visualstudio-plain", pourcent: 40 },
];
export default function Languages() {
  return (
    <div className="flex flex-wrap justify-center  -m-3 md:w-full lg:w-full xl:w-full w-screen">
    <div className=" md:w-1/3 lg:w-full xl:w-full w-64  flex flex-col ">
      <div className="bg-white shadow-md  rounded-3xl p-4 pt-10 pb-12 ">
        <div className="flex-none flex">
          <h1 className="bold text-2xl lg:text-3xl xl:text-4xl sm:w-2/5 text-black mb-3 pl-12">
              Editors & Tools
            </h1>
          </div>

          {languages.map(function (language) {
            return (
              <div className="flex-none xl:pl-12 lg:pl-12 pl-12 ml-2">
                <ProgressBar done={language.pourcent} title={language.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
