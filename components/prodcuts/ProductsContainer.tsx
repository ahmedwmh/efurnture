import { fetchAllProducts } from '@/utils/actions'
import React from 'react'
import { Separator } from '../ui/separator';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { Button } from '../ui/button';
import Link from 'next/link';
import { links } from '@/utils/links';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
async function ProductsContainer({layout,search}:{layout:string,search:string}) {


  const totalProducts = await fetchAllProducts({search});
  const lengthProudcts =  totalProducts.length;
  const searchTerm = search ? `&search=${search}` : '';

  console.log(lengthProudcts);

  return (
 
    <>
     {/* HEADER */}
     <section> 
      <div className='flex justify-between items-center'>
          <h4>
            {lengthProudcts} Product{lengthProudcts > 1 && 's'}
          </h4>

          <div className='flex gap-4'>
              <Button size={'icon'} variant={layout ==='grid'? 'default' :'outline'} asChild>

                    <Link href={`${links.PRODUCTS.href}?layout=grid${searchTerm}`}>
                      <LuLayoutGrid />
                    </Link>
              </Button>

              <Button size={'icon'} variant={layout ==='list'? 'default' :'outline'} asChild>
              <Link href={`${links.PRODUCTS.href}?layout=list${searchTerm}`}>
                    <LuList />
              </Link>      
              </Button>
          </div>
      </div>
      <Separator className='mt-4'/>
    
     

     </section>

      {/* Products */}
      <section>
        {
          totalProducts.length === 0 ? (
            <h5> Sorry , No Proudcts Matched Your Search</h5>

          ) : layout === 'grid' ? (
            <ProductsGrid products={totalProducts}/>
          ) : (
            <ProductsList products={totalProducts}/>
          )

        }
      </section>
  
    
    </>
  
  )
}

export default ProductsContainer