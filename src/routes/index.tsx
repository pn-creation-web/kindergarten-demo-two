import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  gallery,
  philosophy,
  programmes,
  seo,
  site,
  stats,
  testimonials,
  whyChooseUs,
  contact,
} from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BookVisitSection } from "@/components/site/BookVisitSection";
import { InstagramGrid } from "@/components/site/InstagramGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo["/"].title },
      { name: "description", content: seo["/"].description },
      { property: "og:title", content: seo["/"].title },
      { property: "og:description", content: seo["/"].description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative -mt-20 flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={site.images.hero}
          alt="Children reading with a teacher in a light-filled classroom"
          width={1600}
          height={1008}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/25" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-gold"
          >
            Est. {site.established} · {site.locality}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
          >
            An unhurried beginning to a
            <span className="block italic text-gold">lifetime of learning</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ivory/75"
          >
            {site.name} is a women-owned {site.tagline.toLowerCase()} in {site.locality}, where a
            structured early-years curriculum is delivered with warmth, patience and exceptional
            care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              hash="book-a-visit"
              className="border border-gold bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-navy transition-colors hover:bg-transparent hover:text-gold"
            >
              Book a Visit
            </Link>
            <Link
              to="/about"
              className="border border-ivory/35 px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-ivory transition-colors hover:border-ivory"
            >
              Our Philosophy
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b border-border bg-ivory">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border px-0 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-ivory">
              <div className="px-6 py-10 text-center lg:py-14">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-[family-name:var(--font-display)] text-4xl text-navy lg:text-5xl">
                    {s.value}
                  </span>
                  <span className="mt-3 block text-xs uppercase tracking-[0.18em] text-slate">
                    {s.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Editorial about */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
          <Reveal className="relative">
            <img
              src={site.images.about}
              alt="A teacher working one-to-one with a young child"
              width={1008}
              height={1264}
              loading="lazy"
              className="w-full object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -right-4 hidden bg-navy px-8 py-6 text-ivory sm:block lg:-right-8">
              <p className="eyebrow text-gold">Women-owned</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                Founded & led by educators
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our School"
              title="A quiet, considered place for the first six years"
              intro="Founded by women educators who still teach on the floor, our campus was designed around one belief: young children flourish when the day is calm, predictable and rich in language."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-sm leading-loose text-slate">
                From playgroup to senior kindergarten — and through our extended daycare — every
                child is known individually. Teachers keep written observations, class sizes stay
                small, and parents are treated as partners rather than an audience.
              </p>
              <Link
                to="/about"
                className="link-underline mt-10 inline-block text-[0.72rem] uppercase tracking-[0.22em] text-navy"
              >
                Read our story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Learning Philosophy"
            title="Academics that respect childhood"
            align="center"
          />
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="bg-secondary">
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

      {/* Programmes */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Programmes" title="Four stages, one continuous journey" />
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

      {/* Why choose us */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Families Choose Us"
            title="Trusted by parents across Kandivali"
            tone="light"
          />
          <div className="mt-16 grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05} className="bg-navy">
                <article className="h-full bg-navy p-8 lg:p-10">
                  <span className="block h-px w-8 bg-gold" aria-hidden="true" />
                  <h3 className="mt-6 text-xl text-ivory">{w.title}</h3>
                  <p className="mt-4 text-sm leading-loose text-ivory/60">{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Campus" title="Spaces designed for small people" />
            <Reveal>
              <Link
                to="/gallery"
                className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-navy"
              >
                View full gallery
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {gallery.slice(0, 6).map((g, i) => (
              <Reveal key={g.alt} delay={i * 0.05}>
                <figure className="overflow-hidden bg-mist">
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Parent Voices" title="In their words" align="center" />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08}>
                <figure className="flex h-full flex-col justify-between border border-border bg-ivory p-8 lg:p-10">
                  <blockquote className="font-[family-name:var(--font-display)] text-xl leading-relaxed text-navy">
                    <span className="text-gold">“</span>
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 border-t border-border pt-5 text-xs uppercase tracking-[0.18em] text-slate">
                    {t.author} — {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Instagram"
              title="Everyday moments on campus"
              intro={`Follow ${contact.instagram.handle} for classroom stories, celebrations and updates.`}
            />
            <Reveal>
              <Link
                to="/instagram"
                className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-navy"
              >
                See the feed
              </Link>
            </Reveal>
          </div>
          <div className="mt-14">
            <InstagramGrid limit={6} />
          </div>
        </div>
      </section>

      <BookVisitSection />
    </>
  );
}
