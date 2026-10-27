import { motion } from "framer-motion";
import { BookOpen, Heart, Leaf, PawPrint, ArrowUpRight } from "lucide-react";
import { useFocusAreas } from "../../api/hooks";
import SectionHeading from "../common/SectionHeading";

const icons = { book: BookOpen, heart: Heart, paw: PawPrint, leaf: Leaf };

export default function FocusAreas() {
  const { data, isLoading, isError } = useFocusAreas();
  const areas = data?.areas;

  return (
    <section id="focus-areas" className="bg-[#fffdf9] py-20 md:py-28">
      <div className="section-wrap">
        <SectionHeading eyebrow={data?.eyebrow} title={data?.title ?? ""} />
        {isError ? (
          <p className="py-12 text-center text-charcoal">
            {data?.error ?? "Our focus areas are temporarily unavailable. Please refresh to try again."}
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading
              ? Array.from({ length: 4 }, (_, index) => (
                  <div
                    className="overflow-hidden rounded-2xl bg-cream shadow-soft"
                    key={index}
                    aria-label={data?.loadingLabel ?? "Loading focus area"}
                    aria-busy="true"
                  >
                    <div className="h-56 animate-pulse bg-[#eadfce]" />
                    <div className="space-y-3 p-6">
                      <div className="h-5 w-2/3 animate-pulse rounded bg-[#eadfce]" />
                      <div className="h-4 animate-pulse rounded bg-[#eadfce]" />
                      <div className="h-4 w-1/2 animate-pulse rounded bg-[#eadfce]" />
                    </div>
                  </div>
                ))
              : areas?.map((area, index) => {
                  const Icon = icons[area.icon];
                  return (
                    <motion.article
                      key={area.title}
                      className="group overflow-hidden rounded-2xl bg-cream shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={area.image}
                          alt={area.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 to-transparent" />
                        {Icon && (
                          <span className="absolute bottom-4 left-5 grid h-12 w-12 place-items-center rounded-full bg-saffron text-teal">
                            <Icon size={23} aria-hidden="true" />
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-2xl font-medium text-charcoal">
                          {area.title}
                        </h3>
                        <p className="mt-3 min-h-[3.5rem] leading-6 text-charcoal/75 capitalize">
                          {area.description}
                        </p>
                        <a
                          href={area.href}
                          className="mt-5 inline-flex items-center gap-2 font-extrabold text-teal transition hover:text-terracotta"
                        >
                          {data.learnMoreLabel} <ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                      </div>
                    </motion.article>
                  );
                })}
          </div>
        )}
      </div>
    </section>
  );
}
