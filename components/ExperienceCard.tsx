import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'

type Props = {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={experience?.logoUrl} 
        alt={experience?.company + " logo"}
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1">{experience?.company}</p>
            <div className="flex space-x-2 my-2">
                {experience?.technologies?.map((tech, i) => (
                    <Image
                        key={i}
                        className='rounded-full h-10 w-10'
                        src={tech.logoUrl}
                        alt={tech.title}
                        width={10}
                        height={10}
                    />
                ))}
            </div>
            <p className="uppercase py-5 text-gray-300">
                {experience?.dateStarted}{" - "}{experience?.dateEnded? experience?.dateEnded : "Present"}
            </p>
            <ul className="list=disc space-y-4 ml-5 text-lg overflow-y-scroll">
                {experience?.summaryList?.map((summary, i) => (
                    <li key={i}>{summary}</li>                    
                ))}            
            </ul>
        </div>
    </article>
  )
}