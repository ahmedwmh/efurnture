import { links } from '@/utils/links'
import { Product } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { formatCurrency } from '@/utils/format'
import FavoriteToggleButton from './FavoriteToggleButton'

function ProductsList({products}:{products:Product[]}) {
  console.log(products);
  return (
   
    <section className='mt-12 grid gap-y-8'>
      {/* card */}
      {products.map((product)=>{

        const productID = product.id;
        const {name,image,price,description} = product;
        const priceFormat = formatCurrency(price);

        return (
          <div className="relative group" key={productID}>
            <Link href={`${links.PRODUCTS.href}/${productID}`}>
                <Card className='transform group-hover:shadow-lg transition-shadow duration-500'>
                  <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                    <div className='relative h-64 md:h-48 md:w-48'>
                      <Image 
                      src={image} 
                      alt={`${image}-List`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className='object-cover rounded-lg'
                      />
                    </div>
                    <div>
                    <h2 className='text-xl font-semibold capitalize'>{name}</h2>
                    <p className='text-muted-foreground mt-4'>{description}</p>
                    </div>
                    <div className=' flex gap-4 items-center md:flex-col justify-between text-xl text-center text-blue-200 font-semibold'>
                      <p>{priceFormat}</p>
                      <div className=' z-5'>
                      <FavoriteToggleButton productId={productID}/>
                      </div>
                    </div>

                  </CardContent>

                  
                </Card>

            </Link>

            

          <div>

          </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProductsList