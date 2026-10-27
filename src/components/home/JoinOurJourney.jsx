import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useAboutContent } from "../../api/hooks";
import { useUIStore } from "../../store/useUIStore";
import Button from "../common/Button";

export default function JoinOurJourney() {
  const { data } = useAboutContent();
  const setDonateModalOpen = useUIStore((state) => state.setDonateModalOpen);

  if (!data) {
    return (
      <section className="bg-cream py-16 md:py-20" aria-busy="true">
        <div className="section-wrap min-h-96 rounded-2xl bg-white" />
      </section>
    );
  }
  const { journey } = data;

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="section-wrap overflow-hidden rounded-2xl bg-white shadow-soft md:grid md:min-h-[34rem] md:grid-cols-2">
        <motion.div
          className="relative min-h-[22rem] overflow-hidden md:min-h-full"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
        >
          <img
            src={journey.image}
            alt={journey.imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          <span className="absolute bottom-6 left-6 rounded-full bg-white/95 px-5 py-3 text-sm font-bold text-teal shadow-soft">
            {journey.imageBadge}
          </span>
        </motion.div>

        <motion.div
          className="flex items-center px-6 py-14 sm:px-10 md:px-12 md:py-20 lg:px-20"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
        >
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-terracotta">
              {journey.eyebrow}
            </p>
            <div className="flex items-center gap-3">
              <h2 className="font-heading text-4xl font-medium text-charcoal">
                {journey.title}
              </h2>
            </div>
            <div className="mt-6 space-y-4 leading-7 text-charcoal/80 capitalize">
              {journey.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => setDonateModalOpen(true)}>
                {journey.action}
              </Button>
              <Button href={journey.contactHref} variant="outline">
                {journey.contactAction}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
