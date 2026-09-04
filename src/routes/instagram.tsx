import { createFileRoute } from "@tanstack/react-router";
import { contact, seo } from "@/data/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import { Reveal } from "@/components/site/Reveal";
import { BookVisitSection } from "@/components/site/BookVisitSection";

export const Route = createFileRoute("/instagram")({
  head: () => ({
    meta: [
      { title: seo["/instagram"].title },
      { name: "description", content: seo["/instagram"].description },
      { property: "og:title", content: seo["/instagram"].title },
      { property: "og:description", content: seo["/instagram"].description },
    ],
  }),
  component: InstagramPage,
});

function InstagramPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={contact.instagram.handle}
            title="Life at the school, week by week"
            intro="A preview of our Instagram. The live feed will be connected shortly — until then, follow us directly for the latest posts."
            as="h1"
          />
          <Reveal delay={0.1}>
            <a
              href={contact.instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-10 inline-block border border-navy bg-navy px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-transparent hover:text-navy"
            >
              Follow on Instagram
            </a>
          </Reveal>
        </div>
      </section>

      {/* Placeholder grid — no Meta API, tokens or backend. */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <InstagramGrid limit={6} />
        </div>
      </section>

      <BookVisitSection />
    </>
  );
}
