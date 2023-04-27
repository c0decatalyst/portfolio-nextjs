import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '@/typings'

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Tech-Entrepeneur.tsx",
            "<SparkMyCuriosity />",
            "function() { enableChatGpt = false; }",
            "Build-Creative-Solutions.js"
        ],
        loop: true,
        delaySpeed: 2000
    });
    
    return (
        <div className="h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden snap-center snap-mandatory">
            <BackgroundCircles />
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={pageInfo.thumbPicUrl}
                alt="Picture of the author"
                width={300}
                height={300}
            />
            <div className="z-20">                
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo.roleHeader}
                </h2>
                <h1 className='text-4x1 lg:text-5xl font-semibold px-10'>
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div>
                    <Link href="#about">
                        <button className="heroCard">About</button>                    
                    </Link>
                    <Link href="#experience">
                        <button className="heroCard">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroCard">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroCard">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero