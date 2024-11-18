import image1 from "/profile.png";
import { motion } from "framer-motion";


const Data = [
  {
    image:image1,
    title: "Chowie",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam, asperiores libero tempora laudantium magni corporis incidunt unde expedita. Doloremque?",
    stack: ['Remix', 'Typescript', 'Sanity', 'Stripe']
  },
  {
    image:image1,
    title: "Chowie",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam, asperiores libero tempora laudantium magni corporis incidunt unde expedita. Doloremque?",
    stack: ['Remix', 'Typescript', 'Sanity', 'Stripe']
  },
  {
    image:image1,
    title: "Chowie",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam, asperiores libero tempora laudantium magni corporis incidunt unde expedita. Doloremque?",
    stack: ['Remix', 'Typescript', 'Sanity', 'Stripe']
  },
  {
    image:image1,
    title: "Chowie",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aperiam, asperiores libero tempora laudantium magni corporis incidunt unde expedita. Doloremque?",
    stack: ['Remix', 'Typescript', 'Sanity', 'Stripe']
  },
];


const ProjectCard = () => {
  return (
    <div className=""></div>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white"></div>
    </div>
    
  )
}

export default Projects