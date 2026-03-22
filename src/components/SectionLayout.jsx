import React from 'react';
import { motion } from 'framer-motion';

export default function SectionLayout({ children, delay = 0, className = "" }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`section ${className}`}
    >
      {children}
    </motion.section>
  );
}
