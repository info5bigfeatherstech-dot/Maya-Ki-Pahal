import { motion } from "framer-motion";
import { useAboutContent } from "../../api/hooks";

export default function MissionBanner() {
  const { data } = useAboutContent();
  if (!data) return <section className="min-h-[28rem] bg-charcoal" aria-busy="true" />;
  const { mission } = data;

  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-20 text-white md:py-28">
      <img
        src={mission.image}
        alt={mission.imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-[#183a32]/85" />
      <motion.div
        className="section-wrap max-w-4xl text-center"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-saffron">
          {mission.eyebrow}
        </p>
        <h2 className="font-heading text-3xl font-medium leading-tight">
          {mission.title}
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-7 text-white/85 md:text-lg">
          {mission.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
