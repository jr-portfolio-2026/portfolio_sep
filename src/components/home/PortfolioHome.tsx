import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Globe2, Scale, User, Waypoints } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/projects";


const ease = [0.22, 1, 0.36, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease },
};

const DOMAINS = [
  { n: "I", icon: Scale, title: "International Law", text: "Comparative and cross-border analysis translated into clear, usable legal positions.", tags: ["Comparative analysis", "Institutions", "Legal research"] },
  { n: "II", icon: Globe2, title: "International Business", text: "Commercial questions examined through strategy, governance, and market context.", tags: ["Business models", "Strategy", "Governance"] },
  { n: "III", icon: Waypoints, title: "International Trade", text: "Trade flows, regulatory regimes, and operational constraints made legible.", tags: ["Trade mapping", "Compliance", "Cross-border"] },
  { n: "IV", icon: ArrowUpRight, title: "Software & Data Tools", text: "Quiet digital instruments that structure evidence, decisions, and recurring work.", tags: ["Applied software", "Data systems", "Prototyping"] },
];


const METHOD = ["Research", "Legal / commercial framing", "Data structuring", "Interface design", "Implementation", "Testing and iteration"];
const CAPABILITIES = ["Legal research and comparative analysis", "International trade mapping", "Business model analysis", "Product strategy", "Front-end development", "Data organisation", "Demo prototyping", "Documentation and presentation"];
const LANGUAGES = ["English", "Français", "中文", "हिन्दी", "Español", "العربية"];

