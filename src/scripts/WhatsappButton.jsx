

export default function WhatsappButton({ productName, price, sku }) {
    // Il tuo numero di telefono completo di prefisso internazionale (senza il "+")
    const phoneNumber = "393331234567";

    // Il template del tuo messaggio personalizzato
    const message = `Ciao! Vorrei acquistare il seguente prodotto:
- *Prodotto:* ${productName}
- *Codice:* ${sku}
- *Prezzo:* ${price}

È ancora disponibile? Grazie!`;

    // Codifica il messaggio per renderlo sicuro in un URL
    const encodedMessage = encodeURIComponent(message);

    // URL finale per WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
        >
            <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
            >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.116-2.905-6.994C16.535 1.87 14.048.833 11.433.833c-5.444 0-9.877 4.43-9.881 9.874-.001 1.777.464 3.51 1.347 5.048l-1.009 3.686 3.766-.988z" />
            </svg>
            Acquista su WhatsApp
        </a>
    );
}