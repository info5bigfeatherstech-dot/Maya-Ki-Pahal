import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { usePageContent } from "../api/hooks";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";

const pageIcons = {
  email: Mail,
  phone: Phone,
  address: MapPin,
};

export default function InfoPage() {
  const { pathname } = useLocation();
  const slug = pathname.slice(1);
  const { data: page, isLoading, isError } = usePageContent(slug);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-cream pt-28" aria-busy="true">
        <div className="section-wrap space-y-8 py-16">
          <div className="h-72 animate-pulse rounded-3xl bg-gray-200 md:h-96" />
          <div className="mx-auto h-8 max-w-sm animate-pulse rounded bg-gray-200" />
          <div className="mx-auto h-24 max-w-3xl animate-pulse rounded bg-gray-200" />
        </div>
      </main>
    );
  }

  if (isError || !page) {
    return (
      <main className="section-wrap min-h-screen py-40 text-center">
        <h1 className="font-heading text-3xl font-medium text-charcoal">
          This page is temporarily unavailable.
        </h1>
      </main>
    );
  }

  return (
    <main>
      <section className="relative isolate flex min-h-[65vh] items-center overflow-hidden bg-teal pt-28 text-white md:min-h-[70vh]">
        <img
          src={page.image}
          alt={page.imageAlt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#201538]/85 via-[#201538]/60 to-[#201538]/20" />
        <div className="section-wrap py-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-saffron">
              {page.eyebrow}
            </p>
            <h1 className="font-heading text-3xl font-medium leading-tight">
              {page.title}
            </h1>
            <p className="mt-5 max-w-2xl leading-7 text-white/90 md:text-lg capitalize">
              {page.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="section-wrap">
          <SectionHeading title={page.sectionTitle} />
          <p className="mx-auto -mt-5 max-w-3xl text-center leading-7 text-charcoal/75 md:text-lg capitalize">
            {page.sectionDescription}
          </p>

          {page.cards && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {page.cards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="group overflow-hidden rounded-2xl bg-cream shadow-soft"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-heading text-xl font-medium text-charcoal">
                      {card.title}
                    </h2>
                    <p className="mt-2 leading-6 text-charcoal/75 capitalize">
                      {card.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {page.details && (
            <section className="mt-16 border-t border-gray-200 pt-14 md:mt-20 md:pt-16">
              <SectionHeading title={page.details.title} />
              <p className="mx-auto -mt-5 max-w-3xl text-center leading-7 text-charcoal/75 md:text-lg capitalize">
                {page.details.description}
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {page.details.items.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="overflow-hidden rounded-2xl bg-cream shadow-soft"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                  >
                    <div className="h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-medium text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-6 text-charcoal/75 capitalize">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-charcoal/75"
                          >
                            <span
                              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta"
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          )}

          {page.secondaryImage && (
            <div className="mt-12 grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <img
                src={page.secondaryImage}
                alt={page.secondaryImageAlt}
                loading="lazy"
                className="h-72 w-full rounded-2xl object-cover shadow-soft md:h-96"
              />
              <div>
                <h2 className="font-heading text-2xl font-medium text-charcoal">
                  {page.secondaryTitle}
                </h2>
                <p className="mt-4 leading-7 text-charcoal/75 capitalize">
                  {page.secondaryDescription}
                </p>
              </div>
            </div>
          )}

          {page.storySections && (
            <div className="mt-16 space-y-14 border-t border-gray-200 pt-14 md:mt-20 md:space-y-20 md:pt-16">
              {page.storySections.map((story, index) => (
                <motion.article
                  key={story.title}
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                    index % 2 === 1 ? "md:[&>img]:order-2" : ""
                  }`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    loading="lazy"
                    className="h-72 w-full rounded-2xl object-cover shadow-soft md:h-96"
                  />
                  <div>
                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-terracotta">
                      {story.eyebrow}
                    </p>
                    <h2 className="font-heading text-2xl font-medium leading-tight text-charcoal">
                      {story.title}
                    </h2>
                    <p className="mt-4 leading-7 text-charcoal/75 capitalize">
                      {story.description}
                    </p>
                    {story.points && (
                      <ul className="mt-5 space-y-3">
                        {story.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-charcoal/80"
                          >
                            <span
                              className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal"
                              aria-hidden="true"
                            />
                            <span className="leading-6">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {page.contact && (
            <>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {Object.entries(page.contact)
                .filter(([key]) => ["email", "phone", "address"].includes(key))
                .map(([key, value]) => {
                  const Icon = pageIcons[key];
                  const label = page.contact[`${key}Label`];
                  const action = page.contact[`${key}Action`];
                  const href =
                    key === "email"
                      ? `mailto:${value}`
                      : key === "phone"
                        ? `tel:${value.replaceAll(" ", "")}`
                        : null;

                  return (
                    <article
                      key={key}
                      className="rounded-2xl bg-cream p-6 text-center shadow-soft"
                    >
                      <Icon className="mx-auto text-teal" size={28} aria-hidden="true" />
                      <h2 className="mt-3 font-heading text-xl font-medium text-charcoal">
                        {label}
                      </h2>
                      {href ? (
                        <div className="mt-2">
                          <a
                            href={href}
                            className="break-all font-bold text-terracotta hover:underline"
                          >
                            {value}
                          </a>
                          <p className="mt-1 text-sm text-charcoal/60">{action}</p>
                        </div>
                      ) : (
                        <p className="mt-2 text-charcoal/75">{value}</p>
                      )}
                    </article>
                  );
                })}
            </div>

            <form
              className="mx-auto mt-14 max-w-3xl rounded-2xl bg-cream p-6 shadow-soft md:p-8"
              action={`mailto:${page.contact.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-extrabold text-charcoal">
                    Your name
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-extrabold text-charcoal">
                    Contact Number<span className="text-terracotta">*</span>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="mb-2 block text-sm font-extrabold text-charcoal">
                  Your email
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
              </label>

              <label className="mt-6 block">
                <span className="mb-2 block text-sm font-extrabold text-charcoal">
                  Your message <span className="font-normal text-charcoal/60">(optional)</span>
                </span>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full resize-y rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
              </label>

              <Button type="submit" className="mt-6">
                Send message
              </Button>
            </form>

            {page.supportAreas && (
              <section className="mt-16 border-t border-gray-200 pt-14 md:mt-20 md:pt-16">
                <SectionHeading
                  eyebrow={page.supportAreas.eyebrow}
                  title={page.supportAreas.title}
                />
                <p className="mx-auto -mt-5 max-w-3xl text-center leading-7 text-charcoal/75 md:text-lg">
                  {page.supportAreas.description}
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {page.supportAreas.items.map((item, index) => (
                    <motion.article
                      key={item.title}
                      className="group overflow-hidden rounded-2xl bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: index * 0.07 }}
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading text-xl font-medium text-charcoal">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-6 text-charcoal/75 capitalize">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>
            )}
            </>
          )}
        </div>
      </section>

      <section className="bg-cream py-14 md:py-16">
        <div className="section-wrap flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-medium text-charcoal">
              {page.closingTitle}
            </h2>
            <p className="mt-2 max-w-2xl leading-6 text-charcoal/75 capitalize">
              {page.closingDescription}
            </p>
          </div>
          <Button href={page.closingHref}>{page.closingAction}</Button>
        </div>
      </section>
    </main>
  );
}
