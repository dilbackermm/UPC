import React from 'react'
import barrierliner2 from '../../public/images/barrierliners/barrierliner2.jpg'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'
import Image from 'next/image'

import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import BarrierContent from '@/components/BarrierContent'




{/* bg-gradient-to-r from-[#F3E8D6] to-[#DBC4AC] */ }


const barrierliners = () => {
  return (
    <>
      <Head>
        <title>UPC | Barrier Liners</title>
        <meta name="description" content="Generated by create next app" />

      </Head>

      <Image src={barrierliner2} alt="barrier liner image"
        className='  -z-10 absolute w-full min-h-screen mb-0 object-cover'
      />

      <main className="  flex flex-col  text-dark w-full min-h-screen 
   bg-gradient-to-r bg-top from-[#F0E7D5] to-[#904C06]/80  pb-0 mb-0 lg:items-start ">
        <Navbar className='bg-transparent' />
        <Layout className=' pt-0 pb-0 items-center bg-transparent '>
          <div className='flex flex-col lg:items-center text-dark'>
            <div className='w-3/5 xl:w-full lg:w-full'>
              <AnimatedText text="crown Barrier liners"
                className='   pt-36 2xl:pt-6 xl:pt-3 lg:pt-16 sm:pt-6 text-dark !text-8xl !text-left xl:!text-7xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-5xl ' />
              <p className='pt-12 pr-24 sm:pr-0 text-2xl 2xl:text-xl md:text-lg sm:text-base  '>
                Barrier liners are specifically used for the protection of goods. Therefore it is
                important that the right choice of barrier liners be made to protect products that
                are easily affected by moisture or corrosion.</p>
            </div>
          </div>
        </Layout>
      </main>
      <BarrierContent />

    </>
  )
}

export default barrierliners