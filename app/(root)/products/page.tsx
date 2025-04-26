import ProductsContainer from '@/components/prodcuts/ProductsContainer';
import React from 'react';

import { PageProps } from 'next';





async function ProjectsPage({searchParams}:PageProps<{ layout?: string; search?: string }>) {
  

  const {layout = 'grid'} = await searchParams || {};
  const {search} = await searchParams || '';

  


  return (
    <ProductsContainer layout={layout} search={search}/>
  )
}

export default ProjectsPage

