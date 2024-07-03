"use client"
import React, { useEffect, useRef,useState } from 'react'
import { useTransform,useScroll,motion} from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
const Third = () => {
  const [isMobile,setMobile] = useState(false)
  useGSAP(()=>{
    const mm = gsap.matchMedia()
    mm.add("(min-width: 684px)",()=>{

      gsap.from('.heading',{
        x:-100,
        opacity:0,
        stagger:0.5,
        scrollTrigger:{
          trigger:tagetref.current,
          start:"top 50%",
          end:"bottom 50%",
        }
    })
    gsap.from('.chu',{
      y:50,
      opacity:0,
      scrollTrigger:{
        trigger:tagetref.current,
        start:"top 50%",
        end:"bottom 50%",
      }})
      setMobile(false)
    })
    mm.add("(max-width: 683px)",()=>{
      setMobile(true)
    })
  },[])
  
  const cards = [
    {
      name: 'Sundown studio',
      projectlink: "https://akshaytyagi482.github.io/Sundown-studio-clone/",
      description:"Developed an interactive dynamic website with brilliant animations and transitions. With many interactive options using dom manipulation too.",
      imageUrl:"/sundown.png"
    },
    {
      name: 'CREATIVE JOURNEY CLONE',
      projectlink: "https://gsaptuto-ymbb.vercel.app",
      description:"main objective of this project was to grasp the concepts of gsap and other libraries and frameworks",
      imageUrl:"/cj.png"
    },
    {
      name: 'FAKE LINKDIN POST GENERATOR',
      projectlink: "https://fakelinkdin-2hzr1ckyc-akshaytyagi482s-projects.vercel.app/",
      description:"a website where user can make a fake linkdin message for memes or giving demonstration for any objective",
      imageUrl: "/fake.png"
    },
    {
      name: 'CV BUILDER APP',
      projectlink: "https://6612caa6ae6860dbc9bf3c0f--lustrous-puffpuff-37b67d.netlify.app/",
      description:"it helps user to create CV in pdf by just entering there info to the panel",
      imageUrl: 'cv.png'
    }
  ]
  const tagetref = useRef()
  const {scrollYProgress} = useScroll({
      target:tagetref
  })
  let x = useTransform(scrollYProgress,[0,1],["1%","-70%"])
  useEffect(()=>{
    if(window.innerWidth > 784){
      x = null
    }
  },[])
  return (
    <div ref={tagetref} className="up relative w-full h-[300vh]">
      <div className='sticky w-full top-0 flex flex-col gap-2 px-16 py-10 max-md:py-5 max-md:px-5'>
        <div className=" flex flex-col">
          <p className="heading overflow-hidden text-white">Projects</p>
          <p className="heading overflow-hidden  text-lime-400 text-4xl font-semibold">My Projects</p>
        </div>
        <p className="heading text-3xl text-white">Explore my diverse range of projects, showcasing innovation, creativity, and technical expertise in solving real-world challenges</p>
        <div className='py-5 w-full items-center md:overflow-x-hidden'>
          <motion.div style={{  x: isMobile ? 0 : x  }} className={`chu flex gap-4 ${isMobile ? 'flex-col w-full' : 'flex-nowrap w-max'}`}>
            {cards.map((card, index) => (
               <div key={index} className="card rondu transition-all max-md:mx-auto relative max-w-96 w-full flex flex-col min-h-80 hover:scale-105 rounded-lg bg-white overflow-hidden">
                <div className="relative w-full p-4 flex items-end text-4xl h-1/3">
                  {/* Background Image with Blur */}
                  <div className="absolute w-full inset-0 bg-cover bg-center filter blur-[5px]" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
                  {/* Dark Overlay */}
                  <div className="absolute w-full inset-0 bg-black opacity-50"></div>
                  {/* Text Container */}
                  <div className="relative w-max max-md:text-xl text-white text-2xl font-bold">
                    {card.name}
                  </div>
                </div>
                <div className='w-full text-white p-4 flex h-full flex-col justify-between text-xl'>
                  <div className='w-full'>{card.description}</div>
                  <a className='butt px-5 py-2 opacity-0 font-bold text-xl tracking-wider w-max border-2 border-blue-800 rounded-3xl hover:bg-blue-800 hover:text-white' href={card.projectlink}>Link</a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Third
