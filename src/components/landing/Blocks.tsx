import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-brand-700/10 ring-1 ring-inset ring-brand-700/30 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-brand-700">
    {children}
  </span>
);

export const PrimaryCTA: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-7 py-4 text-sm font-semibold text-white shadow-[0_4px_18px_-4px_rgba(0,121,194,0.55)] transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
  >
    <span>{children}</span>
    <span className="text-brand-200 opacity-0 group-hover:opacity-100 transition">→</span>
  </a>
);

export const GhostLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-brand-700">{children}</a>
);

export const Section: React.FC<{ id?: string; children: React.ReactNode; tone?: 'subtle'|'muted'|'contrast' }> = ({ id, children, tone }) => {
  const toneCls = tone === 'contrast'
    ? 'bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white'
    : tone === 'muted'
      ? 'bg-zinc-50'
      : tone === 'subtle'
        ? 'bg-white'
        : 'bg-white';
  return (
    <section id={id} className={"relative px-6 py-24 md:py-32 " + toneCls}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{ kicker?: string; title: string; gradient?: boolean; invert?: boolean }> = ({ kicker, title, gradient, invert }) => (
  <div className="max-w-4xl">
    {kicker && <p className={"text-xs font-semibold tracking-widest uppercase mb-4 " + (invert ? 'text-brand-400' : 'text-brand-700')}>{kicker}</p>}
    <h2 className={"text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] " + (gradient ? 'bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent' : invert ? 'text-white' : 'text-zinc-900')}>
      {title}
    </h2>
  </div>
);

export const LiCard: React.FC<{ index: number; text: string; variant?: 'danger' | 'default' }> = ({ index, text }) => (
  <li className="group relative list-none">
    <div className="relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_3px_15px_-6px_rgba(0,0,0,0.12)] transition hover:border-brand-300 hover:shadow-[0_8px_30px_-6px_rgba(0,121,194,0.25)]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-500 text-white text-sm font-bold shadow-md ring-4 ring-white mb-4">{index}</span>
      <p className="text-sm leading-relaxed text-zinc-700">{text}</p>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_80%_0%,rgba(0,121,194,0.15),transparent_70%)]" />
    </div>
  </li>
);

export const TimelineStep: React.FC<{ number: number; title: string; body: string }> = ({ number, title, body }) => (
  <li className="relative pl-16 md:pl-20">
    <div className="absolute left-0 top-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 text-white font-bold shadow ring-4 ring-white">{number}</div>
    <div className="rounded-xl bg-white p-6 border border-brand-200 shadow-[0_4px_18px_-6px_rgba(0,121,194,0.25)]">
      <h3 className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-zinc-600">{body}</p>
    </div>
  </li>
);

export const CredibilityPanel = () => (
  <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_60px_-15px_rgba(0,0,0,0.6)]">
    <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-gradient-to-br from-brand-700/40 to-brand-500/30 blur-3xl" />
    <h3 className="text-xl font-semibold text-white tracking-tight">Perché funziona anche se il tuo lavoro è manuale</h3>
    <p className="mt-4 text-sm leading-relaxed text-zinc-300">Il marketing efficace per artigiani non è show: è posizionamento chiaro + dimostrazione visiva della qualità eseguita + meccanismo semplice di richiesta preventivo. Il sistema unisce questi elementi con rigore.</p>
    <ul className="mt-6 space-y-3 text-sm text-zinc-200">
      <li className="flex items-start gap-3"><Check /> Processo replicabile (non basato sulla fortuna)</li>
      <li className="flex items-start gap-3"><Check /> Posizionamento = filtro naturale dei clienti economici</li>
      <li className="flex items-start gap-3"><Check /> Dimostrazione visiva che precede la trattativa</li>
      <li className="flex items-start gap-3"><Check /> Automazione semplice richieste qualificate</li>
    </ul>
  </div>
);

export const FeatureCard: React.FC<{ text: string }> = ({ text }) => (
  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_4px_16px_-6px_rgba(0,0,0,0.15)] transition hover:border-brand-700 hover:shadow-[0_10px_40px_-10px_rgba(0,121,194,0.35)]">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 ring-1 ring-inset ring-brand-200 text-brand-700"><Spark /></div>
      <span className="text-sm font-semibold tracking-tight text-zinc-900">Contenuto chiave</span>
    </div>
    <p className="mt-4 text-sm leading-relaxed text-zinc-700">{text}</p>
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_0%_0%,rgba(0,121,194,0.14),transparent_70%)]" />
  </div>
);

