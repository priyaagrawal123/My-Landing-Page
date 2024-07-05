import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import image1 from "./Untitled (1).png";
import image2 from "./tart5.png";
import cupcakeIcon from "./blur6.png";

const Frontpage = () => {
    return (
        <div className="relative h-screen">
            <div className="relative ml-72 lg:flex justify-end -mt-48 lg:-mr-144">
                <img
                    className="rounded-full h-7/12 w-7/12 ml-auto inset-0"
                    src={image1}
                    alt="Delicious Cakes"
                />
            </div>
            <div className="flex justify-center lg:justify-start">
                <img
                    src={cupcakeIcon}
                    alt="Cupcake"
                    className="w-25 h-20 md:w-25 md:h-24 animate-bounce lg:-mt-136 lg:-ml-80"
                />
            </div>
            <div className='absolute flex justify-start font-extrabold opacity-10 text-6xl md:text-9xl -ml-12 md:-ml-24 -m-32 md:-m-112'>
                <h1 className='font-dancing'>Delicious</h1>
            </div>
            <div className='absolute flex justify-start font-bold text-4xl md:text-7xl -ml-4 md:-ml-9 -m-64 md:-m-96'>
                <h1 className='font-dancing'>Cakes Glory</h1>
            </div>
            <div className='absolute flex justify-start -mt-40 md:-mt-72 -ml-12 md:-ml-24 font-sans rounded text-pink-700'>
                <h1 className='text-lg md:text-3xl font-bold'>Hi, I'M Priya, a Homebaker Serving you the happiness..</h1>
            </div>
            <div className='absolute flex justify-start font-sans font-semibold text-lg md:text-3xl -ml-12 md:-ml-24 -m-20 md:-m-64 w-5/6 md:w-4/6'>
                <p>  Like a cupcake is incomplete without a cherry on the top,  <span className='text-blue-500'>let our Cakes become the cherry of your Special moments</span>
                </p>
            </div>
            <div className="relative flex justify-start pl-0">
                <img
                    className="absolute rounded-full h-48 md:h-72 w-48 md:w-72 -ml-72 ml-96 md:-ml-136 -mt-24 md:-mt-44"
                    src={image2}
                    alt="Delicious Cakes"
                />
            </div>
            <button className='absolute text-lg md:text-2xl font-semibold bg-yellow-200 rounded -mt-16 md:-mt-32 -ml-24 md:-ml-42 w-24 md:w-35'>Order Now</button>
        </div>
    );
}

export default Frontpage;
