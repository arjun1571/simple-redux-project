import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';

const Home = () => {
    const [products,setProduct]=useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    console.log(products);
    return (
        <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-3 lg:p-32 p-5 md:p-10'>
            {
                products.map((product)=> <ProductCart key={product._id} product={product}></ProductCart> )
            }
        </div>
    );
};

export default Home;