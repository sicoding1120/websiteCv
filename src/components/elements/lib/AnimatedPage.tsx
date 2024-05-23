import React from 'react'
import { motion } from "framer-motion"

const Animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: {opacity: 0, x: -100}
}

const AnimatedPage = ({ children, animation }: { children: React.ReactNode;  animation: any}) => {
  return (
      <motion.div variants={animation  === null ? Animation : animation } initial="initial" animate="animate" exit="exit" transition={{duration: 1}}>
          {children}
    </motion.div>
  )
}

export default AnimatedPage