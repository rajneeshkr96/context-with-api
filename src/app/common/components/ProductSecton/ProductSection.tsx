"use client"
import React, { useEffect } from 'react'
import useApi from '../../hooks/api/Api'
import Card from '../Card/Card'
const ProductSection = () => {
    const { data,loading,error,getData} = useApi({data:"",products:[{id:"",thumbnail:"",description:"",price:""}]})
    useEffect(() => {
        getData("https://dummyjson.com/products?limit=12")
    }, [])
    console.log(data)
  return (
    <div>
        {loading && <p>Loading...</p>} 
        {error && <p>Error: {error.message}</p>}
        <h2 className='text-5xl text-center my-4'>Product Section</h2>
        <div className='flex flex-wrap justify-center gap-4'>
            {data.products.length > 0 && data?.products.map((product:any) => (
                <Card key={product.id} thumbnail={product.thumbnail} title={product.title} description={product.description} price={product.price} />
            ))}

        </div>
      
    </div>
  )
}

export default ProductSection
