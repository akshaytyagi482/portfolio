import Image from "next/image"

const Footer = () => {
  return (
    <div className="footer w-full min-h-full relative bg-slate-950">    
    <img className="max-w-full" src='/bg/footer-curve.svg' alt="" />
    <div className="w-full px-5">
    <div className="mx-auto gap-10 flex flex-col items-center max-w-lg min-h-80 text-center">
      <div className="font-semibold max-sm:text-xl text-white text-3xl">Connect with me on social media</div>
      <div className="flex gap-5">
              <a  href="http://" target="_blank" rel="noopener noreferrer"><Image src={"/linkdin.png"} height={40} width={40} /></a>
              <a  href="http://" target="_blank" rel="noopener noreferrer"><Image className="rounded-full" src={"/github.png"} height={40} width={40} /></a>
          </div>
          <button className=" border-2 rounded-lg text-white text-xl hover:bg-white hover:text-black border-white px-5 py-3 text-center flex items-center justify-center w-max bg-transparent">Resume</button>
          <div className="font-semibold">Designed and developed by Akshay kumar tyagi ♥</div>
    </div>
    </div>
    </div>
  )
}

export default Footer