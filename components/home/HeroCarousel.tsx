import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from 'next/image'
import db from '@/utils/db'

async function HeroCarousel() {

const hero = await db.hero.findMany();


  return (
    <div className='lg:block hidden'>
      <Carousel>
        <CarouselContent>
         

         {hero.map((item)=>(
              <CarouselItem key={item.id}>
              <div className='p-2  border-1 border-blue-50 rounded-md'>
              <Image  
                  src={item.image} 
                  alt='hero'
                  
                  width={400}
                  height={400}
                  priority
                  className=' 0 object-cover w-full h-[28rem]  rounded-md'
                  />
              </div>
            </CarouselItem>
         ))}

          

          
          

         
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroCarousel