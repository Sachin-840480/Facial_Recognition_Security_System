import React from 'react'
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';
import "../styles/HomeExplanation.css"
import Particle from "../Particle/Particle"
import bg from "../assets/bg.jpg"

const HomeExplanation = () => {

    return (

        <div>

            <div className='grid'>

                <h1 className="mb-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white homes" >
                    <Particle />
                    <Typewriter
                        options={{
                            strings: ['The', 'Era', 'Of', 'AI'],
                            autoStart: true,
                            loop: true,
                        }}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </h1>

                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 homes">
                    Artificial intelligence algorithms are used in AI face detection, a novel technique that locates and identifies human faces inside picture or video frames. This advanced system can reliably detect and recognise faces in a variety of scenarios by analysing facial traits and patterns using deep learning models, such as convolutional neural networks. AI face detection has a wide range of uses, from improving security in surveillance systems by using facial recognition to simplifying smartphone unlocking for users.
                </p>

                <div className='btn'>
                    <NavLink to="/More" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                        <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease btn"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                                </path>
                            </svg>
                        </span>
                        <span className="relative"> To Know More About AI</span>
                    </NavLink>
                </div>

            </div>

            <div class="grid grid-rows-3 grid-flow-col gap-4 contains">
                <div class="row-span-3 ml-5">
                    <img src={bg} alt="" className='photo' />
                </div>
                <div class="col-span-2 heading"> Instant Face Recognition</div>
                <div class="row-span-2 col-span-2 title">   Personal data means any data that, either on its own or jointly with other data, can be to used to identify a natural person. You directly provide us with such data when you useour web sites, products, or services,

                    or interact with us by, for example, creating a Huawei account or contacting us for suport.Bring to the table win-win survival strategies to ensure proactive domi nation. At the ends of the day, going forward, a new normal that has evolved from generation X is on the fulls runway heading.</div>
            </div>

            <div class="grid grid-rows-3 grid-flow-col gap-4 contains">
                <div class="col-span-2 heading">Identify Thousands of Face Categories</div>
                <div class="row-span-2 col-span-2 title">  interact with us by, for example, creating a Huawei account or contacting us for suport.Bring to the table win-win survival strategies to ensure proactive domination. At the ends of the day, going forward, a new normal that has evolved from generation X is on the fulls runway heading towards a stream lined cloud solution.</div> <div class="row-span-3 ml-5">
                    <img src={bg} alt="" className='sajin' />
                </div>
            </div>

            <div class="grid grid-rows-3 grid-flow-col gap-4 contains">
                <div class="row-span-3 ml-5">
                    <img src={bg} alt="" className='photo' />
                </div>
                <div class="col-span-2 heading"> Comprehensive Face Database</div>
                <div class="row-span-2 col-span-2 title"> Personal data means any data that, either on its own or jointly with other data, can be to used to identify a natural person. You directly provide us with such data when you useour web sites, products, or services,

                    or interact with us by, for example, creating a Huawei account or contacting us for suport.Bring to the table win-win survival strategies to ensure proactive domi nation. At the ends of the day, going forward, a new normal that has evolved from generation X is on the fulls runway heading</div>
            </div>

        </div>
    )
}

export default HomeExplanation
