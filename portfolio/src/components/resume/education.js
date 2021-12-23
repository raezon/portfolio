import React from 'react'

export default function Education() {
    return (
        <div className="flex items-center justify-center  md:w-full lg:w-full xl:w-full w-screen ">
            <div className=" md:w-1/3 lg:w-full xl:w-full w-64  flex flex-col ">
                <div className="bg-white shadow-md  rounded-3xl p-4 pt-10 pb-6 ">
                    <div class='grid grid-cols-1  gap-12'>
                        <div className="flex-none flex">
                            <h1 className="bold text-2xl lg:text-3xl xl:text-4xl sm:w-2/5 text-black  pl-12">
                                Education
                            </h1>
                        </div>
                        <div className="flex-none lg:flex">

                            <h2 className="bold text-1xl lg:text-2xl xl:text-2xl text-black  pl-12">
                                Computer Science Engineering
                            </h2>
                        </div>
                        <div className="flex-none lg:flex ">

                            <p className="pl-12">Academy of Technology (2017-2021)</p>
                        </div>
                        
                        <div className="flex-none lg:flex">
                            <p className="pl-12">I am currently pursuing B.tech in Computer Science Engineering from Academy of Technology
                                CGPA (till 5th sem) : 7.5</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
