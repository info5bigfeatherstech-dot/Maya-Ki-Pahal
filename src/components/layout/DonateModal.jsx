import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeartHandshake, X } from "lucide-react";
import { useAboutContent } from "../../api/hooks";
import { useUIStore } from "../../store/useUIStore";
import Button from "../common/Button";

export default function DonateModal() {
  const { data } = useAboutContent();
  const isOpen = useUIStore((state) => state.isDonateModalOpen);
  const setDonateModalOpen = useUIStore((state) => state.setDonateModalOpen);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setDonateModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, setDonateModalOpen]);

  if (!data) return null;
  const { donation } = data;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-charcoal/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDonateModalOpen(false);
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="donate-title"
            className="relative w-full max-w-lg rounded-3xl bg-cream p-8 text-center shadow-2xl md:p-10"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
          >
            <button
              type="button"
              onClick={() => setDonateModalOpen(false)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-teal hover:bg-white"
              aria-label={donation.closeLabel}
            >
              <X size={21} />
            </button>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-saffron text-teal">
              <HeartHandshake size={28} aria-hidden="true" />
            </span>
            <h2 id="donate-title" className="mt-5 font-heading text-3xl font-medium text-teal">
              {donation.title}
            </h2>
            <p className="mt-4 leading-7 text-charcoal/75">{donation.message}</p>
            <Button
              href={`mailto:${donation.email}?subject=Support%20Maya%20Ki%20Pahal`}
              className="mt-7"
              onClick={() => setDonateModalOpen(false)}
            >
              {donation.contactLabel}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