export const FinalCTA = () => (
  <section id="cta" className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500" />
    <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_70%)]" />
    <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">Pronto a dare una svolta alla tua agenda?</h2>
        <p className="mt-6 text-lg md:text-xl text-brand-50 leading-relaxed">Scarica la guida gratuita e smetti di competere sul prezzo. Inizia a competere sulla qualità.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
          <PrimaryCTA href="#">SCARICA ORA IL TUO PDF GRATUITO</PrimaryCTA>
          <p className="text-[11px] leading-normal text-brand-100 max-w-xs">La tua privacy è al sicuro. Odiamo lo spam quanto te. Riceverai solo la guida e comunicazioni di valore per la tua attività.</p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
  </section>
);

export const TrustBar = () => (
  <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-medium text-zinc-500">
    <div className="flex items-center gap-1.5"><Shield /> Niente spam</div>
    <div className="flex items-center gap-1.5"><Clock /> Leggibile in 5 min</div>
    <div className="flex items-center gap-1.5"><Spark /> Metodo replicabile</div>
    <div className="flex items-center gap-1.5"><Check /> Già validato in ristrutturazioni</div>
  </div>
);

export const StickyMobileCTA: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className={"fixed bottom-4 left-0 right-0 z-40 px-4 sm:hidden transition " + (scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none')}> 
    <div className="rounded-2xl border border-zinc-200 bg-white/95 backdrop-blur shadow-[0_10px_35px_-8px_rgba(0,0,0,0.25)] p-4 flex items-center gap-4">
      <div className="flex-1 text-[13px] leading-snug font-medium text-zinc-800">Scarica la guida e riempi l'agenda.</div>
      <PrimaryCTA href="#">PDF</PrimaryCTA>
    </div>
  </div>
);

export const NavAnchorBar = () => (
  <nav className="pointer-events-none fixed top-0 left-0 right-0 z-30 hidden lg:block">
    <div className="mx-auto max-w-7xl px-6 pt-6 flex justify-end">
      <ul className="pointer-events-auto flex gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1.5 shadow-sm text-[11px] font-medium text-zinc-600">
        <li><a href="#dolore" className="hover:text-zinc-900 px-2 py-1 rounded-full hover:bg-zinc-100 transition">Problemi</a></li>
        <li><a href="#desiderio" className="hover:text-zinc-900 px-2 py-1 rounded-full hover:bg-zinc-100 transition">Risultato</a></li>
        <li><a href="#soluzione" className="hover:text-zinc-900 px-2 py-1 rounded-full hover:bg-zinc-100 transition">Metodo</a></li>
        <li><a href="#prova" className="hover:text-zinc-900 px-2 py-1 rounded-full hover:bg-zinc-100 transition">Prova</a></li>
        <li><a href="#offerta" className="hover:text-zinc-900 px-2 py-1 rounded-full hover:bg-zinc-100 transition">Contenuto</a></li>
        <li><a href="#cta" className="text-brand-700 hover:text-brand-700 px-2 py-1 rounded-full hover:bg-brand-700/10 transition">Scarica</a></li>
      </ul>
    </div>
  </nav>
);

export const GradientBackground = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-brand-700/25 via-brand-500/10 to-transparent blur-3xl" />
    <div className="absolute top-1/3 -right-64 h-[620px] w-[620px] rounded-full bg-gradient-to-br from-brand-500/10 via-brand-600/20 to-transparent blur-3xl" />
  </div>
);

export const CornerDecoration = () => (
  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1/2">
    <div className="mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-brand-300/50 to-transparent" />
  </div>
);

// Icons
const Check = () => <svg className="h-4 w-4 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12.5 10 17l9-10" /></svg>;
const Spark = () => <svg className="h-4 w-4 text-brand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83"/></svg>;
const Shield = () => <svg className="h-4 w-4 text-brand-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 5 3.6 9.4 8 10 4.4-.6 8-5 8-10V6l-8-3Z"/></svg>;
const Clock = () => <svg className="h-4 w-4 text-brand-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>;
