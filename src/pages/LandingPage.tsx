import React, { useEffect, useState } from 'react';
import { Badge, PrimaryCTA, GhostLink, Section, SectionHeader, LiCard, TimelineStep, CredibilityPanel, FeatureCard, FinalCTA, TrustBar, StickyMobileCTA, GradientBackground, CornerDecoration, FAQSection, GallerySection, Countdown, LeadModal } from '../components/landing/Blocks';

// New auxiliary lightweight components for Phase 1 enhancements
const StatBar: React.FC<{ stats: { label: string; value: string }[] }> = ({ stats }) => (
  <div className="mt-12 grid gap-6 sm:grid-cols-3">
    {stats.map((s,i) => (
      <div key={i} className="text-center rounded-xl border border-zinc-200 bg-white/60 backdrop-blur px-4 py-5 shadow-sm">
        <div className="text-xs font-medium tracking-wide uppercase text-brand-600">{s.label}</div>
        <div className="mt-2 text-xl font-bold tracking-tight text-zinc-900">{s.value}</div>
      </div>
    ))}
  </div>
);

const Mechanism: React.FC = () => (
  <Section id="meccanismo" tone="muted">
    <SectionHeader kicker="Le 3 leve" title="Come funziona il Sistema Anti-Passaparola" />
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold tracking-tight text-zinc-900">Visibilità mirata</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">Presidio dei punti in cui il cliente cerca un posatore affidabile: ricerche locali, portfolio ottimizzato, segnali professionali coerenti.</p>
      </div>
      <div className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold tracking-tight text-zinc-900">Dimostrazione qualità</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">Galleria lavori strutturata (prima/dopo, dettagli fuga, tagli complessi) che fa percepire il valore prima del preventivo.</p>
      </div>
      <div className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold tracking-tight text-zinc-900">Canalizzazione richieste</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">Modulo filtrante + follow-up semplice per evitare perdite di tempo e riempire gli slot giusti con anticipo.</p>
      </div>
    </div>
  </Section>
);

const Testimonials: React.FC = () => (
  <Section id="testimonianze" tone="subtle">
    <SectionHeader kicker="Risultati reali" title="Cosa dicono i professionisti che hanno applicato il metodo" />
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {[{
        name: 'Luca R.', role: 'Ristrutturazioni interni', text: 'Prima vivevo di piccole urgenze. In 6 settimane ho organizzato foto lavori, filtrato richieste e ora pianifico i cantieri migliori con margini più chiari.'
      },{
        name: 'Marco P.', role: 'Posatore pavimenti', text: 'Ridotto del 50% i preventivi “inutili”. Le persone arrivano già convinte che la posa precisa si paga. Molto meno tempo sprecato al telefono.'
      }].map((t,i)=>(
        <div key={i} className="relative h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-zinc-700">“{t.text}”</p>
          <div className="mt-4 text-xs font-semibold tracking-wide text-brand-700">{t.name} · <span className="font-normal text-zinc-500">{t.role}</span></div>
        </div>
      ))}
    </div>
  </Section>
);

