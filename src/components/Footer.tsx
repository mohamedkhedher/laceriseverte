import Link from 'next/link';
import { Mail, Phone, Leaf } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/produits-alimentaires', label: 'Produits Alimentaires' },
  { href: '/cosmetiques', label: 'Cosmétiques' },
  { href: '/histoire', label: 'Histoire' },
  { href: '/blog', label: 'Blog' },
];

export function Footer() {
  return (
    <footer className="relative bg-forest text-cream">
      {/* Subtle top botanical accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Leaf size={18} className="text-sage" strokeWidth={1.5} />
              <h2 className="font-title text-2xl tracking-wide text-cream">
                La Cerise Verte
              </h2>
            </div>
            <p className="mt-3 font-sans text-sm leading-relaxed text-cream/60 italic">
              Pureté botanique, bien-être naturel
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/50">
              Des produits naturels et authentiques, issus du savoir-faire
              méditerranéen et de la richesse botanique.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-subtitle text-sm tracking-widest text-sage uppercase">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-subtitle text-sm tracking-widest text-sage uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:contact@laceriseverte.com"
                  className="group flex items-center gap-3 font-sans text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                >
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-sage/70 transition-colors duration-300 group-hover:text-sage"
                  />
                  contact@laceriseverte.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33000000000"
                  className="group flex items-center gap-3 font-sans text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-sage/70 transition-colors duration-300 group-hover:text-sage"
                  />
                  +33 (0) 00 00 00 00
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="font-subtitle text-sm tracking-widest text-sage uppercase">
              Suivez-nous
            </h3>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-all duration-300 hover:border-sage/50 hover:bg-sage/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cream/60 transition-colors duration-300 group-hover:text-cream"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-all duration-300 hover:border-sage/50 hover:bg-sage/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cream/60 transition-colors duration-300 group-hover:text-cream"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
            <p className="mt-6 font-sans text-xs leading-relaxed text-cream/35">
              Rejoignez notre communauté pour découvrir nos nouveautés et
              conseils bien-être.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 flex items-center gap-4">
          <span className="h-px flex-1 bg-cream/10" />
          <span className="text-cream/20 text-xs">✦</span>
          <span className="h-px flex-1 bg-cream/10" />
        </div>

        {/* Copyright Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="font-sans text-xs text-cream/35">
            &copy; {new Date().getFullYear()} La Cerise Verte. Tous droits
            réservés.
          </p>
          <p className="font-sans text-xs text-cream/25">
            Élégance naturelle &middot; Fabriqué avec soin
          </p>
        </div>
      </div>
    </footer>
  );
}
