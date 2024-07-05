// import React from 'react';
// import image1 from "./logo.jpeg";

// const navbar = () => {
//     return (

//         <div className="w-full bg-white -ml-40">
//             <div className="flex justify-between items-center h-16 p-4 -ml-42">
//                 <img className='fixed justify-start flex h-20 -mt-20 -ml-112' src={image1}></img>
//                 <div className='flex space-x-9'>
//                     <a href="#">Home</a>
//                     <a href="/">About</a>
//                     <a href="/">Contact</a>
//                     <a href="/">Variety</a>
//                     <button >Order now</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default navbar;
import React from 'react';
import image1 from "./logo.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import veg from "./veg.webp";
const Navbar = () => {
    return (
        <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-md font-semibold">
            <div className="container mx-auto flex justify-between items-center h-16 px-4">
                <img className=' fixed justify-start flex h-16 -mt-42 -ml-44' src={image1}></img>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">Category</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
                </div>
                <h1 className='flex justify-end -mr-144'><FaPhoneAlt /> 89 757 66502</h1>
                <button className='flex justify-end -mr-24 bg-pink-600 rounded text-white'>Order now</button>

            </div>
            <div className='flex justify-end mr-5'>
                <img className="h-14 -mt-14" src={veg}></img>
            </div>

        </nav>
    );
};

export default Navbar;

