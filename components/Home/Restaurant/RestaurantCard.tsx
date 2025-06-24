import Image from 'next/image';
import React from 'react'

type Props = {
    title: string;
    image: string;
}

const RestaurantCard = ({title, image} : Props) => {
  return (
    <div>
        <Image src={image} alt="image" width={400} height={400} className='w-full h-[250px] object-cover ' />
        <h1 className='mt-4 w-fit line-clamp-1 dark:hover:text-amber-300 hover:text-blue-950 transition-all duration-200 cursor-pointer text-base sm:text-lg font-bold'>
            {title}
        </h1>
        <div className='flex items-center font-medium mt-3 space-x-2'>
            <p className='bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>American</p>
            <p className='bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>Fast Food</p>
            <p className='bg-blue-950 px-3 py-1.5 rounded-full text-sm sm:text-base text-white'>Burgers</p>
        </div>
    </div>
  )
}

export default RestaurantCard