import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "power3.out",
    })
    .from(".texts-container span", {
      duration: 0,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease:"power3.out",
    })
    .to(".texts-container span", {
      duration: 0,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "power2.out",
      onComplete: () => { heroanime()}
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "power2.out",
      },
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

const heroanime = () =>{
    gsap.from('.hero',{
          x:-100,
          opacity:0,
          duration:1,
          ease:"power2.inOut",
          stagger:0.5,
        })
        gsap.from('.setting',{
          y:-100,
          opacity:0,
          duration:1.5,
          ease:"power2.inOut",
        })
        gsap.from('.animesan',{
          y:50,
          opacity:0,
          duration:1,
          ease:"power2.inOut",
        })
        gsap.from('.animesan2',{
          y:50,
          opacity:0,
          duration:1,
          ease:"power2.inOut",
        })
        gsap.from('.nabu',{
          scale:0,
          opacity:0,
          duration:0.5,
          ease:"power2.inOut",
        })
}
