import navadabar from '../assets/avadabar.jpg'
import chef from '../assets/chef.jpg'
import signature from '../assets/signature.jpg'
import plateMenu from '../assets/platemenu.jpg'
import woman from '../assets/woman.jpg'
import eating from '../assets/eating.jpg'
import slicing from '../assets/slicing.jpg'
import shushi from '../assets/shushi.jpg'
import coffea from '../assets/coffea.jpg'
import cooking from '../assets/cooking.jpg'
import payment from '../assets/payment.jpg'
import foods from '../assets/foods.jpg'
import mxw from '../assets/mxw.jpg'
import chopstick from '../assets/chopstick.jpg'
import { Link } from 'react-router-dom'
import { BsDashLg } from "react-icons/bs";
import { FaCarRear } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon } from '@fortawesome/free-solid-svg-icons';
import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import reviews from '../reviews/reviews.js'
import StarRating from '../components/StarRating.jsx'

// import { faMeat } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
    {/* 1 - FRONT PAGE */}
    <div className='grid grid-cols-2 h-[1000px]'>
      <div className='bg-black text-white pt-64 pe-24 grid grid-cols-3'>
        <BsDashLg className='justify-self-end mr-6 -mt-2 w-10 h-10  ' />

        <article className='flex flex-col  mr-12 col-span-2'>
          <span className='font-medium mb-8 text-slate-300/90 uppercase tracking-wide'>the best table in town</span>
          <span className=' font-avada2 text-[85px]  uppercase tracking-wider '>fine dining </span>
          <span className=' font-avada2  text-[85px] uppercase tracking-wider '>experience</span>
          <span className=' leading-8 w-72 font-serif text-slate-300/90 text-xl'>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.</span>
          <Link className='uppercase border font-workSans text-center tracking-wider py-2 px-6 w-56 mt-10 hover:bg-white hover:text-black transition ease-in-out duration-500'> buy avada today </Link>
        </article>
      </div>

      <div className='bg-cover bg-no-repeat tra' style={ {backgroundImage: `url(${navadabar})`, backgroundPosition: '55% 30%',  } }> 
      </div>
    </div>

    {/* 2 - ABOUT*/}
    <div className='grid grid-cols-2 justify-items-center mt-20'>
      <div className='px-24 ml-12 mt-10 space-y-10'>
        <p className='font-serif  text-xl leading-loose '>
            <span className='font-semibold '>HAC TELLUS, FELIS RISUS AT</span> mattis mattis. Eget euismod semper eget tortor, donec amet, blandit. Tristique facilisi faucibus elementum feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet vulputate.
        </p>
        <p className='font-avada2 uppercase tracking-wide text-[60px] text-nowrap flex flex-col'>
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
    </div>

    {/* 3 - SIGNATURE*/}
    <div className=''>
        <img className='ml-24 mt-10' src={signature} alt="" />
    </div>

    {/* 4 - EXPLORE */}
    <section className='flex mx-36 mt-16 space-x-10'>
        <div className='flex flex-col space-y-6 font-serif text-[17px] text-center leading-loose'>
          <FontAwesomeIcon className='h-20 w-20 opacity-20 self-center'  icon={faBacon} />  
          <span className='uppercase text-3xl font-semibold font-avada2 text-nowrap'>the best table in town</span>
          <span className='border-b-2 w-20 self-center'></span>
          <span className='font-[50]'>
            Sed aenean egestas ut aliquam turpis mauris, molestie. Vitae tellus tempor sem id tempus neque, tellus turpis turpis. Morbi tortor id gravida aliquet.
          </span>
          <Link className='uppercase border-2 border-slate-300 hover:border-slate-500 font-workSans text-center text-sm tracking-wider py-2 px-6 self-center transition ease-in-out duration-500'> explore the menu </Link>
        </div>

        <div className='flex flex-col space-y-6 font-serif text-[17px] text-center leading-loose'>
          <FontAwesomeIcon className='h-20 w-20 opacity-20 self-center' icon={faCloudMeatball} />
          <span className='uppercase text-3xl font-semibold font-avada2'>perfect for groups</span>
          <span className='border-b-2 w-20 self-center'></span>
          <span className='font-[50]'>
            Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Orci elementum in aliquet a gravida vivamus aliquam turpis vitae.
          </span>
          <Link className='uppercase border-2 border-slate-300 hover:border-slate-500 font-workSans text-center text-sm tracking-wider py-2 px-6 self-center transition ease-in-out duration-500'> buy avada today </Link>
        </div>

        <div className='flex flex-col space-y-6 font-serif text-[17px] text-center leading-loose'>
          <FontAwesomeIcon className='h-20 w-20 opacity-20 self-center' icon={faDrumstickBite} />
          <span className='uppercase text-3xl font-semibold font-avada2'>fresh producs everyday</span>
          <span className='border-b-2 w-20 self-center'></span>
          <span className='font-[50]'>
            Hendrerit amet, volutpat leo non, commodo maecenas scelerisque tincidunt. Morbi vulputate morbi purus quisque sit sagittis orci elementum gravida.
          </span>
          <Link className='uppercase border-2 border-slate-300 hover:border-slate-500 font-workSans text-center text-sm tracking-wider py-2 px-6 self-center transition ease-in-out duration-500'> learn more about us </Link>
        </div>
    </section>

    {/* 5 - EXPLORE THE MENU*/}
    <div className='grid grid-cols-5 mt-28' >
      <img src={plateMenu} alt="" className=' col-span-3 w-full h-[850px]' />
      <div className='col-span-2 bg-black'>
        <div className='bg-black text-white pt-52 pe-24 grid grid-cols-3'>
          <BsDashLg className='justify-self-end mr-6 -mt-2 w-10 h-10  ' />

          <article className='flex flex-col  mr-12 col-span-2'>
            <span className='font-medium mb-8 text-slate-300/90 uppercase tracking-wide leading-relaxed'>fine dining experience</span>
            <span className=' font-avada2 text-5xl font-semibold uppercase  leading-relaxed'>the best </span>
            <span className=' font-avada2  text-5xl font-semibold uppercase  leading-relaxed '>table</span>
            <span className=' font-avada2  text-5xl font-semibold uppercase leading-relaxed'>in town</span>
            <span className='mt-10 leading-8 w-72 font-serif text-slate-300/90 text-xl'>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.</span>
            <Link className='uppercase border font-workSans text-center tracking-wider py-2 px-4 w-56 mt-16 hover:bg-white hover:text-black transition ease-in-out duration-500'> buy avada today </Link>
          </article>
        </div>
      </div>
    </div>

    {/* 6 - REVIEWS INTRO*/}
    <div className='font-avada1 my-20 px-auto space-y-6 flex flex-col items-center'>
      <p className='text-5xl'>What critics are saying about us</p>
      <p className='border-b-2 w-20 '></p>
    </div>

    {/* 7 - REVIEWS-MAIN */}
    <div className='grid relative grid-cols-2 px-32 mt-16'>
      <div className=''>
          <img src={woman} alt="" className='h-[750px] object-cover'/>
      </div>
      <div className='relative bg-black text-white hover:scale-105 transition ease-in-out duration-300'>
      </div>
      <article className='grid p-24 col-start-2 space-y-10 mr-32 absolute text-white'>
        <p className='font-serif uppercase tracking-wider text-base text-slate-300'> {reviews[0].name} </p>
        <p className='font-avada2 text-6xl'> {reviews[0].organization} </p>
        <StarRating value={reviews[0].rating}/>
        <p className='border-b w-20 '></p>
        <p className='font-serif text-xl leading-loose'> {reviews[0].content} </p>
        <Link className='uppercase text-sm border font-workSans text-center tracking-wider py-2 px-8 w-56 mt-16 hover:bg-white hover:text-black transition ease-in-out duration-500'>
         Read full article
         </Link>
      </article>
      
    </div>

    {/* 8 - REVIEWS*/}
    <div className='grid grid-cols-2 gap-x-10 mt-16 mx-32' >
     
      <div className='bg-cover grid relative bg-center h-[700px] text-white' style={{backgroundImage: `url(${eating})`}} >
        <div className='absolute bg-gradient-to-b from-black from-10% via-black/60 via-50%  to-transparent w-full h-full'>
          <article className='z-10 text-white grid gap-y-8 p-24 '>
              <p className='font-serif uppercase tracking-wider text-base text-slate-300'> {reviews[1].name} </p>
              <p className='font-avada2 text-6xl'> {reviews[1].organization} </p>
              <StarRating value={reviews[1].rating}/>
              <p className='border-b w-20 '></p>
              <p className='font-serif text-xl leading-loose'> {reviews[1].content} </p>
              <Link className='uppercase text-sm border font-workSans text-center tracking-wider py-3 px-8 w-56 mt-16 hover:bg-black/70 hover:text-white transition ease-in-out duration-500'>
              Read full article
              </Link>
            </article>
        </div>

      </div>
      <article className='bg-cover relative grid h-[700px] bg-black' style={{backgroundImage: `url(${slicing})`}} >
        <div className='absolute bg-gradient-to-b from-black from-10% via-black/60 via-50%  to-transparent h-full w-full '>
          <article className='z-10  text-white grid gap-y-8 p-24 '>
                <p className='font-serif uppercase tracking-wider text-base text-slate-300'> {reviews[2].name} </p>
                <p className='font-avada2 text-6xl'> {reviews[2].organization} </p>
                <StarRating value={reviews[2].rating}/>
                <p className='border-b w-20 '></p>
                <p className='font-serif text-xl leading-loose'> {reviews[2].content} </p>
                <Link className='uppercase text-sm border font-workSans text-center tracking-wider py-3 px-8 w-56 mt-16 hover:bg-black/70 hover:text-white transition ease-in-out duration-500'>
                Read full article
                </Link>
              </article>
            </div>
      </article>
    </div>
    
    {/* 9 - LARGE MENU */}
    <div className= 'relative bg-cover bg-center  mt-10 w-full h-[470px]' style={{backgroundImage: `url(${shushi})`}}>
      <div className='absolute w-full h-full bg-gradient-to-t from-black/40 via-transparent from-5% to-transparent'></div>
      <Link className='absolute bottom-6 left-[570px] font-workSans text-sm font-semibold text-white uppercase tracking-widest'> <span> kung pao chicken</span> - <span>$32</span></Link>
    </div>

    {/* 10 - LATEST NEWS */}
    <div className=' my-20'>
      <div className='font-avada1 px-auto space-y-6 flex flex-col items-center'>
        <p className='text-5xl'>Latest news & promotions</p>
        <p className='border-b-2 w-20 '></p>
      </div>

      <div className='grid grid-cols-3 mx-32 gap-x-4 mt-16'>
        <section className='text-center space-y-6'>
          <img className='w-[240px] h-[270px]' src={coffea} alt="" />
          <p className='font-avada2 text-3xl'>
            the best coffea in town
          </p>
          <p className='font-serif text-[13px] flex flex-col'>
            <span>By admin Published On January 7th, 2020</span>
            <span>Categories: News</span>
          </p>
        </section>
        <section className='text-center space-y-6'>
          <img className='w-[240px] h-[270px] object-cover' src={cooking} alt="" />
          <p className='font-avada2 text-3xl'>
            discover our new menu
          </p>
          <p className='font-serif text-[13px] flex flex-col'>
            <span>By admin Published On January 7th, 2020</span>
            <span>Categories: News</span>
          </p>
        </section>
        <section className='text-center space-y-6'>
          <img className='w-[240px] h-[270px]' src={payment} alt="" />
          <p className='font-avada2 text-3xl'>
            we now accept square!
          </p>
          <p className='font-serif text-[13px] flex flex-col'>
            <span>By admin Published On January 7th, 2020</span>
            <span>Categories: News</span>
          </p>
        </section>

      </div>

    </div>

    {/* 11 - EXPLORE TAKEOUT */}
    <div className='grid grid-cols-5'>
      <div className='col-span-3 bg-cover bg-center h-[900px]' style={{backgroundImage: `url(${mxw})`}}></div>
      <div className='col-span-2 bg-black'>
        <div className='bg-black text-white pt-52 pe-24 grid grid-cols-3'>
          <BsDashLg className='justify-self-end mr-6 -mt-2 w-10 h-10  ' />
          

          <article className='flex flex-col col-span-2'>
            <span className='font-medium mb-8 text-slate-300/90 uppercase tracking-wider leading-relaxed'>enjoy your meal at home</span>
            <span className=' font-avada2 text-6xl font-semibold uppercase leading-snug'>takeout </span>
            <span className=' font-avada2  text-6xl font-semibold uppercase leading-snug '>now</span>
            <span className=' font-avada2  text-6xl font-semibold uppercase leading-snug '>available</span>
            <span className='mt-10 leading-8 w-72 font-serif text-slate-300/90 text-xl'>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.</span>
            <Link className='flex items-center space-x-3 uppercase border font-workSans text-center tracking-wider py-2 px-6 mt-16 hover:bg-white hover:text-black transition ease-in-out duration-500'><FaCarRear className='w-3 h-4'/><span> view takeout menu </span></Link>
          </article>
        </div>
      </div>

    </div>

    {/* 12 - MENU */}
  
    <div className='grid grid-cols-3 mx-20 mt-28  h-[1000px]'>
      <div className='bg-[#E8E8E8]'></div>
      <div className='bg-cover bg-center relative -translate-y-14' style={{backgroundImage: `url(${foods})`}}>
          <div className='absolute h-full w-full bg-gradient-to-b from-black from-25% via-black/60 via-60% to-transparent'></div>

      </div>
      <div className='bg-[#E8E8E8] h-[970px]'></div>
    </div>
  

    {/* 13 - BUY AVADA */}
    <div className='bg-cover bg-center relative h-[800px] mt-24' style={{backgroundImage: `url(${chopstick})`}}>
      <div className='bg-black text-white absolute top-24 left-32 w-[430px] p-20'>           

            <article className='flex flex-col gap-y-4'>
              <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                  <span className=' font-avada2 text-6xl font-semibold uppercase leading-snug tracking-wider'>Braised</span>
                  <span className=' font-avada2  text-6xl font-semibold uppercase leading-snug tracking-wider '>abalone</span>
                </div>
                <p className='font-workSans text-slate-200/90 uppercase text-lg  leading-snug tracking-wider mt-4 ml-28'>$43 </p>
              </div>
              
              
              <p className='border-b-2 w-20 mt-8'></p>
              <span className='mt-4 leading-8 w-72 font-serif text-slate-200/90 text-xl'>Pretium accumsan porttitor viverra leo gravida mollis imperdiet. Fringilla nibh pharetra sociis leo amet.</span>
              <Link className='uppercase border font-workSans text-center tracking-wider py-3 mt-4 w-56 hover:bg-white hover:text-black transition ease-in-out duration-500'>buy avada today</Link>
            </article>
          </div>

    </div>
    </>

    
  )
}
