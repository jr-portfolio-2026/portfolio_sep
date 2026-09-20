import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { PortfolioHome } from "@/components/home/PortfolioHome";
import { IntroSequence } from "@/components/intro/IntroSequence";

const SEEN_KEY = "jr-intro-seen";

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setShowIntro(window.sessionStorage.getItem(SEEN_KEY) !== "1");
  }, []);

  const finishIntro = () => {
    window.sessionStorage.setItem(SEEN_KEY, "1");
    setShowIntro(false);
  };

  return (
    <>
      <AnimatePresence>
        {showIntro !== false && (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6 }}
          >
            <IntroSequence onFinish={finishIntro} />
          </motion.div>
        )}
      </AnimatePresence>

      {showIntro === false && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <PortfolioHome />
        </motion.div>
      )}
    </>
  );
}
