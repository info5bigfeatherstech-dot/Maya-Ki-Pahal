import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
}) {
  return (
    <motion.div
      className={`mb-10 ${align === "left" ? "text-left" : "text-center"}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-extrabold uppercase tracking-[0.2em] ${
            light ? "text-saffron" : "text-terracotta"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-4xl font-medium leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}
