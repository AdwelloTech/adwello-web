import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative bg-[#121212] h-screen'>
        
        <div className='absolute bottom-0 left-0 w-full pointer-events-none z-0'>
            <Image src="/hero/bg-wave-hero.png" alt="Hero Image" width={1000} height={1000} className='w-full h-full object-cover' />
        </div>
            
    </section>
  )
}

export default Hero