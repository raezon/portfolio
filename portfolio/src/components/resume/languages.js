import React from 'react'
import ProgressBar from "./ProgessBar"

const languages = [
    {id: 1, title: 'devicon-php-plain', pourcent: 75},
    {id: 2, title: 'devicon-react-plain', pourcent: 60},
    {id: 3, title: 'devicon-django-plain', pourcent: 40},
    {id: 4, title: 'devicon-html5-plain', pourcent: 85},
    {id: 5, title: 'devicon-mysql-plain', pourcent: 55},
    {id: 6, title: 'devicon-nodejs-plain', pourcent: 40},
    {id: 6, title: 'devicon-yii-plain', pourcent: 75},
    {id: 7, title: 'devicon-laravel-plain', pourcent: 55}
  ];
export default function Languages() {
    return (
        
    <div className=" md:w-full lg:w-full xl:w-full w-screen">
       <div className=" w-1/2 md:w-1/3 lg:w-full xl:w-full  flex flex-col ">
            <div className="bg-white shadow-md  rounded-3xl xl:pr-16 xl:pl:8 xl:pt-8 ">
                <div className="flex-none flex ">
                   <h1 className="bold  sm:text-1xl lg:text-3xl xl:text-4xl xl:pl-2   text-black mb-3 ">
                        Languages & Framework
                </h1>
                
                
            </div>
           
            {languages.map(function(language) {
              return  <div className="flex-none xl:pl-6"><ProgressBar  done={language.pourcent} title={language.title}/></div>;
                    })}
            
            
        </div>
    </div>
</div>
    )
}
