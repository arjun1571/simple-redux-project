import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';
import { useSelector } from 'react-redux';

const Home = () => {
    const [products,setProduct]=useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const state = useSelector((state)=>state)
    console.log(state);
    return (
        <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-3 lg:p-32 p-5 md:p-10'>
            {
                products.map((product)=> <ProductCart key={product._id} product={product}></ProductCart> )
            }
        </div>
    );
};

export default Home;