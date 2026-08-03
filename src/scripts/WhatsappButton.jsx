
import shopInfo from "../data/shopinfo.json";

export default function WhatsappButton({ productName, price, productCode, limitato }) {
    const phoneNumber = shopInfo[0].telefono;

    // Il template del tuo messaggio personalizzato
    const message = `Ciao! Vorrei acquistare il seguente prodotto:
- Prodotto: ${productName}
- Prezzo: ${price ? price : "Richiedi info"}

È ancora disponibile? Grazie!`;


    // Codifica il messaggio per renderlo sicuro in un URL
    const encodedMessage = encodeURIComponent(message);

    // URL finale per WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <button
            class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
            >
                {limitato ? "Richiedi info disponibilità" : "Acquista"}
            </a>
        </button>
    );
}