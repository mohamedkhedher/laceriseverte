'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/produits-alimentaires', label: 'Produits Alimentaires' },
  { href: '/cosmetiques', label: 'Cosmétiques' },
  { href: '/histoire', label: 'Histoire' },
  { href: '/blog', label: 'Blog' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items, setIsCartOpen } = useCart();
  const itemCount = items.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-cream/90 shadow-[0_1px_12px_rgba(60,74,62,0.08)] bg-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo + Brand Name */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-sage/30 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
            <Image
              src="/logo.png"
              alt="La Cerise Verte"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="font-title text-lg tracking-wide text-forest transition-colors duration-300 group-hover:text-sage lg:text-xl">
            La Cerise Verte
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 font-sans text-sm tracking-wide text-forest/80 transition-colors duration-300 hover:text-sage"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart Icon Button (Desktop + Mobile) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full text-forest hover:bg-sage/10 transition-colors flex items-center justify-center"
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute top-1 right-1 bg-sage text-forest text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm border border-cream"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full text-forest transition-colors duration-300 hover:bg-sage/10 lg:hidden"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} strokeWidth={1.5} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed inset-0 top-0 z-40 overflow-hidden bg-cream/98 bg-blur lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.15,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.04,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="flex flex-col items-center gap-2"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.35, ease: 'easeOut' },
                      },
                      closed: {
                        y: 20,
                        opacity: 0,
                        transition: { duration: 0.2, ease: 'easeIn' },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3 font-sans text-lg tracking-wide text-forest/80 transition-colors duration-300 hover:text-sage"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Decorative botanical separator */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex items-center gap-3"
              >
                <span className="h-px w-12 bg-sage/30" />
                <span className="text-sage/50 text-xs">✦</span>
                <span className="h-px w-12 bg-sage/30" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="mt-4 font-sans text-xs tracking-widest text-olive/40 uppercase"
              >
                Pureté botanique
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
