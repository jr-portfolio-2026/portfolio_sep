import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { MonogramLoader } from "./MonogramLoader";

const WELCOMES: { word: string; lang: string }[] = [
  { word: "Welcome.", lang: "EN" },
  { word: "Bienvenue.", lang: "FR" },
  { word: "Ласкаво просимо.", lang: "UK" },
  { word: "Bienvenido.", lang: "ES" },
  { word: "Willkommen.", lang: "DE" },
  { word: "Benvenuto.", lang: "IT" },
  { word: "欢迎.", lang: "ZH" },
  { word: "أهلاً وسهلاً.", lang: "AR" },
];

const breath = {
  initial: { opacity: 0, y: 14, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -14, filter: "blur(6px)" },
};

export function IntroSequence({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<"welcome" | "loading" | "leaving">("welcome");
  const [hintVisible, setHintVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setHintVisible(true), 2600);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "welcome") return;
    const timer = window.setTimeout(() => {
      if (step < WELCOMES.length - 1) {
        setStep((currentStep) => currentStep + 1);
      } else {
        setPhase("loading");
      }
    }, 820);
    return () => window.clearTimeout(timer);
  }, [phase, step]);

  const advance = useCallback(() => {
    if (phase !== "welcome") return;
    setHintVisible(false);
    if (step < WELCOMES.length - 1) {
      setStep((s) => s + 1);
    } else {
      setPhase("loading");
    }
  }, [phase, step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        advance();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance]);

  const current = WELCOMES[step] ?? { word: "Welcome.", lang: "EN" };

  return (
    <motion.div
      className="paper-surface fixed inset-0 z-50 overflow-hidden select-none"
      onClick={advance}
      role="button"
      tabIndex={0}
      aria-label="Continue"
      exit={{ opacity: 0, filter: "blur(12px)", scale: 1.02 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{ cursor: phase === "welcome" ? "pointer" : "default" }}
    >
      <div className="grain-overlay" aria-hidden />
      <div className="fiber-overlay" aria-hidden />

      {/* faint monogram presence behind everything */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        animate={{ opacity: phase === "welcome" ? 0.012 : 0 }}
        transition={{ duration: 1.4 }}
      >
        <span className="font-serif text-[52vmin] leading-none tracking-[0.04em] text-navy">J.R</span>
      </motion.div>

      {/* corner metadata */}
      <Corner className="top-8 left-8 md:top-10 md:left-12">
        <span className="font-serif text-2xl tracking-[0.08em] text-relief">J.R</span>
      </Corner>
      <Corner className="top-8 right-8 text-right md:top-10 md:right-12">
        <span className="meta-label">Professional Portfolio</span>
        <span className="meta-label opacity-50">2026</span>
      </Corner>
      <Corner className="bottom-8 left-8 md:bottom-10 md:left-12">
        <span className="meta-label">Software · Data · International Trade · Law</span>
      </Corner>
      <Corner className="right-8 bottom-8 items-end text-right md:right-12 md:bottom-10">
        <span className="meta-label">EN · FR · UK</span>
        <span className="meta-label opacity-50 tabular-nums">
          {phase === "welcome"
            ? `${String(step + 1).padStart(2, "0")} / ${String(WELCOMES.length).padStart(2, "0")}`
            : "— / —"}
        </span>
      </Corner>

      {/* centre stage */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {phase === "welcome" ? (
            <motion.div
              key={current.lang}
              className="flex flex-col items-center gap-8"
              variants={breath}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                lang={current.lang.toLowerCase()}
                className="text-relief text-center font-serif text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[1.05] font-light tracking-[0.01em] text-balance"
              >
                {current.word}
              </h1>
              <div className="gold-hairline w-24" />
              <span className="meta-label opacity-60">{current.lang}</span>
            </motion.div>
          ) : (
            <MonogramLoader key="monogram" onComplete={onFinish} />
          )}
        </AnimatePresence>
      </div>

      {/* quiet hint */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-24 flex justify-center md:bottom-28"
        animate={{ opacity: hintVisible && phase === "welcome" ? 0.55 : 0 }}
        transition={{ duration: 1.2 }}
      >
        <span className="meta-label">Click to advance</span>
      </motion.div>
    </motion.div>
  );
}

function Corner({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div className={`absolute flex flex-col gap-1 animate-rise ${className}`}>{children}</div>
  );
}
