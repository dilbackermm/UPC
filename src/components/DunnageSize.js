import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import dunnagePic from '../../public/images/dunnageBag/dunnagepic1.png'
import Link from 'next/link'
import AnimatedText from './AnimatedText'
import SizeTabs from './SizeTabs'
import { PdfIcon } from './icons'




const DunnageSize = ({ className = "" }) => {
    return (
        <main className={` flex pt-3 bg-primarylight text-dark w-full min-h-screen 
    pb-0 mb-0 ${className} `} id='contactus ' >
            <Layout className='!pt-0 !pb-6 bg-transparent  mx-32 xl:mx-12 lg:mx-6 '>
                <AnimatedText text="Dunnage bag Sizes" className='pb-12 !text-6xl' />
                <div className="flex items-center lg:flex-col-reverse">
                    <div className="w-1/2 lg:w-full py-3">
                        <motion.p
                            initial={{ y: -200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 xl:leading-8 text-left'>With the right selection, you can rest assured that your goods
                            will reach their destination in perfect condition.Customised dunnage bags - selected based on the goods,
                            economies, weight, quantity, and mode of transportation.
                        </motion.p>
                        <motion.p
                            initial={{ y: -200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }}
                            viewport={{ once: true }}
                            className='py-6 lg:py-3 xs:py-1 text-dark text-xl lg:text-lg xs:text-base leading-9 text-left'>Dunnage bags are available in all shapes and sizes
                            customized to cushion every corner and edges.They are placed in the gaps between the cargo
                            whatever the mode of transportation to protect,
                            secure and stabilize the cargo.They can be used for any type of cargo right from
                            palletized, breakbulk cargo, barrels, to crates and
                            cartons.
                        </motion.p>
                    </div>
                    <div className="w-1/2 lg:w-full py-3">
                        <Image src={dunnagePic} alt='dunnage' className="ml-16 lg:m-auto" />
                        <p className="font-light text-dark/50 text-sm sm:text-xs font ml-16 lg:text-center self-center pt-2">
                            Images used are for representative purpose only.
                        </p>
                    </div>
                </div>
                <div className=''>

                    <div className='flex flex-col items-center'>
                        <h1 className='py-9 lg:py-3 sm:py-2 text-5xl 2xl:text-4xl xl:text-3xl  lg:text-2xl xs:text-xl text-primaryDark font-bold '>
                            Crown Dunnage Bags specification
                        </h1>
                        <SizeTabs />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/dunnageBrochure.pdf" target={"_blank"}
                        download={true}
                        whileHover={{ y: -5 }}
                        className=" flex items-center w-96 sm:w-60 justify-between bg-light  mt-16 rounded-lg shadow-lg border broder-solid border-primaryDark hover:shadow-xl ">
                        <h6 className="px-12 py-6 md:p-6 sm:p-3 text-primaryDark  text-3xl md:text-2xl sm:text-xl font-semibold">Download Brochure</h6>
                        <span className='p-8'>
                            <PdfIcon className={"ml-1 mr-6"} />
                        </span>
                    </Link>
                </div>

            </Layout>
        </main>
    )
}

export default DunnageSize

{}