const painPoints = [
  'Perdi ore a fare preventivi che poi si trasformano in un "le faremo sapere", perché il cliente ha scelto chi costava 2€ in meno al metro quadro.',
  'La tua agenda è un\'altalena: un mese sei pieno da non respirare e quello dopo ti ritrovi con dei "buchi" imprevisti che mettono ansia.',
  'Il passaparola è imprevedibile. A volte funziona, a volte ti lascia a secco, costringendoti ad accettare lavori piccoli e poco redditizi pur di non stare fermo.',
  'Ti senti frustrato perché i clienti non capiscono la differenza tra una posa a regola d\'arte e un lavoro "arrangiato", guardando solo al prezzo finale.'
];
const desires = [
  'Un flusso costante di richieste da clienti qualificati. Persone che cercano proprio te per la tua abilità e sono disposte a pagare il giusto prezzo per un lavoro di qualità.',
  'Un\'agenda piena con 3-6 mesi di anticipo. Puoi pianificare il lavoro con serenità, scegliere i cantieri migliori e dire "no" ai perditempo.',
  'Lavori più grandi e soddisfacenti. Invece del solito bagnetto, ti chiamano per interi appartamenti, ville e nuove costruzioni dove puoi davvero dimostrare quanto vali.',
  'Essere riconosciuto come il punto di riferimento nella tua zona. Non più uno dei tanti, ma "IL" piastrellista che tutti consigliano per i lavori importanti.'
];
const steps = [
  { number: 1, title: 'Fatti Trovare dai Clienti Giusti', body: 'Ti mostro come intercettare le persone che stanno cercando attivamente un piastrellista esperto nella tua zona, proprio nel momento in cui ne hanno bisogno.' },
  { number: 2, title: 'Mostra la Tua Maestria (Senza Fare il Venditore)', body: 'Imparerai a presentare i tuoi lavori in modo che il valore della tua posa sia indiscutibile, ancor prima di parlare del prezzo. Il preventivo diventerà una formalità.' },
  { number: 3, title: 'Riempi l\'Agenda in Automatico', body: 'Metterai in piedi un sistema che ti porta richieste di preventivo qualificate in modo costante e prevedibile, liberandoti per sempre dall\'ansia del passaparola.' }
];
const offerBullets = [
  'L\'errore che fa sprecare fino al 60% dei preventivi (e il semplice elemento visivo che lo evita).',
  'Schema della galleria lavori: ordine, etichette e 3 tipi di scatto che aumentano la percezione prima della trattativa.',
  'Filtro richieste: domande chiave per evitare clienti che cercano solo il prezzo più basso.',
  'Follow-up essenziale: sequenza breve che mantiene viva la trattativa senza diventare invadente.',
  'Checklist foto (prima/dopo, dettaglio fuga, taglio complesso) da replicare cantiere dopo cantiere.',
  'Pianificazione slot: come comunicare disponibilità limitata senza forzature artificiali.'
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <div className="relative min-h-screen w-full bg-white text-zinc-900 selection:bg-zinc-900/10">
      <GradientBackground />
  {/* NavAnchorBar rimosso come richiesto */}
      <StickyMobileCTA scrolled={scrolled} />
      {/* HERO REFACTORED */}
      {/* HERO REFINED: single column headline + below split image/note */}
      <section className="relative overflow-hidden border-b border-zinc-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-20">
          <div className="flex flex-wrap items-center gap-4">
            <Countdown />
            <span className="text-[11px] font-medium tracking-wide uppercase text-zinc-500">A tutti i Piastrellisti Stanchi di Preventivi a Vuoto</span>
          </div>
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-zinc-900">
              Scopri come riempire l'agenda con cantieri migliori senza svendere il tuo lavoro
            </h1>
            <p className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed max-w-2xl">Il sistema “Anti-Passaparola” per attirare richieste qualificate e programmare lavori redditizi – anche se oggi dipendi ancora da referenze casuali.</p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2 items-start">
            <div className="order-1 md:order-1">
              <div className="relative aspect-[3/4] w-full max-w-sm rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center shadow-sm">
                <div className="text-center px-6">
                  <div className="mx-auto h-16 w-16 rounded-xl bg-zinc-900 text-white flex items-center justify-center text-xs font-medium tracking-wide">PDF</div>
                  <p className="mt-6 text-sm font-medium text-zinc-500">Mockup 3D della guida<br/>“Il Sistema Anti-Passaparola”</p>
                </div>
              </div>
            </div>
            <div className="order-2 md:order-2 max-w-lg">
              <p className="text-sm font-medium text-zinc-500">NOTA: Questo è l'ESATTO Sistema STEP-BY-STEP che ho usato per aiutare Imprese di Ristrutturazioni a generare un flusso costante di contatti qualificati per lavori importanti... Liberandoli dalla schiavitù dei preventivi al ribasso e riempiendo la loro agenda.</p>
              <div className="mt-6">
                <button onClick={()=>setModalOpen(true)} className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
                  Sì, Voglio la Guida Operativa Gratuita
                  <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
                </button>
                <p className="mt-4 text-[11px] leading-normal text-zinc-500 max-w-xs">Clicca qui, Inserisci la tua Email Migliore e Accedi Subito alla Guida in PDF (100% Gratis).</p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[{ label: 'Cantieri recenti', value: '+47' },{ label: 'Richieste qualificate', value: '+180' },{ label: 'Giorni medi slot', value: '5' }].map((s,i)=>(
                  <div key={i} className="text-center rounded-xl border border-zinc-200 bg-white px-4 py-5 shadow-sm">
                    <div className="text-[11px] font-medium tracking-wide uppercase text-zinc-500">{s.label}</div>
                    <div className="mt-2 text-lg font-bold tracking-tight text-zinc-900">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  <Section id="dolore" tone="muted">
        <SectionHeader kicker="Problemi quotidiani" title="Se sei un piastrellista, scommetto che questa è la tua settimana tipo..." />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {painPoints.map((p, i) => (
            <LiCard key={i} index={i+1} text={p} />
          ))}
        </ul>
      </Section>

      {/* BULLET LIST / PREVIEW */}
  <Section id="anteprima">
        <SectionHeader kicker="Anteprima" title="Ecco un'anteprima di quello che scoprirai all'interno:" />
        <div className="mt-12 space-y-10">
          {[
            { n:'1#', t:'La Formula in 3 Semplici Passi per attirare clienti che cercano la QUALITÀ (e non lo sconto) senza dover fare il venditore… anche se non hai un sito web!' },
            { n:'2#', t:'L’Errore Fatale nel farsi pubblicità – Una strategia ignorata dal 95% degli Artigiani… Applica questa correzione IMMEDIATA per smettere di attirare perditempo ed EVITARE di sprecare tempo prezioso.' },
            { n:'3#', t:'Il Mito Infondato del “Passaparola”: Scopri perché affidarti solo a questo ti sta facendo perdere i cantieri migliori e come costruire un’alternativa PREVEDIBILE per la tua agenda... Come confermato dai professionisti di successo!' },
            { n:'4#', t:'Come EVITARE la trappola dei portali che ti mettono in competizione con altri 10 colleghi… e diventare finalmente la prima e unica scelta per i clienti che contano davvero nella tua zona.' },
            { n:'5#', t:'RIVELATO: Il Falso Mito del “Devi spendere tanto in pubblicità” che blocca i piastrellisti... E come una semplice strategia a basso costo può portarti più richieste qualificate di quante tu possa gestire.' }
          ].map((b,i)=>(
            <div key={i} className="relative pl-14">
              <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white text-sm font-medium">{b.n}</div>
              <p className="text-sm leading-relaxed text-zinc-700">{b.t}</p>
            </div>
          ))}
          <p className="text-sm font-medium text-zinc-500">…E mooolto, molto di più!</p>
        </div>
        <div className="mt-12">
          <button onClick={()=>setModalOpen(true)} className="rounded-full bg-zinc-900 text-white text-sm font-semibold px-8 py-3.5 hover:bg-black transition">Sì, Voglio la Guida Operativa Gratuita</button>
        </div>
      </Section>

      {/* AUTHOR / SYSTEM ORIGIN */}
  <Section id="autore">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHeader kicker="Da dove nasce" title="Da Dove Nasce Questo Sistema (E Perché Funziona)" />
            <div className="mt-8 space-y-6 text-sm md:text-[15px] leading-relaxed text-zinc-700">
              <p>Daniele Tomasi non è un piastrellista, ma uno stratega specializzato nell'aiutare le piccole imprese edili e gli artigiani a liberarsi dalla dipendenza dal passaparola e dai clienti che trattano sul prezzo.</p>
              <p>Negli ultimi anni, Daniele ha applicato con successo il 'Sistema Anti-Passaparola' per diverse imprese di ristrutturazioni, generando per loro un flusso costante e prevedibile di contatti da clienti privati per lavori importanti (interi appartamenti e ville).</p>
              <p>La sua esperienza gli ha permesso di capire una cosa fondamentale: il meccanismo per trovare un cliente disposto a pagare per una ristrutturazione di qualità è lo stesso che serve a te per trovare chi vuole una posa a regola d'arte in quella stessa casa.</p>
              <p>Ecco SOLO ALCUNI dei principi alla base di questo sistema…</p>
              <ul className="space-y-3 text-zinc-700">
                <li><span className="font-semibold">Principio #1:</span> Intercettare la domanda consapevole (anziché sperare che qualcuno parli di te).</li>
                <li><span className="font-semibold">Principio #2:</span> Comunicare il VALORE prima ancora di parlare del PREZZO.</li>
                <li><span className="font-semibold">Principio #3:</span> Creare un sistema AUTOMATICO che lavora per te anche quando sei in cantiere.</li>
              </ul>
              <p>Daniele è il creatore del 'Sistema Anti-Passaparola', il primo e unico sistema in Italia progettato per aiutare i piastrellisti a riempire l'agenda con clienti migliori e più redditizi.</p>
            </div>
            <div className="mt-10">
              <button onClick={()=>setModalOpen(true)} className="rounded-full bg-zinc-900 text-white text-sm font-semibold px-8 py-3.5 hover:bg-black transition">Sì, Voglio la Guida Operativa Gratuita</button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h3 className="text-base font-semibold tracking-tight text-zinc-900">Il Sistema in sintesi</h3>
            <ol className="mt-6 space-y-8">
              {steps.map(s => (
                <li key={s.number} className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white text-sm font-medium">{s.number}</div>
                  <p className="text-sm font-semibold text-zinc-900 tracking-tight">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* TRASPARENZA / AUTORITÀ */}
  <Section id="prova" tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHeader kicker="Trasparenza" title="Da dove nasce il sistema (e perché funziona)" invert />
            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-zinc-200">
              <p>Il metodo nasce dall'esperienza su imprese di ristrutturazione con la stessa sfida: passare da richieste casuali a pipeline prevedibile di cantieri ad alto valore.</p>
              <p>Si concentra solo su ciò che incide davvero: posizionamento chiaro, dimostrazione visiva prima della trattativa, canale ordinato di richieste qualificate.</p>
              <p>Funziona perché rende evidente la differenza tra posa professionale e lavoro improvvisato prima che il prezzo diventi l'unico criterio.</p>
            </div>
          </div>
          <CredibilityPanel />
        </div>
      </Section>

  <Section id="offerta">
        <SectionHeader kicker="Cosa scoprirai" title={'Dentro la guida: elementi subito applicabili'} />
        <p className="mt-6 text-lg text-zinc-600 max-w-2xl">Struttura essenziale, zero fronzoli: implementi anche con giornate piene in cantiere.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offerBullets.map((b, i) => (
            <FeatureCard key={i} text={b} />
          ))}
        </div>
      </Section>

  <Section id="gallery" tone="muted">
        <SectionHeader kicker="Dimostrazione" title="Come deve apparire una galleria che vende qualità" />
        <p className="mt-6 text-lg text-zinc-600 max-w-2xl">Struttura modulare: ogni cantiere racconta processo, dettagli e risultato finale in modo leggibile anche per chi non è tecnico.</p>
        <GallerySection items={[
          { title: 'Bagno design 14 mq', meta: 'Prima/Dopo · Fuga ridotta' },
          { title: 'Soggiorno grande formato', meta: '120x120 · Tagli puliti' },
          { title: 'Scala interna', meta: 'Rivestimento completo' },
          { title: 'Doccia filo pavimento', meta: 'Pendenza ottimizzata' },
          { title: 'Esterno gres 2cm', meta: 'Posa su supporti' },
          { title: 'Cucina esagonale', meta: 'Pattern complesso' }
        ]} />
      </Section>

  <Section id="faq">
        <SectionHeader kicker="Domande frequenti" title="Prima di scaricare potresti chiederti…" />
        <FAQSection items={[
          { q: 'Quanto tempo serve per applicarlo?', a: 'I primi elementi (galleria strutturata e filtro richieste) li imposti in un weekend. Il resto si integra via via nei cantieri già programmati.' },
          { q: 'Serve fare pubblicità a pagamento?', a: 'No. Le leve iniziali sono organiche: visibilità locale ottimizzata + dimostrazione qualità + canalizzazione richieste.' },
          { q: 'Funziona anche se ho pochi lavori fotografati?', a: 'Sì: ti mostro come documentare i prossimi 2 cantieri per costruire rapidamente la base visiva credibile.' },
          { q: 'È un corso lungo?', a: 'No, è una guida operativa sintetica. Less is more: solo ciò che serve per generare richieste utili.' },
          { q: 'Perdo tempo se già ho passaparola?', a: 'Al contrario: organizzi, rendi prevedibile e filtri. Il passaparola rimane, ma non è più l\'unica gamba.' }
        ]} />
      </Section>

      {/* FINAL CTA DUPLICATED */}
      <Section id="cta" tone="contrast">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-[11px] font-medium tracking-wide uppercase text-zinc-400">Accedi SUBITO alla Tua Copia GRATUITA...</p>
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] text-white">SVELATO: “Ecco FINALMENTE Come i Piastrellisti Possono Riempire l'Agenda con Cantieri più Redditizi grazie al mio Sistema “Anti-Passaparola”... e Dire Addio per Sempre alla Guerra dei Prezzi al Metro Quadro...</h2>
            <p className="mt-6 text-sm font-medium text-zinc-400">(Anche se odi la tecnologia e pensi che l'unica alternativa al passaparola sia buttare soldi in pubblicità inutile!)</p>
            <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-xl">NOTA: Questo è l'ESATTO Sistema STEP-BY-STEP che ho usato per aiutare Imprese di Ristrutturazioni a generare un flusso costante di contatti qualificati per lavori importanti... Liberandoli dalla schiavitù dei preventivi al ribasso e riempiendo la loro agenda.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <button onClick={()=>setModalOpen(true)} className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
                Sì, Voglio la Guida Operativa Gratuita
                <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
              </button>
              <p className="text-[11px] leading-normal text-zinc-400 max-w-xs">Clicca qui, Inserisci la tua Email e Accedi Subito alla Guida (100% Gratis).</p>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <div className="relative aspect-[3/4] w-full rounded-2xl border border-zinc-800/60 bg-zinc-900 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="mx-auto h-16 w-16 rounded-xl bg-white text-zinc-900 flex items-center justify-center text-xs font-medium tracking-wide">PDF</div>
                <p className="mt-6 text-sm font-medium text-zinc-400">Mockup 3D della guida<br/>“Il Sistema Anti-Passaparola”</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <LeadModal open={modalOpen} onClose={()=>setModalOpen(false)} />
    </div>
  );
}
