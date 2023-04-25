'use client'

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';
import { Social } from '@/typings'
import { useState, useEffect } from 'react';

type Props = {
  socials: Social[]
};

function Header({ socials }: Props) {
  const [hasMounted, setHasMounted] = useState(false);
    // Hooks
    useEffect(() => {
      setHasMounted(true);
    }, [])

  // Render
  if (!hasMounted) return null;

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center"
      >
        {/* {socials?.map((social, i) => (
          <SocialIcon 
              key={i}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
          />          
        ))} */}
      </motion.div>
      <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}      
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
            className="cursor-pointer"
            network="email"
            url="#contact"
            fgColor="gray"
            bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p> 
      </motion.div>
    </header>
  );
}

export default Header;
