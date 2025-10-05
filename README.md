# Piastrellista Project

Landing page standalone "Sistema Anti-Passaparola per Piastrellisti" estratta dall'app principale.

## Stack
- Vite + React 18 + TypeScript
- TailwindCSS 3

## Avvio
```
npm install
npm run dev
```
Apri http://localhost:5173

## Build
```
npm run build
npm run preview
```

## Salvare modifiche e inviare su GitHub

Flusso rapido (lavori sul branch `main` da solo):
```
# 1. Verifica cosa è cambiato (opzionale)
git status

# 2. Aggiungi tutti i file modificati
git add .

# 3. Crea un commit con un messaggio chiaro
git commit -m "feat: descrizione breve della modifica"

# 4. Invia (push) al repository remoto
git push
```

Se è il primo push dopo il clone potrebbe servirti:
```
git push -u origin main
```
(`-u` imposta il collegamento tra il branch locale e quello remoto.)

### Linee guida messaggi commit
Prefissi consigliati: `feat:` nuova funzione, `fix:` correzione, `chore:` manutenzione, `docs:` documentazione, `refactor:` riorganizzazione senza nuove feature.

### Lavorare su una feature separata (opzionale)
```
git checkout -b feat/nuova-sezione
# ...modifiche...
git add .
git commit -m "feat: aggiunta sezione"
git push -u origin feat/nuova-sezione
```
Poi apri una Pull Request su GitHub per unire la branch in `main`.

### Aggiornare prima di lavorare (se collabori)
```
git pull --rebase origin main
```

### Configurare autore (solo una volta se non impostato)
```
git config --global user.name "Il Tuo Nome"
git config --global user.email "la-tua-email@esempio.com"
```

### Se usi HTTPS e chiede password
GitHub richiede un Personal Access Token (PAT) al posto della password. Crea il token in: Settings > Developer settings > Personal access tokens (classic) con scope `repo` e usalo come password.

## Struttura
- `src/pages/LandingPage.tsx` pagina principale
- `src/components/landing/Blocks.tsx` componenti UI riutilizzabili
- `tailwind.config.cjs` palette brand blu (brand-700 = #0079C2)

## Personalizzazioni future
- Aggiungi form di lead (Netlify Forms, Formspree, Supabase edge) sotto il componente `FinalCTA`
- Implementa tracking (Plausible / Umami) inserendo script in `index.html`
- Aggiungi favicon e immagini social OG

## Licenza
Proprietario (uso interno) – non distribuire pubblicamente senza revisione.
