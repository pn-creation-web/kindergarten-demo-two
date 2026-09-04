import { contact, whatsappLink } from "@/data/site";
import { BookVisitForm } from "./BookVisitForm";
import { Reveal } from "./Reveal";

export function BookVisitSection() {
  return (
    <section id="book-a-visit" className="scroll-mt-24 bg-navy py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-gold">Admissions</p>
          <h2 className="mt-4 text-4xl leading-[1.1] text-ivory lg:text-5xl">
            Book a personal
            <span className="block italic text-gold">campus visit</span>
          </h2>
          <span className="mt-6 block h-px w-12 bg-gold" aria-hidden="true" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
            Walk our classrooms, meet the teachers and see a working day for yourself. Share a few
            details and we'll confirm your slot on WhatsApp.
          </p>
          <div className="mt-8 space-y-3">
            {contact.phones.map((p) => (
              <div key={p.tel} className="flex flex-wrap gap-3">
                <a
                  href={`tel:${p.tel}`}
                  className="border border-ivory/25 px-5 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  Call {p.label}
                </a>
                <a
                  href={whatsappLink(p.wa, "Hello, I would like to know more about admissions.")}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border border-ivory/25 px-5 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="border border-ivory/12 bg-ivory/[0.03] p-6 sm:p-10">
          <BookVisitForm tone="dark" />
        </Reveal>
      </div>
    </section>
  );
}
