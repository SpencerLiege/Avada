import navadabar from '../assets/avadabar.jpg'
import { Link } from 'react-router-dom'
import { BsDashLg } from "react-icons/bs";

export default function Home() {
  return (
    <>
    <div className='grid grid-cols-2 uppercase h-[1000px]'>
      <div className='bg-black text-white pt-64 pe-10 grid grid-cols-3'>
        <BsDashLg className='justify-self-end mr-6 -mt-2 w-10 h-10  ' />

        <article className='flex flex-col mr-10 col-span-2'>
          <span className='font-medium text-slate-300/90 tracking-wide'>the best table in town</span>
          <span className=' font-Bebas text-[80px] font-semibold tracking-tighter '>fine dining </span>
          <span className=' font-Bebas  text-[70px] font-semibold tracking-tighter '>experience</span>
          <span>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.</span>
          <Link> but avada today </Link>
        </article>
        
        
      </div>
      <div className='bg-cover bg-no-repeat tra' style={ {backgroundImage: `url(${navadabar})`, backgroundPosition: '55% 30%',  } }> 
        
        {/* <img src={navadabar} alt="" /> */}
      </div>
    </div>

    <div>
      yes
    </div>

    </>

    
  )
}
