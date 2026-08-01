import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Masked line-by-line reveal. Pass an array of lines.
export const RevealLines = ({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.12,
  as = "div",
  testId,
}) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag data-testid={testId} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-mask">
          <motion.span
            style={{ display: "block", willChange: "transform" }}
            className={lineClassName}
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1.1,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

// On-load masked reveal (does not wait for scroll)
export const RevealLinesOnLoad = ({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.14,
}) => (
  <div className={className}>
    {lines.map((line, i) => (
      <span key={i} className="reveal-mask">
        <motion.span
          style={{ display: "block", willChange: "transform" }}
          className={lineClassName}
          initial={{ y: "115%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.2, ease: EASE, delay: delay + i * stagger }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </div>
);

export const FadeUp = ({ children, delay = 0, className = "", y = 40 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-8%" }}
    transition={{ duration: 0.9, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

export { EASE };
