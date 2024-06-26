/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom"
import ProdcutList from '../components/ProdcutList'

export default function Hors({products}) {
  return (
    <section className='mx-32 mt-20'>
            <div className='space-y-6'>
                <h1 className='font-avada1 font-normal text-4xl'>Hors d’oeuvres</h1>
                <p className='border-b-2 w-20 '></p>
            </div>
            <div className='my-10 grid md:grid-cols-3 gap-x-3 gap-y-10'>
                {
                    products.map((product)=> (
                        product.category === 'Hors d’oeuvres' ? (<ProdcutList key={product._id} products={product} />) : ('')
                        
                    )).slice(0, 6)
                }
            </div>    
    </section>
  )
}
