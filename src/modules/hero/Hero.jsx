import { HeroImg } from "../../assets/images"
function Hero() {
  return (
    <section className='bg-[#F2AE4D] h-screen pt-16 flex justify-between items-center'>
       <div className='pl-32 flex flex-col gap-4 items-start'>
        <h2 className='text-[#011F3A] text-5xl w-[480px] leading-tight'>Fast and easy custom boxes your customers will love</h2>
        <p className='text-[#011F3A] text-[15px]  w-[280px] mt-4'>Fastest turnaround. Best prices instantly. Dieline design help available.</p>
        <button className='bg-[#3D5675] text-white py-5 px-7 rounded-full font-bold tracking-[1.96px] uppercase cursor-pointer'>Start your design</button>
       </div>
         <img src={HeroImg} alt="hero__img" width={504} height={504}/>
    </section>
  )
}

export default Hero