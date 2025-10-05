import React, { useState, useEffect } from 'react';

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900 text-white px-3 py-1 text-[11px] font-medium tracking-wide">
    {children}
  </span>
);

export const PrimaryCTA: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
  >
    <span>{children}</span>
    <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
  </a>
);

export const GhostLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition">
    {children}
  </a>
);

export const Section: React.FC<{ id?: string; children: React.ReactNode; tone?: 'subtle'|'muted'|'contrast' }> = ({ id, children, tone }) => {
  const toneCls = tone === 'contrast'
    ? 'bg-zinc-950 text-white'
    : tone === 'muted'
      ? 'bg-zinc-50'
      : tone === 'subtle'
        ? 'bg-white'
        : 'bg-white';
  return (
    <section id={id} className={"relative px-6 py-24 md:py-32 " + toneCls}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{ kicker?: string; title: string; gradient?: boolean; invert?: boolean }> = ({ kicker, title, gradient, invert }) => (
  <div className="max-w-3xl">
    {kicker && <p className={"text-[11px] font-medium tracking-wide uppercase mb-3 " + (invert ? 'text-zinc-400' : 'text-zinc-500')}>{kicker}</p>}
    <h2 className={"text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] " + (gradient ? 'bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent' : invert ? 'text-white' : 'text-zinc-900')}>
      {title}
    </h2>
  </div>
);

export const LiCard: React.FC<{ index: number; text: string; variant?: 'danger' | 'default' }> = ({ index, text }) => (
  <li className="group relative list-none">
    <div className="relative h-full overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-[2px]">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white text-[11px] font-medium mb-3">{index}</span>
      <p className="text-sm leading-relaxed text-zinc-700">{text}</p>
    </div>
  </li>
);

export const TimelineStep: React.FC<{ number: number; title: string; body: string }> = ({ number, title, body }) => (
  <li className="relative pl-14 md:pl-16">
    <div className="absolute left-0 top-0 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-zinc-900 text-white text-sm font-medium">{number}</div>
    <div className="rounded-lg bg-white p-5 border border-zinc-200 shadow-sm">
      <h3 className="text-base md:text-lg font-semibold tracking-tight text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{body}</p>
    </div>
  </li>
);

export const CredibilityPanel = () => (
  <div className="relative overflow-hidden rounded-2xl border border-zinc-800/40 bg-zinc-950 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
    <h3 className="text-lg font-semibold text-white tracking-tight">Perché funziona</h3>
    <p className="mt-4 text-sm leading-relaxed text-zinc-400">Posizionamento chiaro. Dimostrazione qualità prima del prezzo. Richieste organizzate. Rimuove incertezza e riduce preventivi sprecati.</p>
    <ul className="mt-5 space-y-2 text-sm text-zinc-300">
      <li className="flex items-start gap-2"><Check /> Processo replicabile</li>
      <li className="flex items-start gap-2"><Check /> Filtra clienti non in target</li>
      <li className="flex items-start gap-2"><Check /> Valore percepito anticipato</li>
      <li className="flex items-start gap-2"><Check /> Semplicità operativa</li>
    </ul>
  </div>
);

export const FeatureCard: React.FC<{ text: string }> = ({ text }) => (
  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-[2px]">
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900 text-white text-[11px]">★</div>
      <span className="text-sm font-semibold tracking-tight text-zinc-900">Elemento</span>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-zinc-700">{text}</p>
  </div>
);

export const FinalCTA = () => (
  <section id="cta" className="relative overflow-hidden bg-zinc-100">
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">Ogni settimana senza sistema è un altro slot perso.</h2>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">Inizia a costruire richieste prevedibili: parti dalla guida gratuita e applica i primi elementi oggi stesso.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
          <PrimaryCTA href="#">Scarica la guida</PrimaryCTA>
          <p className="text-[11px] leading-normal text-zinc-500 max-w-xs">Nessuno spam. Solo contenuti utili e applicabili.</p>
        </div>
      </div>
    </div>
  </section>
);

export const TrustBar = () => (
  <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-medium text-zinc-500">
    <div className="flex items-center gap-1.5"><Shield /> Nessuno spam</div>
    <div className="flex items-center gap-1.5"><Clock /> 5 min lettura</div>
    <div className="flex items-center gap-1.5"><Spark /> Processo replicabile</div>
    <div className="flex items-center gap-1.5"><Check /> Validato su cantieri</div>
  </div>
);

export const StickyMobileCTA: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <div className={"fixed bottom-4 left-0 right-0 z-40 px-4 sm:hidden transition " + (scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none')}> 
    <div className="rounded-xl border border-zinc-200 bg-white/95 backdrop-blur shadow-md p-4 flex items-center gap-4">
      <div className="flex-1 text-[13px] leading-snug font-medium text-zinc-800">Scarica la guida.</div>
      <PrimaryCTA href="#">PDF</PrimaryCTA>
    </div>
  </div>
);

export const NavAnchorBar = () => (
  <nav className="pointer-events-none fixed top-0 left-0 right-0 z-30 hidden lg:block">
    <div className="mx-auto max-w-6xl px-6 pt-5 flex justify-end">
      <ul className="pointer-events-auto flex gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3 py-1.5 shadow-sm text-[11px] font-medium text-zinc-600">
        <li><a href="#dolore" className="hover:text-zinc-900 px-2 py-1 rounded-full transition">Problemi</a></li>
        <li><a href="#desiderio" className="hover:text-zinc-900 px-2 py-1 rounded-full transition">Risultato</a></li>
        <li><a href="#meccanismo" className="hover:text-zinc-900 px-2 py-1 rounded-full transition">Leve</a></li>
        <li><a href="#prova" className="hover:text-zinc-900 px-2 py-1 rounded-full transition">Perché</a></li>
        <li><a href="#offerta" className="hover:text-zinc-900 px-2 py-1 rounded-full transition">Contenuto</a></li>
        <li><a href="#testimonianze" className="hover:text-zinc-900 px-2 py-1 rounded-full transition">Testimonianze</a></li>
  <li><a href="#cta" className="px-2 py-1 rounded-full bg-zinc-900 text-white hover:bg-black transition">Guida</a></li>
      </ul>
    </div>
  </nav>
);

export const GradientBackground = () => null; // Removed heavy decorative gradients for minimal design

export const CornerDecoration = () => (
  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1/2">
    <div className="mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-brand-300/50 to-transparent" />
  </div>
);

// FAQ & Gallery (simple placeholders)
export const FAQSection: React.FC<{ items: { q: string; a: string }[] }> = ({ items }) => (
  <div className="mt-12 divide-y divide-zinc-200 border border-zinc-200 rounded-xl bg-white">
    {items.map((it, i) => <FAQItem key={i} {...it} />)}
  </div>
);

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-5">
      <button onClick={() => setOpen(o=>!o)} className="w-full flex items-center justify-between text-left">
        <span className="text-sm font-medium text-zinc-900">{q}</span>
        <span className="text-zinc-400 text-xs">{open ? '−' : '+'}</span>
      </button>
      <div className={"overflow-hidden transition-all " + (open ? 'mt-3 max-h-60' : 'max-h-0')}> 
        <p className="text-sm leading-relaxed text-zinc-600">{a}</p>
      </div>
    </div>
  );
};

export const GallerySection: React.FC<{ items: { title: string; meta: string }[] }> = ({ items }) => (
  <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((g,i)=> (
      <div key={i} className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition">
        <div className="aspect-[4/3] bg-zinc-100 flex items-center justify-center text-[11px] text-zinc-400 tracking-wide">Foto lavoro</div>
        <div className="p-4">
          <h4 className="text-sm font-semibold text-zinc-900 tracking-tight">{g.title}</h4>
          <p className="mt-1 text-[12px] text-zinc-500">{g.meta}</p>
        </div>
      </div>
    ))}
  </div>
);

