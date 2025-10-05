import React, { useEffect, useState } from 'react';
import { Badge, PrimaryCTA, GhostLink, Section, SectionHeader, LiCard, TimelineStep, CredibilityPanel, FeatureCard, FinalCTA, TrustBar, StickyMobileCTA, NavAnchorBar, GradientBackground, CornerDecoration } from '../components/landing/Blocks';

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
  'L\'Errore N°1 che il 99% dei piastrellisti commette online e che attira solo "cacciatori di sconti" (e come evitarlo da subito).',
  'La strategia "Calamita di Cantieri": il metodo pratico e a basso costo per farti trovare dai clienti con alto potere di spesa nella tua esatta zona di lavoro.',
  'Come creare "preventivi che si vendono da soli", facendo capire al cliente il valore del tuo lavoro ancora prima di leggere il prezzo.',
  'Il piano d\'azione da 15 minuti al giorno per costruire un sistema che ti porterà clienti in modo automatico, anche mentre sei in cantiere a posare.'
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
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,121,194,0.22),transparent_65%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 md:pt-36 md:pb-40">
          <div className="max-w-4xl">
            <Badge>Guida Gratuita • Edizione 2025</Badge>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              <span className="block">Stanco di Clienti che Trattano sul Prezzo?</span>
              <span className="mt-3 block bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent pb-5">Trasforma la Tua Agenda con Cantieri che Pagano il Giusto.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
              Smetti di dipendere dal passaparola e inizia ad attirare clienti che cercano e pagano per la tua qualità, senza più "buchi" in agenda o preventivi a vuoto.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <PrimaryCTA href="#cta">SCARICA ORA LA GUIDA GRATUITA</PrimaryCTA>
              <GhostLink href="#soluzione">Scopri il metodo</GhostLink>
            </div>
            <TrustBar />
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

      <Section id="prova" tone="contrast">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHeader kicker="Trasparenza" title="Massima Trasparenza: Da Dove Nasce Questo Sistema?" invert />
            <p className="mt-8 text-base md:text-lg leading-relaxed text-zinc-200">Onestamente? Non ho ancora il caso studio specifico di un piastrellista. Ma voglio dirti perché sono sicuro che questo sistema funzionerà anche per te. L'ho sviluppato e applicato con successo per diverse imprese di ristrutturazioni. Il problema era identico: trovare clienti privati, per lavori importanti (interi appartamenti e case), che non cercassero solo il prezzo più basso. Il sistema ha permesso loro di generare un flusso costante di contatti qualificati, eliminando la dipendenza da portali e passaparola. Il meccanismo per attrarre un cliente che deve rifare una casa è lo stesso che serve a te per trovare chi deve pavimentare quella stessa casa. La logica non cambia.</p>
          </div>
          <CredibilityPanel />
        </div>
      </Section>

      <Section id="offerta">
        <SectionHeader kicker="Cosa contiene" title={'Tutto quello che ti serve è nel "Sistema Anti-Passaparola"'} gradient />
        <p className="mt-6 text-lg text-zinc-600">Ecco cosa scoprirai all'interno:</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offerBullets.map((b, i) => (
            <FeatureCard key={i} text={b} />
          ))}
        </div>
      </Section>

      <FinalCTA />
    </div>
  );
}
