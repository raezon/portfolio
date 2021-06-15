import React from 'react'
import ProgressBar from "./ProgessBar"

const languages = [
    {id: 1, title: 'devicon-git-plain', pourcent: 75},
    {id: 2, title: 'devicon-jenkins-plain', pourcent: 30},
    {id: 3, title: 'devicon-visualstudio-plain', pourcent: 40},
  ];
export default function Languages() {
    return (
         <div className=" md:w-full lg:w-full xl:w-full w-screen">
        <div className=" w-1/2 md:w-1/3 lg:w-full xl:w-full  flex flex-col ">
        <div className="bg-white shadow-md  rounded-3xl xl:pt-8 xl:pl-4 xl:pr-32">
            <div className="flex-none flex ">
               <h1 className="bold  sm:text-1xl lg:text-3xl xl:text-4xl    text-black mb-3 ">
                    Editors  & Tools
                </h1>
                
                
            </div>
           
            {languages.map(function(language) {
              return  <div className=" xl:pl-8  "><ProgressBar done={language.pourcent} title={language.title}/></div>;
                    })}
            
            
        </div>
    </div>
    </div>
    )
}
