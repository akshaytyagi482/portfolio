import Fifth from "@/components/Fifth";
import Footer from "@/components/Footer";
import Fourth from "@/components/Fourth";
import Preloader from "@/components/Preloader";
import Second from "@/components/Second";
import Third from "@/components/Third";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
    <Preloader />
  <main className="z-0 relative h-full min-h-screen w-full">
    <Hero />
    <Second />
    <Third />
    <Fourth/>
    <Fifth/>
    <Footer />
  </main>  
    </>
  );}
