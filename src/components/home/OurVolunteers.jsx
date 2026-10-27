import { motion } from "framer-motion";
import { useVolunteers } from "../../api/hooks";
import SectionHeading from "../common/SectionHeading";

export default function OurVolunteers() {
  const { data, isLoading, isError } = useVolunteers();

  return (
    <section id="volunteers" className="scroll-mt-24 bg-cream py-20 md:py-24">
      <div className="section-wrap">
        <SectionHeading
          eyebrow={data?.eyebrow}
          title={data?.title ?? "Our Volunteers"}
        />
        {data?.description && (
          <p className="mx-auto -mt-5 mb-10 max-w-2xl text-center leading-7 text-charcoal/75 capitalize">
            {data.description}
          </p>
        )}

        {isError ? (
          <p role="status" className="py-8 text-center text-charcoal/75">
            {data?.error ?? "Volunteer photos are temporarily unavailable. Please refresh to try again."}
          </p>
        ) : (
          <div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            aria-busy={isLoading}
          >
            {isLoading
              ? Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className="aspect-[4/5] animate-pulse rounded-2xl bg-gray-200"
                    role="status"
                    aria-label={data?.loadingLabel ?? "Loading volunteer photos"}
                  />
                ))
              : data?.volunteers.map((volunteer, index) => (
                  <motion.figure
                    key={volunteer.id}
                    className="group overflow-hidden rounded-2xl bg-white text-center shadow-soft"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={volunteer.image}
                        alt={volunteer.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="px-4 py-4 font-heading text-xl font-medium text-charcoal">
                      {volunteer.name}
                    </figcaption>
                  </motion.figure>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}
