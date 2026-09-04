import { createFileRoute } from "@tanstack/react-router";
import { philosophy, programmes, seo, site, stats, whyChooseUs } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BookVisitSection } from "@/components/site/BookVisitSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: seo["/about"].title },
      { name: "description", content: seo["/about"].description },
      { property: "og:title", content: seo["/about"].title },
      { property: "og:description", content: seo["/about"].description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="About the school"
            title="Founded by women. Led by educators."
            intro={`${site.name} has spent over fifteen years welcoming ${site.locality} families into a calm, structured early-years environment — a school day and a daycare day under one trusted roof.`}
            as="h1"
          />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <div className="space-y-6 text-sm leading-loose text-slate">
              <p className="font-[family-name:var(--font-display)] text-2xl leading-relaxed text-navy">
                We began with a single classroom, a handful of families and a conviction that early
                education deserves the same seriousness as any later stage of school.
              </p>
              <p>
                That conviction still shapes everything. Our teachers are trained early-years
                practitioners, not caretakers. Our curriculum is planned in cycles, reviewed
                against observation notes, and adjusted to the children in front of us. Our rooms
                are deliberately uncluttered so that attention has somewhere to land.
              </p>
              <p>
                The school is women-owned and women-led — founded, managed and taught by women who
                are present on campus every day. Parents meet the people who make the decisions,
                not a call centre.
              </p>
              <p>
                Above all, we are a neighbourhood school. Families walk in, siblings follow, and
                children who left for Grade 1 still come back to show us their report cards.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <img
              src={site.images.about}
              alt="A teacher and a young child working together at a table"
              width={1008}
              height={1264}
              loading="lazy"
              className="w-full object-cover shadow-elegant"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-[family-name:var(--font-display)] text-4xl text-gold lg:text-5xl">
                  {s.value}
                </span>
                <span className="mt-3 block text-xs uppercase tracking-[0.18em] text-ivory/60">
                  {s.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Learning philosophy" title="How we teach" />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <article className="h-full bg-ivory p-8 lg:p-10">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-2xl text-navy">{p.title}</h3>
                  <p className="mt-4 text-sm leading-loose text-slate">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Programmes" title="Stages we offer" />
          <div className="mt-14 divide-y divide-border border-y border-border">
            {programmes.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="grid gap-4 py-8 lg:grid-cols-[1fr_0.7fr_1.6fr] lg:items-baseline lg:gap-10">
                  <h3 className="text-2xl text-navy">{p.title}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">{p.age}</p>
                  <p className="text-sm leading-loose text-slate">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Why choose us" title="What sets the school apart" />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <article className="h-full bg-ivory p-8 lg:p-10">
                  <span className="block h-px w-8 bg-gold" aria-hidden="true" />
                  <h3 className="mt-6 text-xl text-navy">{w.title}</h3>
                  <p className="mt-4 text-sm leading-loose text-slate">{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookVisitSection />
    </>
  );
}
