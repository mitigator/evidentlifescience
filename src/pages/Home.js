import React from 'react';
import Image1 from "../assets/Image1.png";
import Flags from "../assets/Flags.png";
import GlobalPresence1 from "../assets/GlobalPresence.png";
import ChemicalGlass from "../assets/ChemicalGlass.png";
import material from "../assets/material.png";
import Exports from "../assets/Export.png";
import Subscribe from '../components/Subscribe';
import Info from '../components/Info';

import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
        {/* <Banner/> */}
        <Slider/>
        <h1 className=' font-bold text-richblack-700 text-center lg:text-3xl 2xl:text-6xl 2xl:py-10 mx-auto py-4 md:text-xl text-lg '>Our Commitment to Excellence <br/> Has Been Recognised</h1>
        <div className=' px-2 flex justify-center flex-wrap m-auto flex-row gap-10 py-5'>
        <img className=' 2xl:h-72 2xl:w-72 xl:h-60 xl:w-60 lg:w-48 lg:h-48 w-40 h-40 object-cover' src={Image1} alt="Image1"/>
        <img  className=' 2xl:h-72 2xl:w-72 xl:h-60 xl:w-60 lg:w-48 lg:h-48 w-40 h-40 object-cover' src={GlobalPresence1} alt="GlobalPresence"/>
        <img  className=' 2xl:h-72 2xl:w-72 xl:h-60 xl:w-60 lg:w-48 lg:h-48 w-40 h-40 object-cover' src={Flags} alt="Flags"/>
        </div>

        <h1 className=' font-bold text-richblack-700 text-center lg:text-3xl mx-auto py-4 2xl:text-6xl 2xl:py-10 md:text-xl text-lg'>Our Latest Update</h1>
        <div className='flex justify-center flex-wrap px-2 m-auto flex-row gap-10 py-5'> 
          <div className='flex flex-col'>
          <img loading="lazy" className='lg:w-48 lg:h-48 w-40 h-40 2xl:h-72 2xl:w-72 xl:h-60 xl:w-60 object-cover' src={ChemicalGlass} alt="Chemical Glass"/>
          <p  className=' 2xl:text-xl text-center'>Chemicals</p>
          </div>

          <div>
            <img loading="lazy" className='lg:w-48 lg:h-48 w-40 h-40 2xl:h-72 2xl:w-72 xl:h-60 xl:w-60 object-cover' src={material} alt="Material"/>
            <p className=' 2xl:text-xl text-center'>Raw Material</p>
          </div>

          <div>
            <img loading="lazy" className='lg:w-48 lg:h-48 w-40 h-40 2xl:h-72 2xl:w-72 xl:h-60 xl:w-60 object-cover' src={Exports} alt="Export"/>
            <p className=' 2xl:text-xl text-center'>Export</p>
          </div>

          
        </div>

        <Subscribe/>
        <Info/>
        


        
    </div>
  )
}

export default Home