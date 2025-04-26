import React from 'react'
import { Button } from '../ui/button'

function AddtoCart({productID}:{productID:string}) {
  return (
    <Button className='capitalize mt-8' size={'lg'}>
      Add to Cart
    </Button>
  )
}

export default AddtoCart