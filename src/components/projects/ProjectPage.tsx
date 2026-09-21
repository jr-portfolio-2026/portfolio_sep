import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Minus, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PROJECTS, type Project } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectPage({ project }: { project: Project }) {
  const [demoStep, setDemoStep] = useState(0);
  const index = PROJECTS.findIndex((item) => item.slug === project.slug);
  const previous = (PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length] ?? PROJECTS[0]) as Project;
  const next = (PROJECTS[(index + 1) % PROJECTS.length] ?? PROJECTS[0]) as Project;


  return (
    <div className="paper-surface min-h-screen overflow-x-hidden">
      <div className="grain-overlay fixed" aria-hidden />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-navy/10 bg-ivory/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-6 md:px-10">
          <Button asChild variant="ghost" className="rounded-none px-0 hover:bg-transparent">
            <Link to="/" hash="work"><ArrowLeft /> Portfolio</Link>
          </Button>
          <span className="font-serif text-xl text-relief">{project.name}</span>
          <span className="meta-label hidden opacity-50 sm:block">Project dossier</span>
        </div>
      </header>

      <main>
        <section className="relative px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
          <div className="mx-auto max-w-[90rem]">
            <div className="flex items-center justify-between border-b border-navy/10 pb-4">
              <span className="meta-label text-cobalt">0{index + 1} / 04</span>
              <span className="meta-label opacity-50">{project.status}</span>
            </div>
            <div className="mt-12 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
                <p className="meta-label text-gold">{project.category}</p>
                <h1 className="mt-6 font-serif text-[clamp(4.5rem,10vw,9rem)] leading-none font-light text-relief">{project.name}</h1>
                <p className="mt-8 max-w-xl text-base leading-8 text-navy-deep/75">{project.mandate}</p>
              </motion.div>
              <motion.div className="blue-portrait-frame relative aspect-[4/3] overflow-hidden" initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: 1.1, ease }}>
                <img src={project.image} alt={`${project.name} interface preview`} className="absolute inset-0 size-full object-cover" />
                <div className="chromatic-edge absolute inset-0" aria-hidden />
                <span className="glass-label absolute left-6 top-6">{project.accent}</span>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-cobalt px-6 py-24 text-cobalt-foreground md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div><span className="meta-label text-mist">Specifications</span><h2 className="mt-7 font-serif text-5xl font-light">The working system.</h2></div>
            <div className="grid gap-px bg-cobalt-foreground/15 sm:grid-cols-2">
              {project.specifications.map((item, itemIndex) => <div key={item} className="min-h-44 bg-cobalt p-7"><span className="font-serif text-xl text-gold">0{itemIndex + 1}</span><p className="mt-14 font-serif text-2xl leading-snug">{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[90rem]">
            <SectionMark number="02" title="Wireframes" note="Structure before finish" />
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              <Wireframe label="Entry / orientation" variant="entry" />
              <Wireframe label="Working view" variant="work" />
              <Wireframe label="Review / output" variant="output" />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10 md:py-36">
          <div className="mx-auto max-w-[90rem]">
            <SectionMark number="03" title="Controlled demo" note={project.status} />
            <div className="demo-stage mt-16 grid min-h-[38rem] overflow-hidden lg:grid-cols-[18rem_1fr]">
              <div className="border-b border-cobalt-foreground/15 p-6 lg:border-b-0 lg:border-r">
                <span className="meta-label text-mist">{project.demoLabel}</span>
                <ol className="mt-10 space-y-2">
                  {project.demoSteps.map((step, stepIndex) => (
                    <li key={step}>
                      <Button variant="ghost" onClick={() => setDemoStep(stepIndex)} aria-current={demoStep === stepIndex ? "step" : undefined} className={`h-auto w-full justify-start rounded-none px-3 py-4 text-left text-cobalt-foreground hover:bg-cobalt-foreground/10 hover:text-cobalt-foreground ${demoStep === stepIndex ? "bg-cobalt-foreground/10" : ""}`}>
                        <span className="meta-label text-cobalt-foreground/45">0{stepIndex + 1}</span>{step}
                      </Button>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="relative grid place-items-center p-7 md:p-14">
                <div className="demo-glass w-full max-w-3xl p-7 md:p-10">
                  <div className="flex items-center justify-between border-b border-cobalt-foreground/15 pb-5"><span className="meta-label text-cobalt-foreground/55">Demo mode</span><Play className="size-4 text-gold" /></div>
                  <motion.div key={demoStep} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="py-14 text-center">
                    <span className="font-serif text-7xl font-light text-cobalt-foreground">0{demoStep + 1}</span>
                    <h3 className="mt-6 font-serif text-3xl text-cobalt-foreground">{project.demoSteps[demoStep]}</h3>
                    <div className="mx-auto mt-10 max-w-lg space-y-3">
                      {[0, 1, 2].map((line) => <div key={line} className={`h-px bg-cobalt-foreground/20 ${line === 1 ? "mx-10" : ""}`} />)}
                    </div>
                  </motion.div>
                  <div className="flex justify-between border-t border-cobalt-foreground/15 pt-5"><span className="meta-label text-cobalt-foreground/45">Curated interaction</span><span className="meta-label text-mist">{demoStep + 1} / {project.demoSteps.length}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[90rem] gap-14 border-t border-navy/10 pt-16 lg:grid-cols-2">
            <div><span className="meta-label text-gold">Working now</span><p className="mt-7 max-w-xl font-serif text-3xl leading-snug text-navy-deep">{project.working}</p></div>
            <div><span className="meta-label text-cobalt">Limits / next</span><ul className="mt-7 space-y-5">{project.limitations.map((item) => <li key={item} className="flex gap-4 text-sm leading-7 text-muted-foreground"><Minus className="mt-2 size-3 shrink-0 text-gold" />{item}</li>)}</ul><p className="mt-9 flex gap-4 text-sm leading-7 text-navy-deep"><Check className="mt-1 size-4 shrink-0 text-cobalt" />{project.improve}</p></div>
          </div>
        </section>

        <nav className="border-t border-navy/10" aria-label="Project navigation">
          <div className="mx-auto grid max-w-[90rem] sm:grid-cols-2">
            <Button asChild variant="ghost" className="group h-auto min-h-40 justify-start rounded-none border-b border-navy/10 p-7 text-left sm:border-r sm:border-b-0">
              <Link to="/work/$slug" params={{ slug: previous.slug }}><ArrowLeft /><span><span className="meta-label block opacity-45">Previous</span><span className="mt-3 block font-serif text-3xl font-normal">{previous.name}</span></span></Link>
            </Button>
            <Button asChild variant="ghost" className="group h-auto min-h-40 justify-end rounded-none p-7 text-right">
              <Link to="/work/$slug" params={{ slug: next.slug }}><span><span className="meta-label block opacity-45">Next</span><span className="mt-3 block font-serif text-3xl font-normal">{next.name}</span></span><ArrowRight /></Link>
            </Button>
          </div>
        </nav>
      </main>
    </div>
  );
}

function SectionMark({ number, title, note }: { number: string; title: string; note: string }) {
  return <div className="grid items-baseline gap-5 md:grid-cols-[4rem_1fr_auto]"><span className="font-serif text-xl text-gold">{number}</span><h2 className="font-serif text-5xl font-light text-relief md:text-6xl">{title}</h2><span className="meta-label opacity-45">{note}</span></div>;
}

function Wireframe({ label, variant }: { label: string; variant: "entry" | "work" | "output" }) {
  return <article className="wireframe-sheet p-5"><div className="flex items-center justify-between border-b border-navy/10 pb-4"><span className="meta-label">{label}</span><span className="size-2 rounded-full bg-cobalt" /></div><div className="mt-6 aspect-[4/5] border border-navy/15 p-4"><div className="h-8 border border-navy/15 bg-mist/25" /><div className={`mt-4 grid h-[calc(100%-3rem)] gap-3 ${variant === "entry" ? "grid-rows-[1fr_2fr]" : variant === "work" ? "grid-cols-[.6fr_1.4fr]" : "grid-rows-[2fr_1fr]"}`}><div className="border border-navy/15 bg-ivory/60 p-3"><div className="h-2 w-1/2 bg-cobalt/25" /><div className="mt-3 h-px bg-navy/15" /></div><div className="border border-navy/15 bg-mist/20 p-3"><div className="grid h-full grid-cols-2 gap-2"><div className="border border-navy/10" /><div className="border border-navy/10" /></div></div></div></div></article>;
}
