"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";   
gsap.registerPlugin(ScrollTrigger);
const Second = () => {
    const lineRef = useRef()
    useEffect(()=>{
        gsap.to(lineRef.current.children, 
            {
              color:'white',
              stagger: 1,
              scrollTrigger: {
                trigger: lineRef.current,
                start: 'top 50%',
                end: 'bottom center',
                scrub: true,
            }
            });
    },[])
  return (
    <div className="w-full h-max px-16 relative">
          <p ref={lineRef} className="text-5xl max-md:text-2xl max-md:text-center font-extrabold leading-relaxed tracking-wide">
            <span>I am a Proficient Frontend engineer keen to learn </span>
           <span>more in my field as i am a quick learner and i take responsibility </span>
           <span>of making best production level sites for my clients.</span>
          </p>
    </div>
  )
}

export default Second