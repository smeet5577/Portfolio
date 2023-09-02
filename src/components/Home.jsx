import React from 'react'
import heroImage from '../assets/heroImage.png'
import {HiArrowRight} from 'react-icons/hi'
import resume from '../assets/Resume.pdf'


const Home = () => {
  return <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto grid md:grid-cols-2 items-center justify-center h-full px-4 '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-6xl font-bold text-white'>
                I'm a full-stack Developer 
            </h2>
            <p className='text-gray-500 py-4 max-w-md'> 
                I have 1 year of Experience building and designing Websites. 
                Currently , I work part-time as a freelancer and I love to make projects.   
            </p>

            <div>
                <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                <a href={resume} target='_blank' rel ="noreferrer">
                    
                    Resume
                    <span className='hover:rotate'>
                        <HiArrowRight size={20} className='ml-1 inline-block '/> 
                    </span>
                    </a>
                </button>
            </div>
        </div>

        <div>
            <img src={heroImage} alt='my profile' 
            className='rounded-2xl mx-auto w-[66%]'
            />
        </div>
    </div>

  </div>;   
};

export default Home
