import { Compass, Instagram, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-14 text-sand/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-heading text-lg font-semibold tracking-wide text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brass text-charcoal">
                <Compass size={18} strokeWidth={2.25} />
              </span>
              VetVentures
            </div>
            <p className="mt-4 max-w-xs text-sm">
              From battlefield to basecamp — leadership training and
              adventure camps built on Army-tested discipline.
            </p>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Events", href: "#events" },
            ]}
          />
          <FooterCol
            title="Community"
            links={[
              { label: "Media", href: "#media" },
              { label: "Join Us", href: "#community" },
              { label: "Contact", href: "#contact" },
            ]}
          />

          <div>
            <p className="font-heading text-sm uppercase tracking-widest text-white">
              Follow
            </p>
            <div className="mt-4 flex gap-3">
              <SocialIcon href="https://www.youtube.com/@MajorLSC" icon={Youtube} />
              <SocialIcon href="https://instagram.com/major_lsc" icon={Instagram} />
              <SocialIcon href="https://wa.me/919876543210" icon={MessageCircle} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} VetVentures. All rights reserved.</p>
          <p>Built with discipline, in India. 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-heading text-sm uppercase tracking-widest text-white">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="transition-colors hover:text-brass">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, icon: Icon }: { href: string; icon: typeof Youtube }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/20 transition-colors hover:border-brass hover:text-brass"
    >
      <Icon size={16} />
    </a>
  );
}
