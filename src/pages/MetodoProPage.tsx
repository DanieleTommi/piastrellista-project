import React from 'react';

// Palette helpers (Tailwind classes mapping to requested palette)
// Primary dark: slate / zinc custom mix, Accent: yellow-600/500 tuned

const SectionWrapper: React.FC<React.PropsWithChildren<{ id?: string; tone?: 'light' | 'muted' | 'dark' }>> = ({ id, tone='light', children }) => {
  const base = 'w-full';
  const toneCls = tone === 'dark'
    ? 'bg-[#1B252C] text-white'
    : tone === 'muted'
      ? 'bg-[#F4F5F6]'
      : 'bg-white';
  return (
    <section id={id} className={`${base} ${toneCls} border-0`}>{children}</section>
  );
};

const Container: React.FC<React.PropsWithChildren<{ narrow?: boolean }>> = ({ children, narrow }) => (
  <div className={`mx-auto px-6 ${narrow ? 'max-w-3xl' : 'max-w-6xl'}`}>{children}</div>
);

// HERO
const Hero: React.FC<{ onPrimary?: () => void }> = ({ onPrimary }) => (
  <SectionWrapper id="hero">
    <Container>
      <div className="pt-24 md:pt-32 pb-20 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1E2A32] leading-[1.05]">Agenda piena e lavori più redditizi senza dipendere dal passaparola</h1>
          <p className="mt-6 text-base md:text-lg text-[#4B5560] leading-relaxed max-w-xl">Il metodo specializzato per piastrellisti professionisti che trasforma preventivi persi e mesi vuoti in sopralluoghi programmati e cantieri migliori.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <button onClick={onPrimary} className="inline-flex justify-center items-center rounded-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-[#1E2A32] font-semibold text-sm px-8 py-4 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 ring-offset-white transition">
              Prenota la Consulenza Gratuita di 15 Minuti
            </button>
            <p className="text-[11px] leading-normal text-[#6B7278] max-w-xs">Nessuna teoria: solo ciò che ha già generato sopralluoghi qualificati per altri professionisti.</p>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl border border-[#E2E5E8] bg-white shadow-sm p-6">
            <div className="h-40 w-full rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">Mockup Dashboard Richieste</div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-slate-600"><span>Richieste mese attuale</span><span className="font-semibold text-slate-900">18</span></div>
              <div className="flex items-center justify-between text-[11px] text-slate-600"><span>Sopralluoghi fissati</span><span className="font-semibold text-slate-900">11</span></div>
              <div className="flex items-center justify-between text-[11px] text-slate-600"><span>Tasso accettazione</span><span className="font-semibold text-slate-900">61%</span></div>
            </div>
            <div className="mt-4 text-[10px] text-slate-500">Dati di esempio a scopo illustrativo.</div>
          </div>
        </div>
      </div>
    </Container>
  </SectionWrapper>
);

// TESTIMONIANZE
interface Testimonial { title: string; text: string; author: string; }
const testimonials: Testimonial[] = [
  { title: 'Agenda piena 3 mesi prima', text: 'Prima alternavo settimane piene a periodi morti. Ora ho sopralluoghi fissati per i prossimi 90 giorni e scelgo i cantieri migliori.', author: 'Marco B. · Piastrellista · Verona' },
  { title: 'Meno preventivi sprecati', text: 'Meno curiosi e più persone decise. Ridotto del 55% i preventivi che sparivano senza risposta.', author: 'Luca R. · Piastrellista · Modena' },
  { title: 'Lavori più grandi e margini', text: 'Da bagni singoli a interi appartamenti. Due cantieri valgono già oltre €18.000.', author: 'Stefano G. · Piastrellista · Padova' },
  { title: 'Stop alla guerra dei prezzi', text: 'I clienti chiedono quando inizio, non quanto sconto faccio. Zero tempo perso con chi cerca il prezzo più basso.', author: 'Andrea T. · Piastrellista · Brescia' }
];

const TrustWall: React.FC = () => (
  <SectionWrapper id="fiducia" tone="light">
    <Container>
      <div className="py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-[#1E2A32]">Risultati Concreti da Piastrellisti come Te</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t,i)=>(
            <div key={i} className="relative flex flex-col h-full rounded-2xl border border-[#E2E5E8] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#1E2A32] leading-snug">{t.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5560]">“{t.text}”</p>
              <div className="mt-4 pt-4 border-t border-[#ECEEEF] text-[11px] font-medium text-[#6B7278]">{t.author}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[10px] text-center text-[#7A8187]">Testimonianze rappresentative. I risultati variano in base a zona, esperienza e implementazione.</p>
      </div>
    </Container>
  </SectionWrapper>
);

// CONFRONTO VECCHIO / NUOVO
const OldVsNew: React.FC = () => {
  const oldPoints = [
    'Vivere di passaparola sperando che arrivi qualcosa',
    'Fare preventivi e non sentir più nessuno',
    'Accettare lavori piccoli e mal pagati pur di non stare fermo',
    'Subire chi contratta sul prezzo al metro quadro',
    'Alternare settimane ingestibili a periodi vuoti'
  ];
  const newPoints = [
    'Flusso costante di richieste filtrate e intenzionate',
    'Sopralluoghi programmati con anticipo reale',
    'Lavori completi e coordinati invece di micro-interventi',
    'Valore percepito prima del prezzo: trattative più lineari',
    'Stabilità economica e capacità di scegliere'
  ];
  return (
    <SectionWrapper id="trasformazione" tone="muted">
      <Container>
        <div className="py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-[#1E2A32]">Il Vecchio Modo vs. Un Sistema che Funziona Davvero</h2>
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl bg-[#F4F5F6] p-8">
              <h3 className="text-lg font-semibold text-[#7A8187]">Il Vecchio Modo (Sperare e Adattarsi)</h3>
              <ul className="mt-6 space-y-4 text-sm text-[#4B5560]">
                {oldPoints.map((p,i)=>(
                  <li key={i} className="flex gap-3"><span className="text-red-600">❌</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-[#E2E5E8] p-8">
              <h3 className="text-lg font-semibold text-[#1E2A32]">Il Metodo Piastrellista Pro</h3>
              <ul className="mt-6 space-y-4 text-sm text-[#4B5560]">
                {newPoints.map((p,i)=>(
                  <li key={i} className="flex gap-3"><span className="text-emerald-600">✔</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

// 3 STEP SOLUZIONE
const Steps: React.FC = () => {
  const steps = [
    { title: 'Intercettiamo i Clienti Giusti', text: 'Analizziamo la tua zona e impostiamo campagne mirate che attirano proprietari in reale fase decisionale. Niente visite casuali.' },
    { title: 'Ti Portiamo Richieste Qualificate', text: 'Ogni richiesta arriva filtrata: tipologia lavoro, tempistiche e contesto. Tu parli solo con chi ha senso.' },
    { title: 'Tu Fai il Sopralluogo e Chiudi', text: 'Ti concentri sulla valutazione e sulla posa. Il sistema gestisce il flusso così eviti dispersione.' }
  ];
  return (
    <SectionWrapper id="come-funziona" tone="light">
      <Container>
        <div className="py-24">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-[#1E2A32]">Come Funziona (Senza Perdere Tempo)</h2>
          <div className="mt-16 relative">
            <div className="hidden md:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D2D6D9] to-transparent" />
            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((s,i)=>(
                <div key={i} className="relative rounded-xl border border-[#E2E5E8] bg-white p-8 shadow-sm">
                  <div className="h-14 w-14 rounded-full bg-[#24313A] text-white flex items-center justify-center text-sm font-semibold mb-6">{i+1}</div>
                  <h3 className="text-base font-semibold text-[#1E2A32] leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm text-[#4B5560] leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

// GARANZIA
const Guarantee: React.FC = () => (
  <SectionWrapper id="garanzia" tone="dark">
    <Container narrow>
      <div className="py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-14 w-14 rounded-full bg-[#172027] flex items-center justify-center mb-8 ring-1 ring-[#2D3941]">🏆</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">La Nostra Garanzia “Risultati Concreti”</h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-[#D1D7DB]">Applichiamo solo ciò che abbiamo testato con altri professionisti dell’edilizia. Se entro i primi 90 giorni non ricevi un numero ragionevole di richieste qualificate proporzionato alla tua zona e al budget concordato, lavoriamo gratuitamente il mese successivo finché non le otteniamo. Nessuna clausola nascosta. Nessuna promessa irreale. Solo responsabilità concreta sul risultato.</p>
          <p className="mt-6 text-[11px] text-[#7A8A93]">La quantità di richieste dipende da zona, popolazione, stagionalità e rapidità di risposta. Usiamo dati reali per impostare aspettative corrette.</p>
        </div>
      </div>
    </Container>
  </SectionWrapper>
);

// CHI SONO
const About: React.FC = () => (
  <SectionWrapper id="chi-sono" tone="muted">
    <Container>
      <div className="py-24 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="relative rounded-2xl overflow-hidden border border-[#E2E5E8] bg-white shadow-sm aspect-[3/4] flex items-center justify-center text-sm text-slate-500">Foto Consulente</div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1E2A32]">Perché Ho Creato il Metodo Piastrellista Pro</h2>
          <div className="mt-8 space-y-6 text-sm md:text-[15px] leading-relaxed text-[#4B5560]">
            <p>Mi chiamo [Il Tuo Nome] e negli ultimi anni ho lavorato a fianco di imprese edili e artigiani con lo stesso problema: dipendere dal passaparola e subire periodi morti tra un cantiere e l’altro. Ho scelto di specializzarmi in una sola figura: il piastrellista professionista.</p>
            <p>La posa di qualità è un lavoro di precisione che merita clienti adeguati, non gare al ribasso. Ho analizzato ciò che funziona davvero nella generazione di richieste qualificate e ho scartato tutto ciò che fa perdere tempo.</p>
            <p>Il “Metodo Piastrellista Pro” è la sintesi di processi concreti: intercettare dove nasce l’intenzione reale, filtrare prima del sopralluogo, rendere semplice programmare il lavoro.</p>
            <p>Oggi costruisco per i piastrellisti un flusso ordinato di sopralluoghi con clienti che stanno davvero valutando un intervento. Approccio misurabile, replicabile e sostenibile.</p>
            <p>Se sei stanco di alternare periodi imprevedibili e vuoi stabilità, selezione e margini migliori, allora questa consulenza è per te.</p>
          </div>
          <div className="mt-10 text-sm font-medium text-[#1E2A32]">[Il Tuo Nome] – Consulente Specializzato per Piastrellisti</div>
          <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-[#6B7278]">
            <span className="inline-flex items-center gap-1">+XXX richieste qualificate generate</span>
            <span className="inline-flex items-center gap-1">Processi ottimizzati edilizia</span>
            <span className="inline-flex items-center gap-1">Specializzazione 100%</span>
          </div>
        </div>
      </div>
    </Container>
  </SectionWrapper>
);

// CTA FINALE
const FinalCTA: React.FC<{ onPrimary?: () => void }> = ({ onPrimary }) => (
  <SectionWrapper id="cta-finale" tone="light">
    <Container>
      <div className="py-24">
        <div className="mx-auto max-w-3xl text-center rounded-3xl border border-[#E2E5E8] bg-white p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1E2A32]">Pronto a Smettere di Sperare e Iniziare a Pianificare?</h2>
            <p className="mt-6 text-base md:text-lg text-[#4B5560] leading-relaxed">Parliamo 15 minuti: vediamo se nella tua zona è realistico attivare un flusso stabile di richieste qualificate e con quali numeri.</p>
            <div className="mt-10">
              <button onClick={onPrimary} className="inline-flex justify-center items-center rounded-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-[#1E2A32] font-semibold text-sm px-10 py-4 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 ring-offset-white transition">
                Prenota Ora la Consulenza Gratuita
              </button>
              <p className="mt-4 text-[11px] leading-normal text-[#6B7278]">Nessun obbligo. Solo analisi concreta e, se ha senso, il piano per iniziare.</p>
            </div>
        </div>
      </div>
    </Container>
  </SectionWrapper>
);

// Main Page Component
export const MetodoProPage: React.FC = () => {
  const handlePrimary = () => {
    // placeholder: open modal / navigate to booking link
    console.log('[cta] open booking modal');
  };
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <Hero onPrimary={handlePrimary} />
      <TrustWall />
      <OldVsNew />
      <Steps />
      <Guarantee />
      <About />
      <FinalCTA onPrimary={handlePrimary} />
    </div>
  );
};

export default MetodoProPage;
