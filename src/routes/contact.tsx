import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { contact, seo, site, whatsappLink } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BookVisitSection } from "@/components/site/BookVisitSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: seo["/contact"].title },
      { name: "description", content: seo["/contact"].description },
      { property: "og:title", content: seo["/contact"].title },
      { property: "og:description", content: seo["/contact"].description },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="We would love to meet your family"
            intro={`Call or WhatsApp either number, write to us, or simply visit the campus in ${site.locality}.`}
            as="h1"
          />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="space-y-10">
              <div>
                <h2 className="eyebrow">Speak to us</h2>
                <ul className="mt-5 space-y-4">
                  {contact.phones.map((p) => (
                    <li
                      key={p.tel}
                      className="flex flex-wrap items-center justify-between gap-4 border border-border bg-card px-5 py-4"
                    >
                      <span className="flex items-center gap-3 text-sm text-navy">
                        <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                        {p.label}
                      </span>
                      <span className="flex gap-2">
                        <a
                          href={`tel:${p.tel}`}
                          className="border border-navy px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-navy transition-colors hover:bg-navy hover:text-ivory"
                        >
                          Call
                        </a>
                        <a
                          href={whatsappLink(
                            p.wa,
                            `Hello ${site.name} ${site.locality}, I would like to know more about admissions.`,
                          )}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center gap-2 border border-gold bg-gold px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-navy transition-colors hover:bg-transparent"
                        >
                          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                          WhatsApp
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="eyebrow">Write to us</h2>
                <a
                  href={`mailto:${contact.email}`}
                  className="link-underline mt-5 inline-flex items-center gap-3 text-sm text-navy"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
                  {contact.email}
                </a>
              </div>

              <div>
                <h2 className="eyebrow">Campus address</h2>
                <address className="mt-5 flex gap-3 text-sm not-italic leading-loose text-slate">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {contact.address.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </address>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline mt-4 inline-block text-[0.72rem] uppercase tracking-[0.2em] text-navy"
                >
                  Open in Google Maps
                </a>
              </div>

              <div>
                <h2 className="eyebrow">Opening hours</h2>
                <dl className="mt-5 space-y-2 text-sm text-slate">
                  {contact.hours.map((h) => (
                    <div key={h.days} className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                      <dt className="w-44">{h.days}</dt>
                      <dd className="text-navy">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-[420px] border border-border bg-card p-2">
              <iframe
                title={`Map to ${site.name} ${site.locality}`}
                src={contact.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[400px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <BookVisitSection />
    </>
  );
}
