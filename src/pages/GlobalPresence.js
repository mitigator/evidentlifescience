import React from 'react'
import Info from '../components/Info'
import Subscribe from '../components/Subscribe'
import GlobalPresence1 from "../assets/GlobalPresence.png";

const GlobalPresence = () => {
  return (
    <div>
      <div className=' bg-gradient-to-r from-white via-red-500 to-white text-white text-center
       mx-auto text-3xl font-serif font-medium my-10 py-2'>Global Presence</div>
       <p className=' text-center w-3/5 mx-auto my-4 font-bold text-sm 2xl:text-3xl 2xl:my-12 lg:text-lg '>Global Reach: This section should showcase the company's global presence and highlight any partnerships or collaborations that Evident LifeScience has established with international organizations. This could include information on the specific countries or regions where the company operates, as well as any regulatory approvals or certifications that have been obtained.</p>
       <p className='text-center w-3/5 mx-auto my-4 mb-10 font-bold text-sm 2xl:text-3xl 2xl:my-12 lg:text-lg' >Industry Insights: This section could feature thought leadership pieces written by Evident LifeScience's team members or external experts. The content could cover a range of topics related to the life sciences industr</p>
       <img src={GlobalPresence1} className='w-full lg:h-[30rem]  md:h-[26rem] xl:h-[35rem] 2xl:h-[40rem] object-fill md:object-cover mb-10 ' alt="Global Presence" loading="lazy" />
       <Subscribe/>
       <Info/>
    </div>
  )
}

export default GlobalPresence