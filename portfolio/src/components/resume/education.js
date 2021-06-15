import React from 'react'

export default function Education() {
    return (
        <div className="flex flex-wrap -m-3 ">
            <div className="bg-white shadow-md  rounded-3xl p-4">
                <div className="flex-none flex">
                   <h1 className="bold sm:text-1xl lg:text-3xl xl:text-4xl sm:w-2/5 text-black mb-3 pl-12">
                            Education
                    </h1>
                    
                    
                </div>
                <div className="flex-none lg:flex">
                  
                    <h2 className="bold sm:text-1xl lg:text-3xl xl:text-4xl text-black mb-4 pl-12">
                    Computer Science Engineering
                    </h2>
                </div>
                <div className="flex-none lg:flex py-12">
                
                    <p className="pl-12">Academy of Technology (2017-2021)</p>
                </div>
                <div className="flex-none lg:flex">
                    <p className="pl-12">I am currently pursuing B.tech in Computer Science Engineering from Academy of Technology
                        CGPA (till 5th sem) : 7.5</p>
                    
                </div>
            </div>
        </div>
    )
}
