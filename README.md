# 🏆 🏎️ Vittorie Scuderi Ferrari dal 2022 al 2025.
Esercizio di blog con articoli sulle vittorie della Scuderia Ferrai HP in Formula 1.

## 🐝 API
Operazioni implementate:
- [Vai all'index ☝🏻](#-index)
- [Vai allo show 👁️](#-show)
- [Vai al destroy 🗑️](#-destroy)

## ☝🏻 INDEX
### 🍯 Descrizione:
Questa API fornisce contenuti informativi relativi al mondo della Scuderia Ferrai HP in Formula 1, permettendo di consultare le vittorie consecuite dal 2022 al 2025.
Ogni articolo rappresenta la vittoria di quel determinato Gran Premio, includendo dettagli come pilota, stagione, tracciato e vettura utilizzata.

### 🏆 Ottieni tutte le vittorie:
Restituisce tutte le vittorie disponibili.

#### Esempio:
`GET http://localhost:4416/posts`
```json
{
    "info": {
        "totalWins": 10,
        "leclerWins": 6,
        "sainzWins": 4
    },
    "results": [
        {
            "id": 1,
            "titolo": "Charles Leclerc vince il GP del Bahrain 2022",
            "contenuto": "Leclerc porta la Ferrari alla vittoria nel GP del Bahrain con una performance dominante.",
            "modello": "SF22",
            "immagine": "img/f1/leclerc-f1-bahrain-2022.jpg",
            "tags": [
                "F1",
                "2022",
                "leclerc",
                "bahrain"
            ]
        }
    ]
}
```

### 🔍 Filtri disponibili:

L’API supporta diversi parametri di filtro per affinare la ricerca dei contenuti.
- [Vai al filtro per pilota 🧑‍✈️](#-filtro-per-pilota)
- [Vai al filtro per tracciato 🏁](#-filtro-per-tracciato)
- [Vai al filtro per stagione 📅](#-filtro-per-stagione)

### 🧑‍✈️ Filtro per pilota:
Permette di ottenere le vittorie relative a uno specifico pilota.

#### Descrizione:
Restituisce tutte le vittorie in cui il pilota indicato è protagonista del Gran Premio.

#### Esempio:
`GET http://localhost:4416/posts?pilot=leclerc`
```json
{
"info": {
        "category": "pilot",
        "name": "leclerc",
        "totalWins": 6
    },
    "results": [
        {
            "id": 1,
            "titolo": "Charles Leclerc vince il GP del Bahrain 2022",
            "contenuto": "Leclerc porta la Ferrari alla vittoria nel GP del Bahrain con una performance dominante.",
            "modello": "SF22",
            "immagine": "img/f1/leclerc-f1-bahrain-2022.jpg",
            "tags": [
                "F1",
                "2022",
                "leclerc",
                "bahrain"
            ]
        }
    ]
}
```

### 🏁 Filtro per tracciato:
Consente per visualizzare le vittorie associate a uno specifico circuito.

#### Descrizione:
Restituisce le vittorie relative ai Gran Premi disputati sul tracciato indicato.

#### Esempio:
`GET http://localhost:4416/posts?track=monaco`
```json
{
"info": {
        "category": "track",
        "name": "monaco",
        "totalWins": 1
    },
    "results": [
        {
            "id": 7,
            "titolo": "Charles Leclerc trionfa nel GP di Monaco 2024",
            "contenuto": "Leclerc conquista il Principato in una gara magistrale.",
            "modello": "SF24",
            "immagine": "img/f1/leclerc-f1-monaco-2024.webp",
            "tags": [
                "F1",
                "2024",
                "leclerc",
                "monaco"
            ]
        }
    ]
}
```

### 📅 Filtro per stagione:
Consente di filtrare le vittorie in base alla stagione di Formula 1.

#### Descrizione:
Restituisce tutte le vittorie relative all’anno selezionato.
#### Esempio:
`GET http://localhost:4416/posts?season=2024`
```json
{
"info": {
        "category": "season",
        "name": "2024",
        "totalWins": 5
    },
    "results": [
        {
            "id": 6,
            "titolo": "Carlos Sainz vince il GP d'Australia 2024",
            "contenuto": "Sainz realizza una grande prestazione ad Albert Park e vince con la SF24.",
            "modello": "SF24",
            "immagine": "img/f1/sainz-f1-melbourne-2024.webp",
            "tags": [
                "F1",
                "2024",
                "sainz",
                "australia"
            ]
        }
    ]
}

```

## 👁️ SHOW
### 🥇 Mostra una singola vittoria:
Permette di ottenere i dettagli di una specifica vittoria tramite l’ID del post.

#### Esempio:
`GET http://localhost:4416/posts/2`
```json
{
"id": 1,
    "titolo": "Charles Leclerc vince il GP del Bahrain 2022",
    "contenuto": "Leclerc porta la Ferrari alla vittoria nel GP del Bahrain con una performance dominante.",
    "modello": "SF22",
    "immagine": "img/f1/leclerc-f1-bahrain-2022.jpg",
    "tags": [
        "F1",
        "2022",
        "leclerc",
        "bahrain"
    ]
}
```

## 🗑️ DESTROY
### 🚫 Eliminazione di una vittoria:
Permette di eliminare un post specifico tramite l’ID.

#### Esempio:
`DELETE http://localhost:4416/posts/1` `204 No Content`
```json
{
}
```

## ⚠️ Gestione errori
### 💬 Messaggio di errore:
In caso di errore (ID non trovato, parametri errati, ecc.), l’API restituisce un messaggio chiaro.

### Esempio:
`404 Not Found`
```json
    {
    "error": "Not found",
    "message": "Vittoria inesistente"
    }
```