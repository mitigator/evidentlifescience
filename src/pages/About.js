import React from 'react'
import Info from '../components/Info';

import Subscribe from '../components/Subscribe';

const About = () => {
  return (
    <div>
      <div className=' bg-gradient-to-r from-white via-red-500 to-white text-white text-center
       mx-auto text-3xl font-serif font-medium my-10 py-2'>About</div>
      <p className=' text-center w-3/5 mx-auto my-4 font-bold text-sm  2xl:text-3xl 2xl:my-12 lg:text-lg '>
        We, Evident Lifescience FZ - LLC is an established pharmaceutical trade company whose main activity is to export pharmaceutical products. We aim to build a strong bridge between manufacturer and the formulator to minimize the gap.

      </p>

      <p className=' text-center w-3/5 mx-auto my-4 mb-10 font-bold text-sm 2xl:text-3xl 2xl:my-12 lg:text-lg'>
        With experience and insight of the Industry we are able to fulfill the industry’s needs. We as a company are specialized in providing pharmaceutical APIs and Excipients. We provide a wide range of products throughout the world. Many Indian manufacturers are closely associated with us for API and Excipients supplies.
      </p>
      <Subscribe />
      <Info />

    </div>
  )
}

export default About