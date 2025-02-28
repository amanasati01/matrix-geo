import { animate, motion } from 'framer-motion';
import React, { useState } from 'react';
import banner from '../assets/banner.png'

function Carousel() {
    const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndex((prevIndexes) => 
            prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
        );
    };
    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
          const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 4) % 5
          );
    
          return updatedIndexes;
        });
      };
    
    const images = [banner, banner,banner,banner,banner];

    const positions = ['center', 'left1', 'left', 'right', 'right1'];

    const imageVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-50%', scale: 0.7, zIndex: 2 },
        left: { x: '-90%', scale: 0.5, zIndex: 1 },
        right: { x: '90%', scale: 0.5, zIndex: 1 },
        right1: { x: '50%', scale: 0.7, zIndex: 2 },
    };

    return (
        <div className="flex items-center justify-center flex-col w-full  relative mt-4">
            <div className="relative w-[1400px] h-[150px] overflow-hidden left-64">
                {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="absolute rounded-[12px] w-full h-full object-cover bg-green-300"
                        initial='center'
                        animate={positions[positionIndex[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{ width: "40%", position: "absolute" }}
                    />
                ))}
                <div className="flex flex-row gap-3">
      </div>
            </div>
            <motion.button 
                initial={{
                    x:-300,
                    opacity:0
                }}
                whileInView={{
                    x : 0,
                    opacity:1,
                    transition:{
                        type : 'spring',
                        duration : 2.2
                    }
                }}
                whileHover={{
                    scale : 0.95,
                }}
                onClick={handleNext} 
                className="mt-2 w-16 h-6 bg-blue-500 text-white text-center text-[15px] rounded-lg"
            >
                Next
            </motion.button>
        </div>
    );
}

export default Carousel;
