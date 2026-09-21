import { AnimatePresence, motion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";

export function PageTransition() {
  const isLoading = useRouterState({ select: (state) => state.isLoading });

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="page-transition fixed inset-0 z-[90] grid place-items-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          role="status"
          aria-live="polite"
        >
          <motion.div
            className="transition-glass absolute h-[70vmax] w-[42vmax] rotate-12"
            initial={{ x: "-130%", rotate: 6 }}
            animate={{ x: "130%", rotate: 18 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="relative text-center text-cobalt-foreground">
            <span className="font-serif text-6xl font-light">J.R</span>
            <span className="meta-label mt-5 block text-cobalt-foreground/65">Opening dossier</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