// Countdown (24h persistent)
export const Countdown: React.FC<{ storageKey?: string }> = ({ storageKey = 'countdownStart' }) => {
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    const now = Date.now();
    const stored = localStorage.getItem(storageKey);
    let start = stored ? parseInt(stored, 10) : NaN;
    if (!stored || isNaN(start) || now - start > 24 * 60 * 60 * 1000) {
      start = now;
      localStorage.setItem(storageKey, String(start));
    }
    const tick = () => {
      const elapsed = Date.now() - start;
      const left = Math.max(0, 24 * 60 * 60 * 1000 - elapsed);
      setRemaining(left);
      if (left === 0) {
        // Reset automatically creating evergreen scarcity style
        const newStart = Date.now();
        localStorage.setItem(storageKey, String(newStart));
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [storageKey]);
  const hours = String(Math.floor(remaining / 3600000)).padStart(2,'0');
  const minutes = String(Math.floor((remaining % 3600000) / 60000)).padStart(2,'0');
  const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2,'0');
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2 text-[13px] font-medium text-zinc-700 shadow-sm">
      <span className="text-zinc-500">Disponibile ancora per</span>
      <span className="tabular-nums font-semibold text-zinc-900">{hours}:{minutes}:{seconds}</span>
    </div>
  );
};

