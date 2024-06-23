"use client"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Fourth = () => {
  useGSAP(()=>{
    gsap.from('.headin',{
        x:-100,
        opacity:0,
        stagger:0.5,
        scrollTrigger:{
          trigger:".upe",
          start:"top 50%",
          end:"bottom 50%",
        }
    })},[])
  return (
    <div className="relative upe min-h-full max-md:text-center flex gap-8 flex-col p-16 w-full">
      <Image className="absolute left-0 max-md:top-11 top-96 z-0" src={"/bg/pattern-l.svg"} height={150} width={150} />
      <Image className="absolute right-0 top-64 z-0" src={"/bg/pattern-r.svg"} height={300} width={300} />
        <div className="flex gap-4 flex-col">
        <div className="flex  flex-col">
          <p className="headin text-white">Skills</p>
          <p className="headin text-4xl text-blue-700 font-bold">My Skills</p>
        </div>
          <p className="text-2xl headin max-md:text-lg text-white">Unlocking potential through innovative technology and strategic problem-solving. With a diverse skill set spanning front-end development, responsive design, and dynamic animations, I bring creativity and technical prowess to every project. Explore the tools and technologies I use to transform ideas into impactful digital experiences.</p>
        </div>
        <div className="wrapper relative">
  <div className="itemLeft item1"><Image src={'/skills/gsap.svg'} height={90} width={90} /></div>
  <div className="itemLeft item2"><Image src={'/skills/css.svg'} height={90} width={90} /></div>
  <div className="itemLeft item3"><Image src={'/skills/html.svg'} height={90} width={90} /></div>
  <div className="itemLeft item4"><Image src={'/skills/javascript.svg'} height={90} width={90} /></div>
  <div className="itemLeft item5"><Image src={'/skills/next.svg'} height={90} width={90} /></div>
  <div className="itemLeft item6"><Image src={'/skills/node.svg'} height={90} width={90} /></div>
  <div className="itemLeft item7"><Image src={'/skills/react.svg'} height={90} width={90} /></div>
  <div className="itemLeft item8"><Image src={'/skills/tailwind.svg'} height={90} width={90} /></div>
</div>
    </div>
  )
}

export default Fourth