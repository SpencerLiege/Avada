import navadabar from '../assets/avadabar.jpg'
import chef from '../assets/chef.jpg'
import { Link } from 'react-router-dom'
import { BsDashLg } from "react-icons/bs";

export default function Home() {
  return (
    <>
    <div className='grid grid-cols-2 h-[1000px]'>
      <div className='bg-black text-white pt-64 pe-24 grid grid-cols-3'>
        <BsDashLg className='justify-self-end mr-6 -mt-2 w-10 h-10  ' />

        <article className='flex flex-col  mr-12 col-span-2'>
          <span className='font-medium mb-8 text-slate-300/90 uppercase tracking-wide'>the best table in town</span>
          <span className=' font-Bebas text-[70px] font-semibold uppercase tracking-tighter '>fine dining </span>
          <span className=' font-Bebas  text-[70px] font-semibold uppercase tracking-tighter '>experience</span>
          <span className='mt-10 leading-8 w-72 font-serif text-slate-300/90 text-xl'>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.</span>
          <Link className='uppercase border font-workSans text-center tracking-wider py-2 px-4 w-56 mt-10'> buy avada today </Link>
        </article>
      </div>

      <div className='bg-cover bg-no-repeat tra' style={ {backgroundImage: `url(${navadabar})`, backgroundPosition: '55% 30%',  } }> 
      </div>
    </div>

    <div className='grid grid-cols-2 justify-items-center mt-20'>
      <div className='px-24 ml-12 mt-10 space-y-10'>
        <p className='font-serif  text-xl leading-loose'>
            <span className='font-semibold '>HAC TELLUS, FELIS RISUS AT</span> mattis mattis. Eget euismod semper eget tortor, donec amet, blandit. Tristique facilisi faucibus elementum feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet vulputate.
        </p>
        <p className='font-Bebas uppercase font-semibold tracking-tighter text-[43px] leading-relaxed text-nowrap flex flex-col'>
          <span className=''>food is our common</span>
          <span>ground, a</span>
          <span>universal</span>
          <span>experience</span>
           
        </p>
        <p className='font-serif text-xl leading-loose'>
          Tristique tempus condimentum diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam scelerisque netus viverra dui.
        </p>
      </div>

      <div className='mr-36 relative' >
          <img className='h-[640px] contrast-100 w-[490px] hover:shadow-lg hover:shadow-slate-300 hover:scale-105 transition ease-in-out duration-500' src={chef} alt="" />
          <div className='absolute bottom-44 left-36 text-white font-semibold text-lg font-workSans tracking-widest'>
            Califonia rolls - $22
          </div>
         
      </div>
      <div>
        yes
        yes
      </div>
    </div>

    </>

    
  )
}
