import ProductsContainer from '@/components/prodcuts/ProductsContainer';
import React from 'react';



interface ProjectsPageProps {
  searchParams: {
    layout?: string;
    search?: string;
  };
}


async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { layout = 'grid', search = '' } = searchParams || {};


  return (
    <ProductsContainer layout={layout} search={search} />
  );
}

export default ProjectsPage;
