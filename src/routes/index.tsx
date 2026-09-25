import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { IntroSequence } from "@/components/intro/IntroSequence";
import { PortfolioHome } from "@/components/home/PortfolioHome";

const TITLE = "Name Surname — Law, Trade & Digital Systems";
const DESCRIPTION =
  "Selected work by Name Surname across international law, trade, business strategy, institutional practice, and applied digital tools.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SEEN_KEY = "jr-intro-seen";

function Index() {
  // undefined = not yet decided (SSR / first paint), avoids hydration mismatch
  const [showIntro, setShowIntro] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setShowIntro(window.sessionStorage.getItem(SEEN_KEY) !== "1");
  }, []);

  const finish = () => {
    window.sessionStorage.setItem(SEEN_KEY, "1");
    setShowIntro(false);
  };

  return (
    <div className="paper-surface relative min-h-screen">
      {showIntro !== undefined && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ duration: 0.7 }}
        >
          <PortfolioHome />
        </motion.div>
      )}
      <AnimatePresence>
        {showIntro !== false && (
          <motion.div className="fixed inset-0 z-50 bg-ivory" key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
            <IntroSequence onFinish={finish} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
