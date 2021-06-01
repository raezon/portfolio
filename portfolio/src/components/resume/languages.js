import React from 'react'
import ProgressBar from "./ProgessBar"

const languages = [
    {id: 1, title: 'php', pourcent: 75},
    {id: 2, title: 'react', pourcent: 60},
    {id: 3, title: 'django', pourcent: 40},
    {id: 4, title: 'html5', pourcent: 85},
    {id: 5, title: 'mysql', pourcent: 55},
    {id: 6, title: 'nodejs', pourcent: 40},
    {id: 6, title: 'yii', pourcent: 75},
    {id: 7, title: 'laravel', pourcent: 55}
  ];
export default function Languages() {
    return (
        <div className="flex flex-col ">
        <div className="bg-white shadow-md  rounded-3xl p-4 pt-10">
            <div className="flex-none lg:flex">
               <h1 className="bold text-4xl text-black mb-3 pl-12">
                        Language & Framework
                </h1>
                
                
            </div>
           
            {languages.map(function(language) {
              return  <div className="flex-none   "><ProgressBar  done={language.pourcent} title={language.title}/></div>;
                    })}
            
            
        </div>
    </div>
    )
}
