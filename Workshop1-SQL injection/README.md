# Vad finns?
Den har ett REST-api uteslutande för tabellen products. Följande routes är tillgängliga:

GET /api/products
GET /api/products/:id
DELETE /api/products/:id
Vad vet vi?
Du ska försöka hacka applikationen utifrån att det enda du vet/tror är att databasen är SQLite. I övrigt känner du inte till koden som driver REST-api/backend (tjuvkika INTE i den).

# Del 1 – Hitta SQL-injections
Obs! Gör steg 1–4 utan att titta på koden i index.js!

Steg 1
Få REST-gränssnittet att returnera en lista över alla tabeller och vyer.
Steg 2
Få REST-gränssnittet att returnera en lista över alla kolumner och datatyper i alla tabeller.
Steg 3
Få REST-gränssnittet att returnera en lista över alla användare i databasen.
Steg 4
Få REST-gränssnittet att radera alla produkter med en enda fråga.

# Del 2 – Säkra upp
Utifrån dina egna rapporter från steg 1–4:

Vad behöver säkras upp?
Kan du räkna ut hur man säkrar upp det?
Nu kan du titta i index.js-filen som innehåller koden för backend/REST-api och de SQL-frågor som ställs. Vad är fel med dem ur ett säkerhetsperspektiv?
