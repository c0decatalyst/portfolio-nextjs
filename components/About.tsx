import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 0.3
            }}
            whileInView={{ 
                opacity: 1, 
                x: 0 
            }}
            viewport={{ once: true }}
            src={pageInfo.profilePicUrl}
            className="mt-10 md:mt-10 lg:mt-10 -mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[350px]"
        />

        <div className="space-y-5 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                My {" "}
                <span className="underline decoration-[#F7AB0A]/50">mission</span>{" "}
            </h4>
            <p className="text-base">{pageInfo.bgInfo}</p>
        </div>
    </motion.div>
  )
}