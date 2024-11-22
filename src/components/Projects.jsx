import image1 from "/chowie.png";
import image2 from "/corgy.png";
import image3 from "/Madera.png";
import { motion } from "framer-motion";


const Data = [
  {
    image:image1,
    title: "Chowie",
    description:"A full stack web application that allows users to order and track their.food from a variety of dishes",
    stack: ['Remix', 'Typescript', 'Sanity', 'Stripe'],
    link:"https://chowie.vercel.app"
  },
  {
    image:image2,
    title: "Corgy",
    description:" An ecommerce web application that allows users to shop for various clothing items",
    stack: ['Angular', 'Typescript'],
    link:"https://corgy-iota.vercel.app"
  },
  {
    image:image3,
    title: "Madera",
    description:"A frontend web application that was built for a client who owns a furniture company",
    stack: ['Angular', 'Typescript'],
    link:"https://madera-self.vercel.app/"
  },
  
];

const ScrollReveal = ({children}) => {
  return (
    <motion.div
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8}}
    >{children}</motion.div>
  )
}


const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
          
        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.stack.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))
          }
        </div>
        <a href={project.link}>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Live Demo
        </button>
        </a>
        
      </div>
    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">

      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          Data.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
    
  )
}

export default Projects