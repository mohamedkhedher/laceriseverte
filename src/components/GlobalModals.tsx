"use client";

import { CartDrawer } from "./CartDrawer";
import { CheckoutModal } from "./CheckoutModal";
import { useCart } from "./CartContext";

export function GlobalModals() {
    const { isCheckoutOpen, setIsCheckoutOpen, lang } = useCart();

    return (
        <>
            <CartDrawer />
            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                lang={lang}
            />
        </>
    );
}
