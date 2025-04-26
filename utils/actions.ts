'use server';

import { redirect } from 'next/navigation';
import db from './db';

//fetch all featured prodcuts
export async function fetchFeaturedProducts(){
    const prodcuts = await db.product.findMany({
        where : {
            featured:true,
        }
    });

    return prodcuts;
}
//fetch all  prodcuts
export async function fetchAllProducts({search =''}:{search:string}){
    const prodcuts = await db.product.findMany({
        where:{
            OR :[
                {
                    name: {contains:search, mode:'insensitive'}
                },
            ]
        },

        orderBy : {
            createdAt : 'desc',
        }
    });

    return prodcuts;
}

//  find proudct

export async function fetchSingleProduct(productID:string) {
    const product = await db.product.findUnique({
        where : {
            id : productID.trim(),
        },
    });

    if(!product){
        redirect('/products');
    }


    return product;
}
