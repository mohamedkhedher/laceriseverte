import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface OrderItem {
    productName: string;
    volume: string;
    price: number;
    quantity: number;
}

interface OrderData {
    customer: {
        name?: string;
        fullName?: string;
        phone: string;
        address: string;
        city: string;
        postalCode?: string;
        notes?: string;
        deliveryNotes?: string;
    };
    items: OrderItem[];
    total: number;
}

export async function POST(request: NextRequest) {
    try {
        const body: OrderData = await request.json();

        const customerName = body.customer?.name || body.customer?.fullName;
        const customerNotes = body.customer?.notes || body.customer?.deliveryNotes;

        // Validate required fields
        if (!customerName || !body.customer?.phone || !body.customer?.address || !body.customer?.city) {
            return NextResponse.json(
                { error: "Veuillez remplir tous les champs obligatoires." },
                { status: 400 }
            );
        }

        if (!body.items || body.items.length === 0) {
            return NextResponse.json(
                { error: "Votre panier est vide." },
                { status: 400 }
            );
        }

        // Build email HTML
        const itemsHtml = body.items
            .map(
                (item) => `
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #f2eae0;">${item.productName}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #f2eae0;">${item.volume}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #f2eae0; text-align: center;">${item.quantity}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #f2eae0; text-align: right;">${item.price.toFixed(3)} TND</td>
                </tr>`
            )
            .join("");

        const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #faf9f6; color: #4a5d4e; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
                .header { background: #3c4a3e; color: #faf9f6; padding: 30px; text-align: center; }
                .header h1 { margin: 0; font-size: 24px; letter-spacing: 2px; }
                .header p { margin: 8px 0 0; opacity: 0.8; font-size: 14px; }
                .content { padding: 30px; }
                .section-title { color: #3c4a3e; font-size: 18px; margin: 24px 0 12px; border-bottom: 2px solid #8fa08c; padding-bottom: 8px; }
                .info-row { display: flex; padding: 8px 0; border-bottom: 1px solid #f2eae0; }
                .info-label { font-weight: 600; color: #3c4a3e; min-width: 140px; }
                .info-value { color: #4a5d4e; }
                table { width: 100%; border-collapse: collapse; margin: 12px 0; }
                th { background: #f2eae0; padding: 12px; text-align: left; color: #3c4a3e; font-weight: 600; }
                .total-row { background: #3c4a3e; color: #faf9f6; }
                .total-row td { padding: 16px 12px; font-weight: 700; font-size: 18px; }
                .badge { display: inline-block; background: #8fa08c; color: white; padding: 6px 16px; border-radius: 20px; font-size: 13px; margin-top: 16px; }
                .footer { text-align: center; padding: 20px; color: #8fa08c; font-size: 12px; border-top: 1px solid #f2eae0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>La Cerise Verte</h1>
                    <p>Nouvelle commande reçue</p>
                </div>
                <div class="content">
                    <h2 class="section-title">📦 Informations client</h2>
                    <div style="margin-bottom: 20px;">
                        <div class="info-row"><span class="info-label">Nom :</span><span class="info-value">${customerName}</span></div>
                        <div class="info-row"><span class="info-label">Téléphone :</span><span class="info-value">${body.customer.phone}</span></div>
                        <div class="info-row"><span class="info-label">Adresse :</span><span class="info-value">${body.customer.address}</span></div>
                        <div class="info-row"><span class="info-label">Ville :</span><span class="info-value">${body.customer.city}</span></div>
                        ${body.customer.postalCode ? `<div class="info-row"><span class="info-label">Code postal :</span><span class="info-value">${body.customer.postalCode}</span></div>` : ""}
                        ${customerNotes ? `<div class="info-row"><span class="info-label">Notes :</span><span class="info-value">${customerNotes}</span></div>` : ""}
                    </div>

                    <h2 class="section-title">🛒 Détails de la commande</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Format</th>
                                <th style="text-align: center;">Qté</th>
                                <th style="text-align: right;">Prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                            <tr class="total-row">
                                <td colspan="3">Total</td>
                                <td style="text-align: right;">${body.total.toFixed(3)} TND</td>
                            </tr>
                        </tbody>
                    </table>

                    <span class="badge">💰 Paiement à la livraison</span>
                </div>
                <div class="footer">
                    <p>© ${new Date().getFullYear()} La Cerise Verte — Commande automatique</p>
                </div>
            </div>
        </body>
        </html>
        `;

        // Target email address and Resend configuration
        const orderEmail = process.env.ORDER_EMAIL || "contact@laceriseverte.com";
        const resendApiKey = process.env.RESEND_API_KEY || "re_Ak9YWbWZ_91bwaQ2h71AvXnBNT5M4c9Ky";
        const fromEmail = process.env.RESEND_FROM_EMAIL || "La Cerise Verte <onboarding@resend.dev>";

        if (!resendApiKey) {
            console.log("=== NOUVELLE COMMANDE (Clé Resend non configurée) ===");
            console.log("Email cible :", orderEmail);
            console.log("Client :", { name: customerName, phone: body.customer.phone, address: body.customer.address, city: body.customer.city, notes: customerNotes });
            console.log("Articles :", body.items);
            console.log("Total :", body.total.toFixed(3), "TND");
            console.log("=====================================================");

            if (process.env.NODE_ENV === "production") {
                return NextResponse.json(
                    { error: `Erreur de configuration : Clé API Resend (RESEND_API_KEY) manquante sur Vercel.` },
                    { status: 500 }
                );
            }
        } else {
            try {
                const resend = new Resend(resendApiKey);
                const { data, error } = await resend.emails.send({
                    from: fromEmail,
                    to: [orderEmail],
                    subject: `🌿 Nouvelle commande — ${customerName} — ${body.total.toFixed(3)} TND`,
                    html: emailHtml,
                });

                if (error) {
                    console.error("Erreur Resend lors de l'envoi de l'email :", error);
                    return NextResponse.json(
                        { error: `Échec de l'envoi de l'email via Resend vers ${orderEmail} : ${error.message}. Note : Si vous utilisez 'onboarding@resend.dev' avec le mode test, Resend n'autorise l'envoi qu'à l'adresse email d'inscription de votre compte Resend. Vérifiez votre domaine sur resend.com pour envoyer à n'importe quelle adresse.` },
                        { status: 500 }
                    );
                }

                console.log(`=== EMAIL DE COMMANDE ENVOYÉ AVEC SUCCÈS VIA RESEND À ${orderEmail} (ID: ${data?.id}) ===`);
            } catch (resendError: any) {
                console.error("Erreur d'exécution Resend :", resendError);
                return NextResponse.json(
                    { error: `Erreur lors de l'appel à l'API Resend : ${resendError?.message || "Erreur inconnue"}.` },
                    { status: 500 }
                );
            }
        }

        return NextResponse.json({
            success: true,
            message: "Commande confirmée ! Vous recevrez votre commande prochainement.",
        });
    } catch (error) {
        console.error("Checkout error:", error);
        return NextResponse.json(
            { error: "Une erreur est survenue. Veuillez réessayer." },
            { status: 500 }
        );
    }
}