export function PortfolioHome() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [language, setLanguage] = useState("English");
  const project = PROJECTS[projectIndex] ?? PROJECTS[0];
  if (!project) return null;

  const selectProject = (index: number) => {
    setProjectIndex(index);
    setDetailsOpen(true);
  };

  return (
    <div className="paper-surface relative min-h-screen overflow-x-hidden">
      <div className="grain-overlay fixed" aria-hidden />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-navy/5 bg-ivory/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-6 md:px-10">
          <a href="#top" className="font-serif text-2xl text-relief" aria-label="Jade Rakoto, top">J.R</a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {["Presentation", "Fields", "Work", "Method", "Context", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="meta-label opacity-60 transition-opacity hover:opacity-100">{item}</a>)}
          </nav>
          <span className="meta-label opacity-50">Portfolio / 2026</span>
        </div>
      </header>

      <main>
        <section id="top" className="relative flex min-h-[92svh] items-end px-6 pb-14 pt-28 md:px-10 md:pb-20">
          <div className="mx-auto w-full max-w-[90rem]">
            <div className="mb-12 flex items-center justify-between border-b border-navy/10 pb-4">
              <span className="meta-label">Professional dossier</span><span className="meta-label opacity-50">EN · FR · International</span>
            </div>
            <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease }}>
                <p className="meta-label mb-7 text-gold">Jade Rakoto</p>
                <h1 className="max-w-5xl font-serif text-[clamp(3.4rem,7vw,7.25rem)] leading-[.92] font-light text-relief">
                  Law, commerce and <em className="font-normal text-navy">systems</em> for work across borders.
                </h1>
              </motion.div>
              <motion.div className="lg:pb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 1 }}>
                <p className="font-serif text-2xl leading-snug text-navy-deep">A professional portfolio of legal, commercial, and software systems.</p>
                <p className="mt-5 max-w-lg text-sm leading-7 text-navy-deep/70">Selected work across international law, trade, business strategy, institutional practice, and applied digital tools.</p>
              </motion.div>
            </div>
          </div>
          <span aria-hidden className="pointer-events-none absolute right-[-2vw] top-[14%] font-serif text-[28vmin] leading-none text-navy/[0.025]">J.R</span>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-32" aria-label="Positioning statement">
          <motion.div {...reveal} className="dossier-visual mx-auto max-w-[90rem] overflow-hidden">
            <div className="dossier-grid absolute inset-0 opacity-60" aria-hidden />
            <div className="relative ml-auto flex min-h-[34rem] max-w-4xl items-end p-5 md:p-14">
              <div className="dossier-glass w-full p-7 md:p-12">
                <span className="meta-label">Position / 01</span>
                <p className="mt-8 font-serif text-3xl leading-tight text-navy-deep md:text-5xl">Analysis should not remain abstract. It should become a position, a structure, or an instrument that can be used.</p>
                <div className="mt-9 gold-hairline w-36" />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="presentation" className="px-6 py-24 md:px-10 md:py-36" aria-label="Presentation">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading index="I" title="Presentation" note="The person behind the dossier" />
            <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
              <motion.div {...reveal}>
                <p className="font-serif text-3xl leading-snug text-navy-deep md:text-4xl">
                  Trained between legal reasoning and commercial practice, working where international rules, trade realities, and digital instruments meet.
                </p>
                <p className="mt-9 max-w-xl text-sm leading-8 text-muted-foreground">
                  The work moves from research and comparative analysis to structured data and interfaces that professionals can actually use. Every study in this portfolio begins with a legal or commercial question and ends with something operable.
                </p>
                <div className="mt-10 gold-hairline w-36" />
                <div className="mt-10 grid gap-px border-t border-navy/10 bg-navy/10 sm:grid-cols-3">
                  {[
                    { k: "Focus", v: "Law · Trade · Systems" },
                    { k: "Practice", v: "Research to instrument" },
                    { k: "Contexts", v: "EN · FR · International" },
                  ].map((item) => (
                    <div key={item.k} className="bg-ivory p-5">
                      <span className="meta-label opacity-45">{item.k}</span>
                      <p className="mt-3 font-serif text-xl text-navy-deep">{item.v}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease }}
                className="relative mx-auto w-full max-w-lg"
              >
                <motion.div
                  aria-hidden
                  className="transition-glass absolute -inset-6 -z-10"
                  animate={{ opacity: [0.45, 0.75, 0.45], rotate: [-1.5, 1.5, -1.5] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="blue-portrait-frame relative aspect-[4/5] overflow-hidden">
                  <div className="dossier-grid absolute inset-0 opacity-40" aria-hidden />
                  <div className="absolute inset-0 grid place-items-center text-center">
                    <div>
                      <User className="mx-auto size-10 stroke-[0.9] text-cobalt/50" />
                      <p className="mt-6 font-serif text-4xl font-light text-navy-deep">J.R</p>
                      <span className="meta-label mt-4 block opacity-45">Portrait placeholder</span>
                    </div>
                  </div>
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                    animate={{ x: ["-120%", "320%"] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.5 }}
                  />
                  <span className="glass-label absolute bottom-6 left-6">Portrait / to be supplied</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        <section id="fields" className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading index="02" title="Field map" note="The intellectual territory" />
            <div className="mt-16 border-t border-navy/10">
              {DOMAINS.map((domain, i) => {
                const Icon = domain.icon;
                return <motion.article key={domain.title} {...reveal} transition={{ ...reveal.transition, delay: i * .07 }} className="group grid gap-6 border-b border-navy/10 py-9 md:grid-cols-[4rem_3rem_1fr_1.2fr] md:items-start">
                  <span className="font-serif text-xl text-gold">{domain.n}</span><Icon className="mt-1 size-5 stroke-[1.25] text-navy/55" />
                  <h3 className="font-serif text-3xl font-light text-relief md:text-4xl">{domain.title}</h3>
                  <div><p className="max-w-lg text-sm leading-7 text-muted-foreground">{domain.text}</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{domain.tags.map(tag => <span key={tag} className="meta-label opacity-45">{tag}</span>)}</div></div>
                </motion.article>;
              })}
            </div>
          </div>
        </section>

        <section id="work" className="py-24 md:py-36">
          <div className="mx-auto max-w-[90rem] px-6 md:px-10"><SectionHeading index="03" title="Selected tools" note="Four working studies" /></div>
          <div className="mx-auto mt-14 max-w-[90rem] border-y border-navy/10">
            <div className="grid lg:grid-cols-[17rem_1fr]">
              <div className="border-b border-navy/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
                <div className="flex gap-2 overflow-x-auto lg:flex-col" role="tablist" aria-label="Projects">
                  {PROJECTS.map((item, index) => <Button key={item.name} variant="ghost" role="tab" aria-selected={index === projectIndex} onClick={() => selectProject(index)} className={`h-auto min-w-40 justify-start rounded-none border-l px-5 py-4 text-left ${index === projectIndex ? "border-gold bg-mist/25" : "border-navy/10 hover:bg-ivory-deep"}`}><span><span className="meta-label block opacity-45">0{index + 1}</span><span className="mt-2 block font-serif text-2xl font-normal text-navy-deep">{item.name}</span><span className="mt-1 block text-xs font-normal text-muted-foreground">{item.status}</span></span></Button>)}
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.article key={project.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .45, ease }} className="grid lg:grid-cols-[1.15fr_.85fr]">
                  <div className="project-image group relative min-h-[26rem] overflow-hidden lg:min-h-[42rem]">
                    <img src={project.image} alt={`${project.name} project study`} loading="lazy" width={1600} height={1000} className="absolute inset-0 size-full object-cover transition duration-1000 group-hover:scale-[1.025]" />
                    <div className="chromatic-edge absolute inset-0" aria-hidden />
                    <span className="glass-label absolute left-6 top-6">{project.status}</span>
                  </div>
                  <div className="flex flex-col justify-between p-7 md:p-12">
                    <div><span className="meta-label text-gold">{project.category}</span><h3 className="mt-5 font-serif text-5xl font-light text-relief md:text-6xl">{project.name}</h3><p className="mt-3 text-xs uppercase text-muted-foreground">{project.relevance}</p><p className="mt-9 max-w-lg text-base leading-8 text-navy-deep/80">{project.problem}</p></div>
                    <div className="mt-12">
                      <Button asChild variant="outline" className="mb-3 w-full justify-between rounded-none border-cobalt/25 bg-mist/20 py-6 text-navy-deep backdrop-blur-md hover:bg-mist/35">
                        <Link to="/work/$slug" params={{ slug: project.slug }}>Open project dossier <ArrowUpRight /></Link>
                      </Button>
                      <Button variant="outline" onClick={() => setDetailsOpen(v => !v)} aria-expanded={detailsOpen} className="w-full justify-between rounded-none border-navy/15 bg-ivory/55 py-6 backdrop-blur-md hover:bg-mist/25 hover:backdrop-blur-2xl">Case notes <ChevronDown className={`transition-transform ${detailsOpen ? "rotate-180" : ""}`} /></Button>

                      <AnimatePresence initial={false}>{detailsOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="grid gap-7 border-x border-b border-navy/10 p-6 text-sm leading-6"><div><span className="meta-label opacity-45">Working now</span><p className="mt-2 text-muted-foreground">{project.working}</p></div><div><span className="meta-label opacity-45">Next refinement</span><p className="mt-2 text-muted-foreground">{project.improve}</p></div></div></motion.div>}</AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-between border-t border-navy/10 px-6 py-4">
              <span className="meta-label opacity-50">Manual selection · no autoplay</span><div className="flex gap-2"><Button size="icon" variant="ghost" aria-label="Previous project" onClick={() => selectProject((projectIndex - 1 + PROJECTS.length) % PROJECTS.length)}><ArrowLeft /></Button><Button size="icon" variant="ghost" aria-label="Next project" onClick={() => selectProject((projectIndex + 1) % PROJECTS.length)}><ArrowRight /></Button></div>
            </div>
          </div>
        </section>

        <section id="demo" className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[90rem]"><SectionHeading index="04" title="Demo room" note="Controlled public views" />
            <div className="mt-16 grid gap-px bg-navy/10 lg:grid-cols-4">{PROJECTS.map((item, index) => <motion.div {...reveal} key={item.name}><Button asChild variant="ghost" className="group h-full min-h-52 w-full justify-between rounded-none bg-ivory p-7 text-left hover:bg-mist/20"><Link to="/work/$slug" params={{ slug: item.slug }}><span className="flex size-full flex-col items-start"><span className="meta-label opacity-45">{item.status}</span><span className="mt-auto w-full"><span className="block font-serif text-3xl font-normal text-navy-deep">{item.name}</span><span className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4"><span className="text-xs font-normal text-muted-foreground">Open controlled demo</span><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span></span></span></Link></Button></motion.div>)}</div>
            <p className="mt-5 max-w-xl text-xs leading-5 text-muted-foreground">Live destinations will be connected as public builds are approved. Preview access remains intentionally curated.</p>
          </div>
        </section>

        <section id="method" className="bg-navy px-6 py-24 text-primary-foreground md:px-10 md:py-36">
          <div className="mx-auto max-w-[90rem]"><SectionHeading index="05" title="Method" note="Analysis into execution" inverse />
            <ol className="mt-20 grid gap-px bg-ivory/15 md:grid-cols-3">{METHOD.map((step, index) => <motion.li key={step} {...reveal} transition={{ ...reveal.transition, delay: index * .06 }} className="min-h-52 bg-navy p-7"><span className="font-serif text-xl text-gold">0{index + 1}</span><p className="mt-16 max-w-56 font-serif text-2xl leading-snug">{step}</p></motion.li>)}</ol>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10 md:py-36"><div className="mx-auto max-w-[90rem]"><SectionHeading index="06" title="Capabilities" note="Selective, not exhaustive" /><div className="mt-16 grid border-t border-navy/10 md:grid-cols-2">{CAPABILITIES.map((item, index) => <motion.div {...reveal} key={item} className={`flex items-baseline gap-5 border-b border-navy/10 py-6 ${index % 2 === 0 ? "md:pr-10" : "md:border-l md:pl-10"}`}><span className="meta-label text-gold">{String(index + 1).padStart(2,"0")}</span><p className="font-serif text-xl text-navy-deep md:text-2xl">{item}</p></motion.div>)}</div></div></section>

        <section id="context" className="px-6 py-24 md:px-10 md:py-36"><div className="mx-auto max-w-[90rem]"><SectionHeading index="07" title="Languages & contexts" note="Translations to follow" />
          <div className="mt-16 grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="max-w-md font-serif text-3xl leading-snug text-navy-deep">An international practice is also an exercise in interpretation: between languages, jurisdictions, institutions, and commercial realities.</p></div><div className="grid grid-cols-2 gap-px bg-navy/10 sm:grid-cols-3">{LANGUAGES.map((item, index) => <Button key={item} variant="ghost" onClick={() => setLanguage(item)} aria-pressed={language === item} className={`h-auto min-h-32 justify-start rounded-none p-5 text-left ${language === item ? "bg-mist/40" : "bg-ivory hover:bg-ivory-deep"}`}><span><span className="meta-label block opacity-40">0{index + 1}</span><span className="mt-8 block font-serif text-2xl font-normal text-navy-deep">{item}</span></span></Button>)}</div></div>
          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground"><Globe2 className="size-4" /> Interface selected: {language}. Full translations are planned.</div>
        </div></section>

        <section id="contact" className="px-6 pb-10 pt-24 md:px-10 md:pt-36"><div className="mx-auto max-w-[90rem] border-t border-navy/10 pt-16"><span className="meta-label text-gold">08 / Correspondence</span><div className="mt-10 grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-4xl font-serif text-4xl leading-tight text-relief md:text-6xl">Available for selected academic, institutional, and professional opportunities.</h2><a href="mailto:contact@example.com" className="mt-10 inline-block border-b border-gold pb-1 font-serif text-2xl text-navy-deep transition-colors hover:text-navy">contact@example.com</a></div><div className="flex flex-col items-start gap-4 lg:items-end"><a href="#" aria-label="GitHub placeholder" className="meta-label opacity-60 hover:opacity-100">GitHub / forthcoming</a><a href="#" aria-label="LinkedIn placeholder" className="meta-label opacity-60 hover:opacity-100">LinkedIn / forthcoming</a><span className="max-w-64 text-xs leading-5 text-muted-foreground lg:text-right">Extended demonstrations may be shared in a controlled review setting.</span></div></div>
          <footer className="mt-24 flex flex-col gap-4 border-t border-navy/10 pt-7 md:flex-row md:items-center md:justify-between"><span className="font-serif text-xl">J.R</span><span className="meta-label opacity-45">Law · Trade · Strategy · Software</span><span className="meta-label opacity-45">© 2026</span></footer>
        </div></section>
      </main>
    </div>
  );
}

function SectionHeading({ index, title, note, inverse = false }: { index: string; title: string; note: string; inverse?: boolean }) {
  return <motion.div {...reveal} className="grid items-baseline gap-5 md:grid-cols-[4rem_1fr_auto]"><span className="font-serif text-xl text-gold">{index}</span><h2 className={`font-serif text-4xl font-light md:text-6xl ${inverse ? "text-primary-foreground" : "text-relief"}`}>{title}</h2><span className={`meta-label ${inverse ? "text-primary-foreground opacity-50" : "opacity-45"}`}>{note}</span></motion.div>;
}
              <span className="meta-label">Professional dossier</span><span className="meta-label opacity-50">EN · FR · International</span>
            </div>
            <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease }}>
                <p className="meta-label mb-7 text-gold">X X</p>
                <h1 className="max-w-5xl font-serif text-[clamp(3.4rem,7vw,7.25rem)] leading-[.92] font-light text-relief">
                  Law, commerce and <em className="font-normal text-navy">systems</em> for work across borders.
                </h1>
              </motion.div>
              <motion.div className="lg:pb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 1 }}>
                <p className="font-serif text-2xl leading-snug text-navy-deep">A professional portfolio of legal, commercial, and software systems.</p>
                <p className="mt-5 max-w-lg text-sm leading-7 text-navy-deep/70">Selected work across international law, trade, business strategy, institutional practice, and applied digital tools.</p>
              </motion.div>
            </div>
          </div>
          <span aria-hidden className="pointer-events-none absolute right-[-2vw] top-[14%] font-serif text-[28vmin] leading-none text-navy/[0.025]">J.R</span>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-32" aria-label="Positioning statement">
          <motion.div {...reveal} className="dossier-visual mx-auto max-w-[90rem] overflow-hidden">
            <div className="dossier-grid absolute inset-0 opacity-60" aria-hidden />
            <div className="relative ml-auto flex min-h-[34rem] max-w-4xl items-end p-5 md:p-14">
              <div className="dossier-glass w-full p-7 md:p-12">
                <span className="meta-label">Position / 01</span>
                <p className="mt-8 font-serif text-3xl leading-tight text-navy-deep md:text-5xl">Analysis should not remain abstract. It should become a position, a structure, or an instrument that can be used.</p>
                <div className="mt-9 gold-hairline w-36" />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="fields" className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[90rem]">
            <SectionHeading index="02" title="Field map" note="The intellectual territory" />
            <div className="mt-16 border-t border-navy/10">
              {DOMAINS.map((domain, i) => {
                const Icon = domain.icon;
                return <motion.article key={domain.title} {...reveal} transition={{ ...reveal.transition, delay: i * .07 }} className="group grid gap-6 border-b border-navy/10 py-9 md:grid-cols-[4rem_3rem_1fr_1.2fr] md:items-start">
                  <span className="font-serif text-xl text-gold">{domain.n}</span><Icon className="mt-1 size-5 stroke-[1.25] text-navy/55" />
                  <h3 className="font-serif text-3xl font-light text-relief md:text-4xl">{domain.title}</h3>
                  <div><p className="max-w-lg text-sm leading-7 text-muted-foreground">{domain.text}</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{domain.tags.map(tag => <span key={tag} className="meta-label opacity-45">{tag}</span>)}</div></div>
                </motion.article>;
              })}
            </div>
          </div>
        </section>

        <section id="work" className="py-24 md:py-36">
          <div className="mx-auto max-w-[90rem] px-6 md:px-10"><SectionHeading index="03" title="Selected tools" note="Four working studies" /></div>
          <div className="mx-auto mt-14 max-w-[90rem] border-y border-navy/10">
            <div className="grid lg:grid-cols-[17rem_1fr]">
              <div className="border-b border-navy/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
                <div className="flex gap-2 overflow-x-auto lg:flex-col" role="tablist" aria-label="Projects">
                  {PROJECTS.map((item, index) => <Button key={item.name} variant="ghost" role="tab" aria-selected={index === projectIndex} onClick={() => selectProject(index)} className={`h-auto min-w-40 justify-start rounded-none border-l px-5 py-4 text-left ${index === projectIndex ? "border-gold bg-mist/25" : "border-navy/10 hover:bg-ivory-deep"}`}><span><span className="meta-label block opacity-45">0{index + 1}</span><span className="mt-2 block font-serif text-2xl font-normal text-navy-deep">{item.name}</span><span className="mt-1 block text-xs font-normal text-muted-foreground">{item.status}</span></span></Button>)}
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.article key={project.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .45, ease }} className="grid lg:grid-cols-[1.15fr_.85fr]">
                  <div className="project-image group relative min-h-[26rem] overflow-hidden lg:min-h-[42rem]">
                    <img src={project.image} alt={`${project.name} project study`} loading="lazy" width={1600} height={1000} className="absolute inset-0 size-full object-cover transition duration-1000 group-hover:scale-[1.025]" />
                    <div className="chromatic-edge absolute inset-0" aria-hidden />
                    <span className="glass-label absolute left-6 top-6">{project.status}</span>
                  </div>
                  <div className="flex flex-col justify-between p-7 md:p-12">
                    <div><span className="meta-label text-gold">{project.category}</span><h3 className="mt-5 font-serif text-5xl font-light text-relief md:text-6xl">{project.name}</h3><p className="mt-3 text-xs uppercase text-muted-foreground">{project.relevance}</p><p className="mt-9 max-w-lg text-base leading-8 text-navy-deep/80">{project.problem}</p></div>
                    <div className="mt-12">
                      <Button variant="outline" onClick={() => setDetailsOpen(v => !v)} aria-expanded={detailsOpen} className="w-full justify-between rounded-none border-navy/15 bg-ivory/55 py-6 backdrop-blur-md hover:bg-mist/25 hover:backdrop-blur-2xl">Case notes <ChevronDown className={`transition-transform ${detailsOpen ? "rotate-180" : ""}`} /></Button>
                      <AnimatePresence initial={false}>{detailsOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="grid gap-7 border-x border-b border-navy/10 p-6 text-sm leading-6"><div><span className="meta-label opacity-45">Working now</span><p className="mt-2 text-muted-foreground">{project.working}</p></div><div><span className="meta-label opacity-45">Next refinement</span><p className="mt-2 text-muted-foreground">{project.improve}</p></div></div></motion.div>}</AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-between border-t border-navy/10 px-6 py-4">
              <span className="meta-label opacity-50">Manual selection · no autoplay</span><div className="flex gap-2"><Button size="icon" variant="ghost" aria-label="Previous project" onClick={() => selectProject((projectIndex - 1 + PROJECTS.length) % PROJECTS.length)}><ArrowLeft /></Button><Button size="icon" variant="ghost" aria-label="Next project" onClick={() => selectProject((projectIndex + 1) % PROJECTS.length)}><ArrowRight /></Button></div>
            </div>
          </div>
        </section>

        <section id="demo" className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[90rem]"><SectionHeading index="04" title="Demo room" note="Controlled public views" />
            <div className="mt-16 grid gap-px bg-navy/10 lg:grid-cols-4">{PROJECTS.map((item, index) => <motion.div {...reveal} key={item.name}><Button variant="ghost" onClick={() => { selectProject(index); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }} className="group h-full min-h-52 w-full justify-between rounded-none bg-ivory p-7 text-left hover:bg-mist/20"><span className="flex size-full flex-col items-start"><span className="meta-label opacity-45">{index === 0 ? "Public demo" : index === 2 ? "Internal build" : "Work in progress"}</span><span className="mt-auto w-full"><span className="block font-serif text-3xl font-normal text-navy-deep">{item.name}</span><span className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4"><span className="text-xs font-normal text-muted-foreground">Curated preview</span><ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span></span></span></Button></motion.div>)}</div>
            <p className="mt-5 max-w-xl text-xs leading-5 text-muted-foreground">Live destinations will be connected as public builds are approved. Preview access remains intentionally curated.</p>
          </div>
        </section>

        <section id="method" className="bg-navy px-6 py-24 text-primary-foreground md:px-10 md:py-36">
          <div className="mx-auto max-w-[90rem]"><SectionHeading index="05" title="Method" note="Analysis into execution" inverse />
            <ol className="mt-20 grid gap-px bg-ivory/15 md:grid-cols-3">{METHOD.map((step, index) => <motion.li key={step} {...reveal} transition={{ ...reveal.transition, delay: index * .06 }} className="min-h-52 bg-navy p-7"><span className="font-serif text-xl text-gold">0{index + 1}</span><p className="mt-16 max-w-56 font-serif text-2xl leading-snug">{step}</p></motion.li>)}</ol>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10 md:py-36"><div className="mx-auto max-w-[90rem]"><SectionHeading index="06" title="Capabilities" note="Selective, not exhaustive" /><div className="mt-16 grid border-t border-navy/10 md:grid-cols-2">{CAPABILITIES.map((item, index) => <motion.div {...reveal} key={item} className={`flex items-baseline gap-5 border-b border-navy/10 py-6 ${index % 2 === 0 ? "md:pr-10" : "md:border-l md:pl-10"}`}><span className="meta-label text-gold">{String(index + 1).padStart(2,"0")}</span><p className="font-serif text-xl text-navy-deep md:text-2xl">{item}</p></motion.div>)}</div></div></section>

        <section id="context" className="px-6 py-24 md:px-10 md:py-36"><div className="mx-auto max-w-[90rem]"><SectionHeading index="07" title="Languages & contexts" note="Translations to follow" />
          <div className="mt-16 grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="max-w-md font-serif text-3xl leading-snug text-navy-deep">An international practice is also an exercise in interpretation: between languages, jurisdictions, institutions, and commercial realities.</p></div><div className="grid grid-cols-2 gap-px bg-navy/10 sm:grid-cols-3">{LANGUAGES.map((item, index) => <Button key={item} variant="ghost" onClick={() => setLanguage(item)} aria-pressed={language === item} className={`h-auto min-h-32 justify-start rounded-none p-5 text-left ${language === item ? "bg-mist/40" : "bg-ivory hover:bg-ivory-deep"}`}><span><span className="meta-label block opacity-40">0{index + 1}</span><span className="mt-8 block font-serif text-2xl font-normal text-navy-deep">{item}</span></span></Button>)}</div></div>
          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground"><Globe2 className="size-4" /> Interface selected: {language}. Full translations are planned.</div>
        </div></section>

        <section id="contact" className="px-6 pb-10 pt-24 md:px-10 md:pt-36"><div className="mx-auto max-w-[90rem] border-t border-navy/10 pt-16"><span className="meta-label text-gold">08 / Correspondence</span><div className="mt-10 grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end"><div><h2 className="max-w-4xl font-serif text-4xl leading-tight text-relief md:text-6xl">Available for selected academic, institutional, and professional opportunities.</h2><a href="mailto:contact@example.com" className="mt-10 inline-block border-b border-gold pb-1 font-serif text-2xl text-navy-deep transition-colors hover:text-navy">contact@example.com</a></div><div className="flex flex-col items-start gap-4 lg:items-end"><a href="#" aria-label="GitHub placeholder" className="meta-label opacity-60 hover:opacity-100">GitHub / forthcoming</a><a href="#" aria-label="LinkedIn placeholder" className="meta-label opacity-60 hover:opacity-100">LinkedIn / forthcoming</a><span className="max-w-64 text-xs leading-5 text-muted-foreground lg:text-right">Extended demonstrations may be shared in a controlled review setting.</span></div></div>
          <footer className="mt-24 flex flex-col gap-4 border-t border-navy/10 pt-7 md:flex-row md:items-center md:justify-between"><span className="font-serif text-xl">J.R</span><span className="meta-label opacity-45">Law · Trade · Strategy · Software</span><span className="meta-label opacity-45">© 2026</span></footer>
        </div></section>
      </main>
    </div>
  );
}

function SectionHeading({ index, title, note, inverse = false }: { index: string; title: string; note: string; inverse?: boolean }) {
  return <motion.div {...reveal} className="grid items-baseline gap-5 md:grid-cols-[4rem_1fr_auto]"><span className="font-serif text-xl text-gold">{index}</span><h2 className={`font-serif text-4xl font-light md:text-6xl ${inverse ? "text-primary-foreground" : "text-relief"}`}>{title}</h2><span className={`meta-label ${inverse ? "text-primary-foreground opacity-50" : "opacity-45"}`}>{note}</span></motion.div>;
}
