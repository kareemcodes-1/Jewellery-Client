import { motion } from "motion/react";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
};

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 0,
  className = "",
  animateBy = "letters",
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <p className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
          animate={{
            opacity: [0, 1, 1, 0], // fade in, stay, fade out
            filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"],
            y: [-30, 0, 0, -30],
          }}
          transition={{
            duration: 4, // total cycle = 4s
            times: [0, 0.25, 0.75, 1], // in, wait, out, wait
            repeat: Infinity,
            ease: "easeInOut",
            delay: (index * (delay ?? 0)) / 1000,
          }}
          style={{
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
