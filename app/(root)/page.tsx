import {LoadingContainer} from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";


export default function Home() {
  
  return (
    <>
     
     <Hero />
     <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
     </Suspense>
      
    </>
  );
}
