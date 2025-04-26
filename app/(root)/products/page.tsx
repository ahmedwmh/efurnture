import ProductsContainer from '@/components/prodcuts/ProductsContainer';
import React from 'react';

interface ProductsPageProps {
  searchParams: {
    layout?: string;
    search?: string;
  };
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { layout = 'grid', search = '' } = searchParams || {};

  return (
    <ProductsContainer layout={layout} search={search} />
  );
}

export default ProductsPage;