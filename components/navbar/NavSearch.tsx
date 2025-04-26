
'use client';

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { links } from '@/utils/links';

function NavSearch() {

  const searchParams = useSearchParams(); //layout=list&search=sofa (React Hook)
  const [search,setSearch] = useState(searchParams.get('search')?.toString() || '');
  const {replace} = useRouter();

  // value : sofa
  const handleSearch = useDebouncedCallback((value:string)=>{
    const params = new URLSearchParams(searchParams); //read/edit URL query parameters JS
    if(value){
       params.set('search',value);
    }
    else {
      params.delete('search');
    }
    replace(`${links.PRODUCTS.href}?${params.toString()}`);
  },300);
  
  return (
    <Input
      type='search'
      placeholder='Search...'
      className='max-w-xs dark:bg-muted' 
      value={search}
      onChange={ (e)=>{
        setSearch(e.target.value);
        handleSearch(e.target.value);
      } }
    />
  )
}

export default NavSearch