import { Instagram } from "lucide-react";
import { contact, instagramPosts } from "@/data/site";
import { Reveal } from "./Reveal";

/**
 * Placeholder / skeleton grid. No Meta API, tokens or backend —
 * real Instagram feed will be connected manually later.
 */
export function InstagramGrid({ limit = 6 }: { limit?: number }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {instagramPosts.slice(0, limit).map((post, i) => (
        <li key={post.caption}>
          <Reveal delay={i * 0.05}>
            <a
              href={contact.instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group block border border-border bg-card"
            >
              <div className="relative aspect-square overflow-hidden bg-mist">
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-mist to-secondary" />
                <Instagram
                  className="absolute inset-0 m-auto h-6 w-6 text-slate/50 transition-colors group-hover:text-gold"
                  aria-hidden="true"
                />
              </div>
              <div className="p-4">
                <p className="text-sm leading-snug text-navy">{post.caption}</p>
                <p className="mt-2 text-xs tracking-wide text-gold">{post.tag}</p>
              </div>
            </a>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
