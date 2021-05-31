import React from 'react'
import ProgressBar from "./ProgessBar"

const languages = [
    {id: 1, title: 'git', pourcent: 75},
    {id: 2, title: 'jenkins', pourcent: 30},
    {id: 3, title: 'visualstudio', pourcent: 40},
  ];
export default function Languages() {
    return (
        <div className="flex flex-col ">
        <div className="bg-white shadow-md  rounded-3xl p-4 pt-10">
            <div className="flex-none lg:flex">
               <h1 className="cursive text-5xl text-black mb-3 pl-12">
                        Tools
                </h1>
                
                
            </div>
           
            {languages.map(function(language) {
              return  <div className="flex-none  "><ProgressBar done={language.pourcent} title={language.title}/></div>;
                    })}
            
            
        </div>
    </div>
    )
}
