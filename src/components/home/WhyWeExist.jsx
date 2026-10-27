import { motion } from "framer-motion";
import { useAboutContent, useGalleryContent } from "../../api/hooks";
import SectionHeading from "../common/SectionHeading";

export default function WhyWeExist() {
  const { data: about, isError: aboutError } = useAboutContent();
  const { data: gallery, isLoading, isError: galleryError } = useGalleryContent();
  if (!about) {
    return (
      <section id="our-work" className="min-h-96 bg-white py-20" aria-busy={!aboutError} />
    );
  }
  const { why } = about;

  return (
    <section id="our-work" className="bg-white py-20 text-charcoal md:py-24">
      <div className="section-wrap max-w-5xl">
        <SectionHeading title={why.title} />
        <motion.p
          className="mx-auto max-w-5xl text-center leading-7 text-charcoal/85 md:text-lg md:leading-8 capitalize"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {why.paragraph}
        </motion.p>
        <motion.blockquote
          className="mx-auto my-9 max-w-4xl text-center font-heading text-2xl font-medium leading-snug text-charcoal md:my-12 md:text-3xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {why.quote}
        </motion.blockquote>
        <p className="mx-auto max-w-4xl text-center leading-7 text-charcoal/75 capitalize">
          {why.intro}
        </p>
      </div>
      <div id="gallery" className="section-wrap mt-12 scroll-mt-24 md:mt-16">
        <h3 className="sr-only">{gallery?.title ?? "Community gallery"}</h3>
        {galleryError ? (
          <p role="status" className="py-8 text-center text-charcoal/75">
            {gallery?.error ?? "Community photos are temporarily unavailable. Please refresh to try again."}
          </p>
        ) : (
          <div
            className="grid gap-5 md:grid-cols-3 md:gap-6"
            aria-label={gallery?.title ?? "Community gallery"}
            aria-busy={isLoading}
          >
            {isLoading
              ? Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={index}
                    className="h-64 animate-pulse rounded-xl bg-gray-200 md:h-72"
                    role="status"
                    aria-label={gallery?.loadingLabel ?? "Loading community photos"}
                  />
                ))
              : gallery?.photos.map((photo, index) => (
                  <motion.figure
                    key={photo.id}
                    className="group overflow-hidden rounded-xl bg-cream shadow-soft"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="h-64 overflow-hidden md:h-72">
                      <img
                        src={photo.image}
                        alt={photo.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-center text-sm font-bold text-charcoal/80 capitalize">
                      {photo.caption}
                    </figcaption>
                  </motion.figure>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}
