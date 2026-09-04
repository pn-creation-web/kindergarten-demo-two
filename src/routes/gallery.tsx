import { createFileRoute } from "@tanstack/react-router";
import { gallery, seo } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BookVisitSection } from "@/components/site/BookVisitSection";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: seo["/gallery"].title },
      { name: "description", content: seo["/gallery"].description },
      { property: "og:title", content: seo["/gallery"].title },
      { property: "og:description", content: seo["/gallery"].description },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Campus gallery"
            title="Inside our classrooms"
            intro="Light-filled rooms, open shelves, a reading corner, an art studio and a secure daycare wing — the everyday setting of our school."
            as="h1"
          />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {gallery.map((g, i) => (
              <Reveal key={g.alt} delay={(i % 3) * 0.06}>
                <figure className="group overflow-hidden bg-mist">
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <figcaption className="border-t border-border bg-ivory px-5 py-4 text-xs uppercase tracking-[0.16em] text-slate">
                    {g.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookVisitSection />
    </>
  );
}
