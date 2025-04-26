import ProductsContainer from '@/components/prodcuts/ProductsContainer';
import React from 'react';



interface ProductsPageProps  {
   searchParams:{
    layout?:string
    search?:string,
   }
}



async function ProjectsPage({searchParams}:ProductsPageProps) {
  

  const {layout = 'grid'} = await searchParams || {};
  const {search} = await searchParams || '';

  


  return (
    <ProductsContainer layout={layout} search={search}/>
  )
}

export default ProjectsPage

