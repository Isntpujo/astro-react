import { motion } from "motion/react";

type Props = {
    text: string;
}

export default function Preloader({ text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="preloader-motion"
    >
      {text}
    </motion.div>
  );
}
