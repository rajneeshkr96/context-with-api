import Image from 'next/image'
import React from 'react'

const Card = ({ thumbnail, title, description,price }: { thumbnail: string, title: string, description: string,price:string }) => {
    return (
        <div className='w-60 h-auto py-2 py-4 border rounded-r-md'>
            <div className='w-11/12 bg-white rounded-md'>
                <Image
                    src={thumbnail}
                    width={300}
                    height={300}
                    alt='image'
                    className='w-full h-auto object-cover '

                />
            </div>
            <div className='text-center'>
                <p className='text-sm text-blue-400'>₹ {price}</p>
                <h3 className='font-bold text-3xl'>{title}</h3>
                <p className='!text-xs'>{description}</p>
            </div>



        </div>
    )
}

export default Card
