import { Link } from 'react-router-dom'
import menuImage from '../../public/menu/page22x.jpg'
import menu402x from '../../public/menu/menu402x.jpg'
import products from '../../products'
import ProdcutList from '../components/ProdcutList'

export default function MenuScreen() {
  return (
    <div>
        {/* HEADER */}
        <header className="relative md:h-[410px] bg-black bg-cover bg-center" style={{backgroundImage: `url(${menuImage})`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-black from-20% via-black/55 via-80% to-black/25" >
                 
            </div>
        </header>

        {/* Hors d’oeuvres */}
        <section className='mx-32 mt-20'>
            
            <div className='space-y-6'>
                <h1 className='font-avada1 font-normal text-4xl'>Hors d’oeuvres</h1>
                <p className='border-b-2 w-20 '></p>
            </div>
            <Link className='my-10 grid md:grid-cols-3 gap-x-3 gap-y-10'>
                {
                    products.map((product, index)=> (
                        product.category === 'Hors d’oeuvres' ? (<ProdcutList key={index} products={product} />) : ('')
                        
                    )).slice(0, 6)
                }
            </Link>
           
        </section>

        {/* menu */}
        <div className='relative bg-cover bg-center h-[450px]' style={{backgroundImage: `url(${menu402x})`}}>
            <div className='absolute inset-0 bg-gradient-to-t from-black/45 from-5% via-transparent to-transparent grid justify-center items-end'>
                <Link className='font-avada3 uppercase text-white text-base tracking-wide p-3' >black pudding - $25</Link>
            </div>
            
        </div>

    </div>
  )
}
