import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
};

export default function PreloadFade({
  children,
  delay = 0,
  x = 0,
  y = 0,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: x, y: y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: "easeInOut",
        // type: "spring",
        // stiffness: 200,
        // bounce: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
