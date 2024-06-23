"use client"
import { preLoaderAnim } from '@/animations'
import React, { useEffect } from 'react'

const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
    <div className='h-screen w-full fixed flex justify-center items-center overflow-hidden z-50 bg-black top-0 left-0 preloader'>
          <div className="texts-container opacity-0 transition-all text-xl text-white">
            <span>Developer⚫
            </span>
            <span>Enthusiast⚫
            </span>
            <span>Believer</span>
          </div>
    </div>
  )
}

export default Preloader