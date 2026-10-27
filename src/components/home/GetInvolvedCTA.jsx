import { ArrowRight } from "lucide-react";
import { useAboutContent } from "../../api/hooks";
import { useUIStore } from "../../store/useUIStore";
import Button from "../common/Button";

export default function GetInvolvedCTA() {
  const { data } = useAboutContent();
  const setDonateModalOpen = useUIStore((state) => state.setDonateModalOpen);
  if (!data) return <section id="get-involved" className="min-h-72 bg-saffron" />;
  const { involvement } = data;

  return (
    <section id="get-involved" className="bg-saffron py-14 md:py-16">
      <div className="section-wrap flex flex-col items-center justify-between gap-7 md:flex-row">
        <h2 className="max-w-xl text-center font-heading text-3xl font-medium leading-tight text-teal md:text-left">
          {involvement.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={() => setDonateModalOpen(true)} variant="primary">
            {involvement.donateLabel}
          </Button>
          <Button href={involvement.volunteerHref} variant="teal">
            {involvement.volunteerLabel}
          </Button>
          <Button href={involvement.contactHref} variant="outline">
            {involvement.contactLabel} <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
