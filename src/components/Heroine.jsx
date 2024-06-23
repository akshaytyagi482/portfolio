"use client"
import Image from "next/image"
import {Typewriter , Cursor} from 'react-simple-typewriter'
const Heroine = () => {
  return (
    <div className="w-full min-h-3/4 flex max-md:flex-col max-md:px-5">
        <div className="left w-1/2 max-md:w-full max-md:pl-0 max-md:text-center pl-10 min-h-full flex justify-center items-center">
            <div className="mx-auto text-zinc-200 flex max-md:items-center flex-col gap-8 font-mono text-4xl">
            <p className="hero font-sans">Hello 🖐</p>
            <div className="flex flex-col gap-3">
            <p className="hero">My name is Akshay kumar Tyagi</p>
            <p className="hero">I <span><Typewriter words={["develop modern frontend UI","am a Frontend engineer","am a freelancer"]} loop={-1}/></span><span><Cursor/></span></p>
            </div>
            <div className="flex gap-5">
              <a className="hero" href="http://" target="_blank" rel="noopener noreferrer"><Image src={"/linkdin.png"} height={40} width={40} /></a>
              <a className="hero" href="http://" target="_blank" rel="noopener noreferrer"><Image className="rounded-full" src={"/github.png"} height={40} width={40} /></a>
            </div>
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:d43177e3-f475-4392-a259-3e3abf8b779c" target="blank" className="border-2 hero text-xl h-max w-max rounded-lg text-white hover:bg-white hover:text-black border-white p-3 px-5 text-center flex items-center justify-center bg-transparent">Resume</a>
            </div>
        </div>
        <div className="right max-md:w-full h-full relative w-1/2 max-md:px-0 px-8">
            <Image className="absolute animesan top-8 left-14" src={"/react.svg"} height={70} width={70} />
            <Image className="setting max-lg:hidden absolute top-52 left-10 z-0" src={"/settings.svg"} height={150} width={150} />
            <Image className="nabu mx-auto relative h-full w-full z-10" src={"/ok.svg"} height={100} width={100} />
            <Image className="absolute animesan2 top-12 right-28" src={"/download.png"} height={60} width={60} />
        </div>
    </div>
  )
}

export default Heroine