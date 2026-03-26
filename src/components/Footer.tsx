import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-forest/10 bg-cream relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="font-serif text-2xl text-forest tracking-tight">La Cerise Verte</h2>
                    <p className="text-olive/60 text-sm mt-1">Site officiel en préparation</p>
                </div>

            </div>
            <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-forest/5 text-center text-xs text-olive/40 flex justify-between">
                <p>&copy; {new Date().getFullYear()} La Cerise Verte. Tous droits réservés.</p>
                <p>Design premium bio</p>
            </div>
        </footer>
    );
}
