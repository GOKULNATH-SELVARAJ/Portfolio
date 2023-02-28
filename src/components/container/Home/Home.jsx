import React from 'react'
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>GOKULNATH S</span> </h3>
        <span className='job'>Front-end Developer</span>
        <span className='text'>Passionate<br /> to craft innovative <br />  web products.</span>
        <div
          className="web"

        >
          Web Developer
        </div>
        <div
          className="ui"
        >
          UI/UX Designer
        </div>
      </div>
    </motion.div>
  )
}

export default Home