/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import ProdcutList from "./ProdcutList"

export default function Drinks({products}) {
  return (
    <section className='mx-32 mt-20'>
        <div className='space-y-6'>
            <h1 className='font-avada1 font-normal text-4xl'>Drinks & Cocktails</h1>
            <p className='border-b-2 w-20 '></p>
        </div>
        <Link className='my-10 grid md:grid-cols-3 gap-x-3 gap-y-10'>
            {
                products.map((product, index)=> (
                    product.category === 'Drinks and Cocktails' ? (<ProdcutList key={index} products={product} />) : ('')
                    
                ))
            }
        </Link>
    </section>
  )
}
