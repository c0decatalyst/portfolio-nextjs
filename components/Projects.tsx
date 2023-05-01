import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '@/typings'

type Props = {
  projects: Project[]
}

export default function Projects({ projects }: Props) {
  const isLink = (paragraph: string) => {
    let isLink = paragraph.match('http.*')
    return isLink
  }

  const getLink = (id: number, link: string, text: string) => {
    return (
      <a key={id} className='text-blue-500 font-semibold' target='_blank' href={link}>{text}</a>
    )
  }

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-20 ml-7 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Portfolio
      </h3> 
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects?.map((project, projKeyId) => (
          <div key={projKeyId} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center h-screen pt-[125px] pb-[90px] md:pb-[30px] xl:pb-[50px] mt-1 px-1 md:px-32'>
            <div className='space-y-5 px-10 overflow-auto flex flex-col items-center'>
              <Image
                  className='rounded-lg max-h-[200px] max-w-[200px] sm:max-h-[250px] sm:max-w-[250px]'
                  src={project?.logoUrl}
                  alt="Logo"
                  width={250}
                  height={250}
              />               
              {/* <motion.img
                  initial={{
                    y: -300,
                    opacity: 0
                  }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project?.logoUrl}
                  alt={project?.title}
                  className='rounded-lg h-1/2 object-center'
              /> */}
              <h4 className='text-3xl font-semibold text-center'>
                <span className='text-[20px] underline decoration-[#F7AB0A]/50'>
                  {projKeyId + 1} of {projects?.length}:
                </span>{" "}
                {project?.linkToBuild ? getLink(projKeyId, project.linkToBuild, project?.title): project?.title}
              </h4>
              
              <div className='flex items-center space-x-2 justify-center flex-wrap gap-y-3'>                
                {project?.technologies?.map((tech, techKeyId) => (
                  <Image
                    className='rounded-full h-10 w-fit md:h-10 md:w-fit'
                    src={tech?.logoUrl}
                    alt={tech?.title + " logo"}
                    key={techKeyId}
                    width={10}
                    height={10}
                  />
                ))}
              </div>

              <div className='text-lg text-center md:text-left space-y-5 overflow-auto overflow-x-hidden overscroll-auto pb-10'>
                {project?.summaryList?.map((paragraph, summaryKeyId) => (  
                  !isLink(paragraph) ? 
                  <p key={summaryKeyId}>{paragraph}</p>
                  :
                  getLink(summaryKeyId, paragraph.slice(0, paragraph.indexOf(',')), paragraph.slice(paragraph.indexOf(',')+1))
                ))}
              </div>
            </div>
          </div>
        ))}        
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />        
    </div>
  )
}