import React, { useState } from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';

const PropertyCard = ({imgSrc,bathrooms,bedrooms,city,country,currency,daysOnZillow,homeStatus,homeStatusForHDP,homeType,livingArea,price,priceForHDP,streetAddress,zipcode,lotAreaValue,zpid,state,zestimate}) => {
  const [isLiked,setIsLiked] = useState(false);

  const handleClick=()=>{
    setIsLiked(!isLiked);
  }
  return (
    <>
    <div className='w-[300px] min-h-[370px] bg-[#d3e5ecd5] bg-white flex flex-col rounded-md shadow-md p-1 hover:scale-105 transition-transform duration-300'>
      <div className='relative flex items-center justify-center'>
        <img src={imgSrc} className='h-[200px] rounded-md' alt="" />
        <div className='absolute top-2 w-[30px] h-[30px] bg-white rounded-full right-4  grid place-items-center cursor-pointer' onClick={handleClick}>
            {
              isLiked ? ( <FcLike fontSize = '1.4rem'/>) : (<FcLikePlaceholder fontSize='1.4rem'/>)
            }
        </div>
        <div className='absolute top-2 left-4 p-1 bg-white text-blue-700 rounded-full cursor-pointer'>
          <h2>{homeStatus}</h2>
        </div>
      </div>


    <div className='tour-info p-3'>
      <div className='flex gap-2'>
        <h2 className=''>{city},</h2>
        <h2 className=''>{country}</h2>
      </div>
      {/* Address */}
      <div className='text-sm font-semibold'>
            {state} {streetAddress} {zestimate} {zipcode}.
      </div>
      <div className='flex justify-between text-sm mt-4'>
        <p>{bathrooms} Bath</p>
        <p>{bedrooms} Room</p>
        <p>{livingArea} Bed</p>
        <p>{lotAreaValue} sft</p>
      </div>
      <div className='flex justify-between mb-2'>
      </div> <hr />
      <div className='w-full flex items-center justify-between mt-3'>
        <div>
          <h2 ><span className='font-bold'>{price}</span><sub>/month</sub></h2>
        </div>
        <div className='flex gap-3'>
          <button className='p-1 text-blue-700 border-blue-700 border rounded-full hover:bg-blue-600 hover:text-white'>Read More</button>
        </div>
      </div>
      </div>
      <div>
    </div>
    </div>
    </>
  )
}

export default PropertyCard
