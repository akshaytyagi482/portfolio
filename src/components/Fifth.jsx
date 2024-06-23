"use client"
import  {useTransform,useScroll} from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
const Fifth = () => {
    const targetref = useRef()
    const {scrollYProgress} = useScroll({
        tsrget: targetref
    })
    const x = useTransform(scrollYProgress, [0, 1], ["0%","-40%"])
    const xx = useTransform(scrollYProgress,[0,1],["-40%","0%"])
    return (
    <div ref={targetref} className="relative py-32 w-full">
        <div className="flex flex-col gap-10">
        <div className="w-full overflow-hidden">
        <motion.div style={{x}} className="containerL relative w-max gap-5 text-slate-700 font-bold flex flex-nowrap text-5xl">
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
        </motion.div>
        </div>
        <div className="w-full max-md:text-xl flex items-center font-semibold text-white justify-center text-5xl ">Wanna<span className="text-blue-500">&nbsp;collaborate&nbsp;</span>with me?</div>
        <div className="w-full overflow-hidden">
        <motion.div style={{x:xx}} className="containerL relative w-max gap-5 font-bold text-slate-700 flex flex-nowrap text-5xl">
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
            <p>User Friendly UI</p>
        </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Fifth