import Image from "next/image"

const Footer = () => {
  return (
    <div className="footer w-full min-h-full relative bg-slate-950">    
    <img className="max-w-full" src='/bg/footer-curve.svg' alt="" />
    <div className="w-full px-5">
    <div className="mx-auto gap-10 flex flex-col items-center max-w-lg min-h-80 text-center">
      <div className="font-semibold max-sm:text-xl text-white text-3xl">Connect with me on social media</div>
      <div className="flex gap-5">
              <a  href="https://www.linkedin.com/in/akshay-kumar-bb0bbb184/" target="_blank" rel="noopener noreferrer"><Image src={"/linkdin.png"} height={40} width={40} /></a>
              <a  href="https://github.com/akshaytyagi482" target="_blank" rel="noopener noreferrer"><Image className="rounded-full" src={"/github.png"} height={40} width={40} /></a>
          </div>
          <a href="https://docs.google.com/document/d/1kBqkQNclrHDQuCGwhVuRwF_2EPwZaj8n/edit?usp=sharing&ouid=110130709863583991650&rtpof=true&sd=true" target="blank" className="border-2 hero text-xl h-max w-max rounded-lg text-white hover:bg-white hover:text-black border-white p-3 px-5 text-center flex items-center justify-center bg-transparent">Resume</a>
          <div className="font-semibold">Designed and developed by Akshay kumar tyagi ♥</div>
    </div>
    </div>
    </div>
  )
}

export default Footer