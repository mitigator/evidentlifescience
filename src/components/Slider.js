import React from 'react';
import { useState, useEffect } from 'react';
import Slider1 from "../assets/Slider1.png";
import Slider2 from "../assets/Slider2.png";
import Slider3 from "../assets/Slider3.png";
import Slider4 from "../assets/Slider4.png";

const Slider = () => {
    const [selectedImage, setSelectedImage] = useState(1)
    const [allImages, setAllImages] = useState([Slider1, Slider2, Slider3, Slider4])

    useEffect(() => {
        setInterval(() => {
            setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
        }, 4000)
    }, [])
    return (
        <div>
            <div >
                <img loading="eager" className=' 3xs:h-[15rem] 3xs:pb-5 w-full 3xs:object-cover  2xs:h-[15rem] 2xs:pb-2 xs:h-[16rem] xs:pb-0 xs:object-cover  md:h-[20rem] lg:h-[24rem] xl:h-[32rem] 2xl:h-[45rem] md:object-fill  m-auto   relative group'  src={allImages[selectedImage]} /> <br />
                
            </div>
        </div>
    )
}

export default Slider