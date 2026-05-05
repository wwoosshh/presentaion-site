import type { Variants, Transition } from 'framer-motion'
import { easings, durations, stagger } from './tokens'

export const cinematicTransition: Transition = {
  duration: durations.reveal,
  ease: easings.cinematic,
}

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: cinematicTransition,
  },
}

export const revealStagger = (children: number = stagger.default): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: children, delayChildren: 0.1 },
  },
})

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: cinematicTransition },
}

export const slideTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: durations.transition, ease: 'easeOut' } },
}

export const hoverSpring: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
}

export const splitChar: Variants = {
  hidden: { opacity: 0, y: '0.5em', filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: easings.cinematic },
  },
}

export const breathe = {
  scale: [1, 1.015, 1],
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
}
