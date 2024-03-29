import styles from './Logo.module.scss';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const Logo = (): JSX.Element => (
  <motion.svg
    id='bje'
    animate='enter'
    className={styles._}
    exit='exit'
    initial='hidden'
    role='img'
    transition={{ ease: 'anticipate', duration: 2 }}
    variants={variants}
    viewBox='0 0 400 400'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill='#567ebc'
      d='M54.56 206.49c0-3.84 2.26-6.1 6.1-6.1H83q6.1 0 6.1 6.1v45.4a51.33 51.33 0 0128.9-8.59c29.59 0 54.88 23.49 54.88 58.72 0 35.69-26.42 58.72-54.88 58.72-16.49 0-26.88-6.1-34.78-12.87l-10.67 6.37a199.38 199.38 0 0077.67 39.6 5 5 0 01-.14-1c0-1.13.45-2.49 1.81-4.74l7.68-11.52c1.35-2 3.16-3.16 5-3.16a9.46 9.46 0 013.39.9 29.79 29.79 0 009.71 1.81c6.55 0 11.07-5.19 11.07-13.1V269.5l-8.13-13.78c-1.35-2-2.48-4.07-2.48-5.87 0-2.48 2-4.29 5.87-4.29h33.88a5.69 5.69 0 016.1 6.1v114.51c0 17.42-7.2 27.93-16.66 33.74a199 199 0 00116.11-42.51 85.49 85.49 0 01-24.25 3.35c-39.3 0-60.3-24.62-60.3-58.72 0-31.84 19.2-58.72 57.82-58.72 37 0 57.6 27.33 57.6 58.72v6.32c0 3.84-2.94 6.1-6.78 6.1h-74.76c.9 10.84 11.29 20.1 28.46 20.1a45.39 45.39 0 0024.17-6.78c3.38-2 6.32-1.81 8.58 1.35l8.67 11.11A199.32 199.32 0 00400 200.09c0-110.46-89.54-200-200-200S0 89.64 0 200.09A199.25 199.25 0 0054.56 337.3V206.49zm134.18 0c0-3.84 2.26-6.1 6.1-6.1h23c3.84 0 6.1 2.26 6.1 6.1v19.2c0 3.84-2.26 6.1-6.1 6.1h-23c-3.84 0-6.1-2.26-6.1-6.1v-19.2zm-77.49 125.12c-9 0-16.72-5.19-22.13-11.52V281.7c6.32-6.1 14.88-9.7 22.13-9.7 14.68 0 26.42 10.62 26.42 30 0 19-11.97 29.61-26.42 29.61zm209.17-40h-47.66c.23-9.26 7.9-21.46 23.94-21.46 16.3.03 23.49 12.23 23.72 21.49z'
      transform='translate(0 -.09)'
    />
  </motion.svg>
);
