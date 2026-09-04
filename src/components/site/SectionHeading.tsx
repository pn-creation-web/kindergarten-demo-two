import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`eyebrow ${tone === "light" ? "text-gold" : ""}`}>{eyebrow}</p>
      ) : null}
      <As
        className={`mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl ${
          tone === "light" ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </As>
      <span
        className={`mt-6 block h-px w-12 bg-gold ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {intro ? (
        <p
          className={`mt-6 text-base leading-relaxed ${
            tone === "light" ? "text-ivory/70" : "text-slate"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