// Modal lead capture
export const LeadModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [consenso, setConsenso] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  if (!open) return null;
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consenso) return;
    // Placeholder: integration point for backend / newsletter provider
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail('');
      setNome('');
      setConsenso(false);
    }, 1600);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:w-auto sm:max-w-lg rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-200 flex flex-col overflow-hidden">
        <div className="px-6 pt-6 pb-4">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900">Quasi Fatto!</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">Inserisci i tuoi dati per ricevere subito la <span className="font-medium text-zinc-900">Guida Operativa Gratuita</span> “Sistema Anti-Passaparola” + checklist rapida.</p>
        </div>
        <form onSubmit={submit} className="px-6 pb-6 space-y-5">
          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-zinc-700">Nome</label>
            <input value={nome} onChange={e=>setNome(e.target.value)} required className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Es. Marco" />
          </div>
          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-zinc-700">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="tuo@email.it" />
          </div>
          <p className="text-[12px] leading-relaxed text-zinc-600">Riceverai il metodo in 3 leve per ridurre preventivi sprecati e pianificare cantieri migliori.</p>
          <label className="flex items-start gap-2 text-[11px] text-zinc-600">
            <input type="checkbox" checked={consenso} onChange={e=>setConsenso(e.target.checked)} className="mt-0.5" />
            <span>Sì, acconsento al trattamento dei miei dati personali e a ricevere comunicazioni via email per accedere alla guida e ad altri contenuti di valore.</span>
          </label>
          <button disabled={!consenso || submitted} className="w-full rounded-full bg-zinc-900 text-white text-sm font-semibold py-3.5 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {submitted && <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />}
            <span>{submitted ? 'Invio...' : 'Sì, Inviami la Guida Operativa Gratuita'}</span>
          </button>
          <p className="text-[10px] text-zinc-500">Le tue informazioni sono al sicuro. Niente spam, solo contenuti applicabili.</p>
        </form>
        <button onClick={onClose} className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-600 text-sm">✕</button>
      </div>
    </div>
  );
};

// Icons
const Check = () => <svg className="h-4 w-4 text-brand-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12.5 10 17l9-10" /></svg>;
const Spark = () => <svg className="h-4 w-4 text-brand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83"/></svg>;
const Shield = () => <svg className="h-4 w-4 text-brand-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 5 3.6 9.4 8 10 4.4-.6 8-5 8-10V6l-8-3Z"/></svg>;
const Clock = () => <svg className="h-4 w-4 text-brand-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>;
