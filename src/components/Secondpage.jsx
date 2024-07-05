
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import chocolateCake from './image1.jpeg';
import pineappleCake from './image2.webp';
import redVelvetCake from './image6.jpg';
import butterscotchCake from "./image3.webp";
import cheeseCake from './image7.jpg';
import blackforestCake from "./image4.webp";
import mangoCake from "./image5.webp";

// Sample data for cakes
const cakes = [
    { id: 1, name: 'Chocolate Cake', price: "₹500", button: "Order Now", image: chocolateCake },
    { id: 2, name: 'Cheese cake', price: "₹780", button: "Order Now", image: cheeseCake },
    { id: 3, name: 'Red Velvet Cake', price: "₹590", button: "Order Now", image: redVelvetCake },
    { id: 4, name: 'Strawberry Cake', price: "₹490", button: "Order Now", image: butterscotchCake },
    // { id: 5, name: 'Cheesecake', image: cheesecake },
    // { id: 6, name: 'BlackForest cake', image: blackforestCake },
    // { id: 7, name: 'Mango Cake', image: mangoCake },
    // Add more cakes as needed
];

const SecondPage = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = scrollRef.current.children[0].offsetWidth; // Width of one cake item
        if (direction === 'left') {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="p-4 ">
            <div >
                <p className="flex justify-center text-2xl">Our specials</p>
                <h1 className="flex justify-center text-4xl font-semibold">Our exclusive cakes</h1>
            </div>
            <div className="relative flex items-center mt-6">
                <button onClick={() => scroll('left')} className="absolute left-0 bg-white rounded-full shadow p-2 z-10">
                    <FaArrowLeft size={24} />
                </button>
                <div ref={scrollRef} className="flex overflow-x-scroll space-x-4 pb-4 scroll-smooth bg-grey-300 shadow-lg">
                    {cakes.map((cake) => (
                        <div key={cake.id} className="flex-none w-64">
                            <img
                                src={cake.image}
                                alt={cake.name}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <p className="text-center mt-2 text-xl">{cake.name}</p>
                            <p className='text-center font-bold'>{cake.price}</p>
                            <p className='text-center font-bold bg-yellow-200 rounded-lg'>{cake.button}</p>
                        </div>
                    ))}
                </div>
                <button onClick={() => scroll('right')} className="absolute right-0 bg-white rounded-full shadow p-2 z-10">
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default SecondPage;
