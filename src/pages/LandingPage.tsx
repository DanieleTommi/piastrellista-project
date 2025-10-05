import React, { useEffect, useState } from 'react';
import { Badge, PrimaryCTA, GhostLink, Section, SectionHeader, LiCard, TimelineStep, CredibilityPanel, FeatureCard, FinalCTA, TrustBar, StickyMobileCTA, NavAnchorBar, GradientBackground, CornerDecoration } from '../components/landing/Blocks';

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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white text-zinc-900 selection:bg-brand-700/30">
      <GradientBackground />
      <NavAnchorBar />
      <StickyMobileCTA scrolled={scrolled} />
      {/* HERO REFACTORED */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,121,194,0.18),transparent_65%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 md:pt-36 md:pb-40">
          <div className="max-w-3xl">
            <Badge>Sistema Anti-Passaparola · Guida 2025</Badge>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="block">Riempire l'agenda senza</span>
              <span className="mt-2 block bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">trattare ogni volta sul prezzo.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl">
              Un sistema pratico in 3 leve per attirare richieste qualificate e bloccare cantieri con margini sani – anche se oggi vivi di passaparola irregolare.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <PrimaryCTA href="#cta">Scarica la guida</PrimaryCTA>
              <GhostLink href="#meccanismo">Come funziona</GhostLink>
            </div>
            <StatBar stats={[
              { label: 'Cantieri recenti', value: '+47' },
              { label: 'Richieste qualificate', value: '+180' },
              { label: 'Giorni medi slot', value: '5' }
            ]} />
          </div>
        </div>
        <CornerDecoration />
      </section>

      <Section id="dolore" tone="subtle">
        <SectionHeader kicker="Problemi quotidiani" title="Se sei un piastrellista, scommetto che questa è la tua settimana tipo..." />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {painPoints.map((p, i) => (
            <LiCard key={i} index={i+1} text={p} />
          ))}
        </ul>
      </Section>

      <Section id="desiderio">
        <SectionHeader kicker="Scenario ideale" title="E se invece potessi lavorare così?" gradient />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {desires.map((d, i) => (
            <LiCard key={i} index={i+1} text={d} />
          ))}
        </ul>
      </Section>

      <Section id="soluzione" tone="muted">
        <div className="max-w-3xl">
          <SectionHeader kicker="Metodo in 3 passi" title="Non è Magia, è un Sistema Testato sul Campo." />
          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">Ho creato un metodo in 3 passi, facile da applicare, pensato per chi lavora in cantiere e non ha tempo da perdere con teorie di marketing complicate.</p>
        </div>
        <div className="mt-14 relative">
          <ol className="space-y-10 before:absolute before:left-[19px] md:before:left-[29px] before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-brand-300/40 before:via-brand-400/50 before:to-brand-300/40">
            {steps.map(s => (
              <TimelineStep key={s.number} {...s} />
            ))}
          </ol>
        </div>
      </Section>

      {/* TRASPARENZA / AUTORITÀ */}
      <Section id="prova" tone="contrast">
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
        <SectionHeader kicker="Cosa scoprirai" title={'Dentro la guida: elementi subito applicabili'} gradient />
        <p className="mt-6 text-lg text-zinc-600 max-w-2xl">Struttura essenziale, zero fronzoli: implementi anche con giornate piene in cantiere.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offerBullets.map((b, i) => (
            <FeatureCard key={i} text={b} />
          ))}
        </div>
      </Section>

      <Mechanism />

      <Testimonials />

      <FinalCTA />
    </div>
  );
}
