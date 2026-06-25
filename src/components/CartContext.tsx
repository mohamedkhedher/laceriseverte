"use client";

import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from "react";

export interface CartItem {
    productSlug: string;
    productName: string;
    volume: string;
    price: number;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "quantity">) => void;
    removeItem: (productSlug: string, volume: string) => void;
    updateQuantity: (productSlug: string, volume: string, delta: number) => void;
    clearCart: () => void;
    total: number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    isCheckoutOpen: boolean;
    setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const addItem = useCallback((newItem: Omit<CartItem, "quantity">) => {
        setItems((prev) => {
            const existing = prev.find(
                (item) => item.productSlug === newItem.productSlug && item.volume === newItem.volume
            );
            if (existing) {
                return prev.map((item) =>
                    item.productSlug === newItem.productSlug && item.volume === newItem.volume
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...newItem, quantity: 1 }];
        });
    }, []);

    const removeItem = useCallback((productSlug: string, volume: string) => {
        setItems((prev) =>
            prev.filter(
                (item) => !(item.productSlug === productSlug && item.volume === volume)
            )
        );
    }, []);

    const updateQuantity = useCallback((productSlug: string, volume: string, delta: number) => {
        setItems((prev) =>
            prev
                .map((item) => {
                    if (item.productSlug === productSlug && item.volume === volume) {
                        const newQty = item.quantity + delta;
                        return newQty > 0 ? { ...item, quantity: newQty } : null;
                    }
                    return item;
                })
                .filter((item): item is CartItem => item !== null)
        );
    }, []);

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    const total = useMemo(
        () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        [items]
    );

    const value = useMemo(
        () => ({
            items,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            total,
            isCartOpen,
            setIsCartOpen,
            isCheckoutOpen,
            setIsCheckoutOpen,
        }),
        [
            items,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            total,
            isCartOpen,
            setIsCartOpen,
            isCheckoutOpen,
            setIsCheckoutOpen,
        ]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
