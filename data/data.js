const ferrariWins = [
    {
        id: 1,
        titolo: "Charles Leclerc vince il GP del Bahrain 2022",
        contenuto: "Leclerc porta la Ferrari alla vittoria nel GP del Bahrain con una performance dominante.",
        modello: "SF22",
        immagine: "img/f1/leclerc-f1-bahrain-2022.jpg",
        tags: ["F1", "2022", "leclerc", "bahrain"]
    },
    {
        id: 2,
        titolo: "Charles Leclerc vince il GP d'Australia 2022",
        contenuto: "Leclerc conquista la vittoria ad Albert Park dopo una gara impeccabile.",
        modello: "SF22",
        immagine: "img/f1/leclerc-f1-melbourne-2022.jpg",
        tags: ["F1", "2022", "leclerc", "australia"]
    },
    {
        id: 3,
        titolo: "Carlos Sainz trionfa al GP di Silverstone 2022",
        contenuto: "Sainz regala un’ottima prova portando la Ferrari alla vittoria in Gran Bretagna.",
        modello: "SF22",
        immagine: "img/f1/sainz-f1-silverstone-2022.webp",
        tags: ["F1", "2022", "sainz", "silverstone"]
    },
    {
        id: 4,
        titolo: "Charles Leclerc vince il GP d'Austria 2022",
        contenuto: "Leclerc domina austriaco e conquista un’altra vittoria per il Cavallino.",
        modello: "SF22",
        immagine: "img/f1/leclerc-f1-austria-2022.jpg",
        tags: ["F1", "2022", "leclerc", "austria"]
    },
    {
        id: 5,
        titolo: "Carlos Sainz vince il GP di Singapore 2023",
        contenuto: "In condizioni di alta umidità e pista insidiosa, Sainz porta la Ferrari al successo.",
        modello: "SF23",
        immagine: "img/f1/sainz-f1-singapore-2023.jpeg",
        tags: ["F1", "2023", "sainz", "singapore"]
    },
    {
        id: 6,
        titolo: "Carlos Sainz vince il GP d'Australia 2024",
        contenuto: "Sainz realizza una grande prestazione ad Albert Park e vince con la SF24.",
        modello: "SF24",
        immagine: "img/f1/sainz-f1-melbourne-2024.webp",
        tags: ["F1", "2024", "sainz", "australia"]
    },
    {
        id: 7,
        titolo: "Charles Leclerc trionfa nel GP di Monaco 2024",
        contenuto: "Leclerc conquista il Principato in una gara magistrale.",
        modello: "SF24",
        immagine: "img/f1/leclerc-f1-monaco-2024.webp",
        tags: ["F1", "2024", "leclerc", "monaco"]
    },
    {
        id: 8,
        titolo: "Charles Leclerc vince il GP d'Italia 2024",
        contenuto: "Davanti ai tifosi di casa a Monza, Leclerc conquista un’emozionante vittoria.",
        modello: "SF24",
        immagine: "img/f1/leclerc-f1-monza-2024.jpg",
        tags: ["F1", "2024", "leclerc", "monza"]
    },
    {
        id: 9,
        titolo: "Charles Leclerc vince il GP degli Stati Uniti 2024",
        contenuto: "Leclerc domina anche ad Austin e porta a casa un’altra vittoria per la Ferrari.",
        modello: "SF24",
        immagine: "img/f1/leclerc-f1-austin-2024.jpg",
        tags: ["F1", "2024", "leclerc", "usa"]
    },
    {
        id: 10,
        titolo: "Carlos Sainz vince il GP del Messico 2024",
        contenuto: "Sainz conquista il successo a Città del Messico, ultima vittoria Ferrari finora.",
        modello: "SF24",
        immagine: "img/f1/sainz-f1-mexico-2024.webp",
        tags: ["F1", "2024", "sainz", "messico"]
    }
];

const models = [];

ferrariWins.forEach(win => {
    if (!models.includes(win.modello)) {
        models.push(win.modello)
    }

});

export { ferrariWins, models };
