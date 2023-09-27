import React from 'react'
import travelSite from '../assets/portfolio/travel.jpg'
import movix from '../assets/portfolio/movix.jpg'
import realEstate from '../assets/portfolio/realEstate.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import navbar from '../assets/portfolio/navbar.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: travelSite,
            demo: "https://sm-travel-site.vercel.app//",
            code: "https://github.com/smeet5577/sm-Travel-Site",
        },
        {
            id: 2,
            src: movix,
            demo: "https://sm-movix-eecu9iaet-smeet5577.vercel.app/",
            code: "https://github.com/smeet5577/sm-movix", 
        },
        {
            id: 3,
            src: realEstate,
            demo: "https://sm-real-estate.vercel.app/",
            code: "https://github.com/smeet5577/sm-RealEstate", 
        },
        {
            id: 4,
            src: reactSmooth
        },
        {
            id: 5,
            src: reactParallax
        },
        {
            id: 6,
            src: navbar
        },
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {
            portfolios.map(({id, src, demo, code}) => (
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'> 
                <a href={demo} target="_blank" rel="noreferrer">
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    </a>
                    <a href={code} target="_blank" rel="noreferrer">
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </a>
                </div>

            </div>     
            ))
        }           
        </div>
      </div>
    </div>
  )
}

export default Portfolio
