import { Link } from 'react-router-dom'
import menuImage from '/menu/page22x.jpg'
import menu402x from '/menu/menu402x.jpg'
import menu392x from '/menu/menu392x.jpg'
import gin from '/menu/gin.jpg'
import { FaCarRear } from 'react-icons/fa6'
// import products from '../../products'
import PageHeader from '../components/PageHeader'
import MainCourse from '../components/MainCourse'
import Hors from '../components/Hors'
import Deserts from '../components/Deserts'
import Menu from '../components/Menu'
import Drinks from '../components/Drinks'
import Loader from '../components/Loader'
import { useGetProductsQuery } from '../slices/productApiSlice'

export default function MenuScreen() {

    const { data: products, isLoading, isError } = useGetProductsQuery()


  return (
    <>
      {isLoading ? (<Loader type='product' />) :
      isError ? (<div>{isError?.data?.message || isError.error}</div>) :
       (<div>
          {/* HEADER */}
          <PageHeader image={menuImage}>
              <div className='uppercase text-white '>
                  <p className='font-workSans tracking-wider mb-10' >best table in town</p>
                  <p className='flex items-center justify-between'>
                          <span className='font-avada2 text-7xl'>our seasonal menu</span>
                          <Link className='flex items-center space-x-3 uppercase border font-workSans text-center tracking-wider py-2 px-8 hover:bg-white hover:text-black transition ease-in-out duration-500'><FaCarRear className='w-3 h-4'/><span> view takeout menu </span></Link>
                  </p>
              </div>
          </PageHeader>

          {/* Hors d’oeuvres */}
          <Hors products={products}/>    

          {/* menu */}
          <Menu image={menu402x}>black pudding - $25</Menu>

          {/* Main course */}
          <MainCourse products={products}/>

          {/* menu 2*/}
          <Menu image={menu392x}>maple and mouse chickpeas - $25</Menu>

          {/* Deserts and cake */}
          <Deserts products={products}/>

          {/* menu 3*/}
          <Menu image={gin}>Gin and tonic - $13</Menu>

          {/* Drinks and cocktails */}
          <Drinks products={products}/>

        </div>) }    
    </>
    
  )
}
