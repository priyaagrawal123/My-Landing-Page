import React from 'react';
import girlPhoto from "./girl.png";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Fourthpage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <div className="flex justify-center bg-pink-200 w-full h-[30rem]">
                <img className='h-[20rem]' src={girlPhoto} alt="Girl" />
            </div>
            <div className="flex-grow"></div> */}
            <footer className="bg-pink-100 text-white py-8 w-full shadow-lg mt-4">
                <div className="flex flex-col items-center space-y-4 px-4 md:px-8 lg:px-16">
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-black">Contact Us</p>
                        <p className="text-black">Phone: 123-456-7890</p>
                        <p className="text-black">Email: example@example.com</p>
                    </div>
                    <div className="text-center max-w-screen-md">
                        <h2 className="text-xl font-bold mb-2 text-black">Why Us?</h2>
                        <p className="text-black">We provide the best homemade cakes with fresh ingredients and a touch of love. Our cakes are perfect for all your special moments, making them unforgettable with our unique and delicious flavors.</p>
                    </div>
                    <div className="text-center max-w-screen-md">
                        <h2 className="text-xl font-bold mb-2 text-black">Quality</h2>
                        <p className="text-black">Our cakes are made with the highest quality ingredients, ensuring each bite is a delight. We take pride in our craftsmanship and attention to detail.</p>
                    </div>
                    <div className="text-center max-w-screen-md">
                        <h2 className="text-xl font-bold mb-2 text-black">Help</h2>
                        <p className="text-black">Need assistance? Our customer service team is here to help you with any questions or concerns. Contact us via phone or email, and we'll be happy to assist you.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Fourthpage;
