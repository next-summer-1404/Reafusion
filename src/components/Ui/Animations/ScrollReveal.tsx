'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  once?: boolean; 
}

export default function ScrollReveal({
  children,
  className = '',
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      viewport={{ once, margin: '-200px' }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}