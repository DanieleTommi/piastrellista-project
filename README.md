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
