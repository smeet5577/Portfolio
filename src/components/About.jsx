import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20 '>
        I am a passionate and dedicated individual with a strong interest in technology and its creative applications. My journey began with a fascination for coding and problem-solving, which led me to pursue a degree in Computer Science.
        </p>

        <br />  
        <p className='text-xl'>
        Throughout my academic journey, I honed my skills in various programming languages and frameworks, gaining proficiency in both front-end and back-end development. What truly drives me is the opportunity to bring ideas to life through elegant and efficient code. I thrive on challenges and enjoy collaborating with others to turn concepts into tangible solutions. With a curious mindset and a commitment to continuous learning, I'm excited to contribute my skills and grow as a professional in the ever-evolving landscape of technology.
        </p>
      </div>    
    </div>
  )
}

export default About
