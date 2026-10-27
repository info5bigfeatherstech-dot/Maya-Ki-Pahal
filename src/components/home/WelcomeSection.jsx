import { motion } from "framer-motion";
import { useAboutContent } from "../../api/hooks";
import SectionHeading from "../common/SectionHeading";

export default function WelcomeSection() {
  const { data, isError } = useAboutContent();
  if (isError) return <SectionError />;
  if (!data) return <section id="about" className="section-wrap min-h-96 py-24" />;
  const { welcome } = data;

  return (
    <section id="about" className="overflow-hidden bg-cream py-20 md:py-28">
      <div className="section-wrap grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[2rem] border-l-4 border-t-4 border-saffron" />
          <img
            src={welcome.image}
            alt={welcome.imageAlt}
            className="relative h-[360px] w-full rounded-2xl object-cover shadow-soft md:h-[500px]"
            loading="lazy"
          />
          <div className="absolute -bottom-5 right-4 rounded-2xl bg-saffron px-5 py-4 font-extrabold text-teal shadow-soft md:right-[-1.25rem]">
            {welcome.sinceBadge}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={welcome.title} align="left" />
          <blockquote className="rounded-r-2xl border-l-4 border-saffron bg-white px-5 py-4 font-heading text-xl italic leading-relaxed text-teal shadow-sm md:text-2xl">
            {welcome.quote}
          </blockquote>
          <p className="mt-6 font-extrabold text-terracotta">{welcome.highlight}</p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-charcoal/80 capitalize">
            {welcome.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionError() {
  const { data } = useAboutContent();
  return (
    <section id="about" className="section-wrap py-20 text-center text-charcoal">
      {data?.errors.title}
    </section>
  );
}
