import Image from "next/image"

const Navbar = () => {
  return (
    <div className="w-full h-28 flex p-5 pr-24 max-sm:px-10  justify-between">
        <div className="relative w-40 h-full">
        <Image className="filter invert" src={"/akshay.svg"} layout="fill" />
        </div>
        <a href="https://docs.google.com/document/d/1kBqkQNclrHDQuCGwhVuRwF_2EPwZaj8n/edit?usp=sharing&ouid=110130709863583991650&rtpof=true&sd=true" target="blank" className="border-2 h-max w-max rounded-lg text-white hover:bg-white hover:text-black border-white p-3 px-5 text-center flex items-center justify-center bg-transparent">Resume</a>
    </div>
  )
}

export default Navbar