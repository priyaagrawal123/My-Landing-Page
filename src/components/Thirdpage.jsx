import React from 'react'
import custome from "./custome.webp";
import bg1 from "./bg3.webp";
import cupcake from "./cupcakes.jpeg";
import pastry from "./pastri2.jpg";
import cheesecake from "./cheesecake.webp";
import chocolate from "./chocolat.jpeg";
import girl from "./girl.png";
import blur2 from "./blur1.png";
import blur3 from "./blur3.png";
import blur6 from "./blur6.png";

const Thirdpage = () => {
    return (
        <div>
            <div>
                {/* className="relative h-screen bg-cover bg-center w-full opacity-90"
            style={{ backgroundImage: `url(${bg1})` }}
         */}


                <h1 className='flex justify-center mt-24 font-serif text-4xl'>Category</h1>
                <div>
                    <img className="flex justify-start h-96 -ml-42 mt-28 " src={custome}></img>
                </div>
                <h1 className='justify-center flex font-semibold text-4xl -mt-72 ml-96'>Customized/themed Birthday Cakes</h1>
                <p className='justify-center flex text-2xl font-sans ml-96 '>Make your cakes Customised as per your theme </p>
                <p className="justify-center flex text-2xl font-sans ml-96">Customised birthday cakes orders will be taken</p>
                <p className='justify-center flex text-xl font-bold text-green-600 ml-96'>Starting range ₹780...</p>
            </div>

            <div className='flex justify-end -mr-14 mt-32'>
                <img className="flex justify-end h-72 mt-32 w-112" src={cupcake}></img>
            </div>
            <h1 className='justify-start flex font-semibold text-3xl -mt-56 mr-96 w-1/2'>All flavoues of Customised </h1>
            <h1 className='justify-start flex font-semibold text-3xl -mt-2 mr-96 w-1/2'>and Normal cupcakes orders will be taken </h1>

            <p className='justify-start flex text-xl font-sans ml-9 w-1/2'>Flavours-Strawberry,Chocolate,Chocolate Truffle,vanilla,red velvet and many more </p>
            <button className='flex justify-center bg-pink-400 rounded w-24 -mt-6 ml-60'>Read more</button>
            {/* <p className="justify-start flex text-2xl font-sans ml-96">Customised birthday cakes orders will be taken</p> */}
            <p className='justify-start flex text-xl font-bold text-green-600 ml-48'>Starting range ₹20...</p>
            <p className="justify-center flex text-xl font-sans -ml-140">note-Only available if order more than 3 pieces</p>

            <p className="justify-center flex text-xl font-sans -ml-140">Order 3 hrs prior</p>


            <div>
                <img className="flex justify-start h-72 -ml-42 mt-28 " src={pastry}></img>
            </div>
            <h1 className='justify-center flex font-semibold text-4xl -mt-60 ml-96'>Flavourful tarts</h1>
            <div className='flex justify-end'>
                <p className='justify-end flex text-2xl font-sans ml-42 w-2/4 '>It Comes in different flavours like strawberry,Chocolate and much more </p>
            </div>
            <div className='flex justify-center ml-72'>
                <button className='flex justify-end -mr-9 bg-pink-400 rounded  text-black'>Read more</button>
            </div>

            <p className='justify-center flex text-xl font-bold text-green-600 ml-96'>Starting range ₹80/pp..</p>
            <p className="justify-center flex text-xl font-sans ml-96">note-Only available if order more than 3 pieces</p>

            <p className="justify-center flex text-xl font-sans ml-96">Order 3 hrs prior</p>

            <div className='flex justify-end -mr-14 mt-28'>
                <img className="flex justify-end h-80 " src={cheesecake}></img>
            </div>
            <h1 className='justify-start flex font-semibold text-4xl -mt-60 ml-60 w-1/2'>Chessecake</h1>
            <h1 className='justify-center flex font-semibold text-2xl mt-4 ml-3 w-2/3'>flavourful and rice in taste Chessecakes,CupCake now available</h1>
            <h1 className='justify-center flex text-xl font-semibold text-blue-800 -ml-96'>types-Bakes Cheesecake & Non-baked cheesecake</h1>

            {/* <h1 className='justify-start flex font-semibold text-3xl -mt-2 mr-96 w-1/2'>and Normal cupcakes orders will be taken </h1> */}

            <p className='justify-start flex text-xl font-sans ml-9 w-1/2'>Flavours-Strawberry,Chocolate,Blueberry and many more </p>
            <div className='flex justify-center mr-9'>
                <button className='flex justify-center bg-pink-400 rounded w-24 -mt-6 '>Read more</button>
            </div>
            {/* <p className="justify-start flex text-2xl font-sans ml-96">Customised birthday cakes orders will be taken</p> */}
            <p className='justify-start flex text-xl font-bold text-green-600 ml-48'>Starting range ₹90/pp...</p>
            <p className="justify-center flex text-xl font-sans -ml-112">note-Only available if order more than 3 pieces</p>

            <p className="justify-center flex text-xl font-sans -ml-144">Order 1 day prior</p>
            <div>
                <img className="flex justify-start h-96 -ml-12 mt-28 " src={chocolate}></img>
            </div>
            <div className='flex justify-center ml-96'>
                <h1 className='text-4xl font-semibold -mt-80 '>Homemade Chocolates</h1>
            </div>
            <h1 className='justify-center flex font-semibold text-2xl -mt-64 ml-96 '>Fresh ,homemade chocolates orders will be taken </h1>
            <div className='flex justify-center -mr-96'>
                <h1 className='text-2xl font-semibold text-yellow-500'>Sugar-free chocolates are also available</h1>
            </div>
            <p className='justify-center flex text-xl font-sans ml-96 '>Flavours:-Gulkand ,dark chocolate ,and also flavours of your choice </p>
            <p className="justify-center flex text-2xl font-sans ml-96 text-blue-800 font-semibold">ps-we don't add any preservatives in it,it is freshly made with cocoa</p>
            <p className='justify-center flex text-xl font-bold text-green-600 ml-60'>Starting range ₹9/pp...</p>
            <p className="justify-center flex text-xl font-sans ml-72">note-Only available if order more than 3 pieces</p>

            <p className="justify-center flex text-xl font-sans ml-80">Order 1 day prior</p>

            <img className="flex justify-center ml-72 mt-28" src={girl}></img>
            <img className="flex justify-center -ml-112 h-96 -mt-112 opacity-10" src={blur2}></img>
            <div className='flex justify-end ml-96'> <img className="flex justify-end -mr-96 opacity-10 -mt-96 " src={blur3}></img>
            </div>


        </div>



    )
}

export default Thirdpage
