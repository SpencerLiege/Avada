import PageHeader from "../components/PageHeader";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";
import { useParams, Link } from "react-router-dom";
import Loader from '../components/Loader'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PiEggCrackLight } from "react-icons/pi";
import { GiOakLeaf } from "react-icons/gi";
import { LuMilk } from "react-icons/lu";
import { GiPeanut } from "react-icons/gi";
import { FaCarRear } from 'react-icons/fa6'


export default function MenuItemScreen() {
  const { id: productId } = useParams();
  const { data: product, isLoading, isError } = useGetProductDetailsQuery(productId);

  return (
    <>
     {isLoading ? (<Loader type='product' />) : isError ? (<div>{isError?.data?.message || isError.error}</div>) : 
    (
      <div>
        <PageHeader image={product.image}>
        <div className='uppercase text-white text-center'>
                  <p className='font-workSans tracking-wider text-[15px]' >restuarant menu</p>
                  <p className='font-avada2 font-semibold text-[70px]'> {product.category} </p>
          </div>
      </PageHeader>
      <div className='my-16 mx-32 grid grid-cols-2 gap-x-40'>
        <img className='h-[400px] w-[400px] object-cover' src={product.image} alt="" />
        <div className='flex flex-col gap-y-8'>
          <div className="flex justify-between">
            <Link to='/menu' className='flex items-center justify-center space-x-3 uppercase hover:border-black border transition ease-in-out duration-500 font-workSans text-[15px] tracking-widest py-2 px-6'><MdOutlineKeyboardArrowLeft className='w-3 h-4'/><span> back to menu </span></Link>

            <Link to={`/menu/${product._id}/takeout`} className='flex items-center justify-center space-x-3 uppercase hover:border-black border transition ease-in-out duration-500 font-workSans text-[15px] tracking-widest py-2 px-6'><span> order takeout </span> <FaCarRear className='w-3 h-4'/></Link>
          </div>

          <span className='font-avada2 text-[31px]'> {product.name} </span>
          <p className='border-b-2 w-20 '></p>
          <p className='font-serif text-[19px] leading-loose'> <span>{product.description}</span> <span>Tristique tempus condimentum diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam scelerisque netus viverra dui pretium pulvinar. Commodo morbi amet.</span></p>
          <div className='flex flex-col gap-y-6'>
            <span className='font-avada2 text-[24px]'>allergen info</span>
            <p className='border-b-2 w-20 '></p>
            <section className='grid grid-cols-2'>
              <div className='grid gap-y-6 text-[21px] font-serif capitalize'>
                <p className='flex items-center gap-x-6'><PiEggCrackLight /> <span>egg free</span></p>
                <p className='flex items-center gap-x-6'><GiOakLeaf /> <span>gluten free</span></p>
              </div>
              <div className='grid gap-y-6  text-[21px] font-serif capitalize'>
                <p className='flex items-center gap-x-6'><LuMilk /> <span>lactose free</span></p>
                <p className='flex items-center gap-x-6'><GiPeanut /> <span>nut free</span></p>
              </div>

            </section>
          </div>
          
        </div>
      
      </div>

      </div>
      
    )}
    </>
   
    
  );
}
