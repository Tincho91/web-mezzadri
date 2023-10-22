import { motion } from 'framer-motion';

export const AnimatedIcon = ({ IconComponent }) => {
  const transitionValues = {
    duration: 1,
    repeat: Infinity,
    repeatType: 'mirror',
  };

  return (
    <motion.div
      transition={transitionValues}
      animate={{
        y: ['-6px', '6px']
      }}
    >
      <IconComponent />
    </motion.div>
  );
};
