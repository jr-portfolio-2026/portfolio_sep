import { motion } from "motion/react";

/**
 * Our "J.R" monogram, animated as a soft liquid contour:
 * - layered mist-blue outline, navy body, a slow gold shimmer, and a
 * - turbulence-displaced edge that settles into stillness.
 */
export function MonogramLoader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={(def) => {
        if (typeof def === "object" && def && "opacity" in def && def.opacity === 1) {
          // hold on the settled monogram, then hand off
          window.setTimeout(onComplete, 1800);
        }
      }}
    >
      {/* soft mist halo */}
      <div
        aria-hidden
        className="absolute h-[42vmin] w-[42vmin] rounded-full bg-mist/40 blur-3xl animate-breathe"
      />

      <svg
        viewBox="0 0 600 300"
        className="relative h-[34vmin] w-auto min-h-40"
        role="img"
        aria-label="J.R monogram"
      >
        <defs>
          <filter id="liquid" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="3" result="noise">
              <animate
                attributeName="baseFrequency"
                values="0.012;0.02;0.008;0.012"
                dur="9s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" xChannelSelector="R" yChannelSelector="G" scale="10">
              <animate attributeName="scale" values="16;6;10;4;8" dur="6s" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>

          <filter id="softshadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="6" result="blur" />
            <feFlood floodColor="#c8dce3" floodOpacity="0.9" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="ink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#153765" />
            <stop offset="100%" stopColor="#0b1f37" />
          </linearGradient>

          <linearGradient id="foil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ab894b" stopOpacity="0" />
            <stop offset="45%" stopColor="#ab894b" stopOpacity="0" />
            <stop offset="50%" stopColor="#e5cf9a" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#ab894b" stopOpacity="0" />
            <stop offset="100%" stopColor="#ab894b" stopOpacity="0" />
            <animate attributeName="x1" values="-1;1" dur="4.8s" repeatCount="indefinite" />
            <animate attributeName="x2" values="0;2" dur="4.8s" repeatCount="indefinite" />
          </linearGradient>

          <mask id="letters-mask">
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Cormorant Garamond, serif"
              fontWeight="400"
              fontSize="240"
              letterSpacing="6"
              fill="white"
            >
              J.R
            </text>
          </mask>
        </defs>

        {/* mist outline, displaced — the "liquid contour" */}
        <g filter="url(#liquid)">
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="400"
            fontSize="240"
            letterSpacing="6"
            fill="none"
            stroke="#c8dce3"
            strokeWidth="10"
            strokeLinejoin="round"
            opacity="0.85"
          >
            J.R
          </text>
        </g>

        {/* thin secondary outline, offset for relief */}
        <text
          x="50%"
          y="58%"
          dx="-3"
          dy="-3"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Cormorant Garamond, serif"
          fontWeight="400"
          fontSize="240"
          letterSpacing="6"
          fill="none"
          stroke="#ab894b"
          strokeWidth="0.6"
          opacity="0.55"
        >
          J.R
        </text>

        {/* navy body */}
        <g filter="url(#softshadow)">
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="400"
            fontSize="240"
            letterSpacing="6"
            fill="url(#ink)"
          >
            J.R
          </text>
        </g>

        {/* gold shimmer passing through the letters */}
        <g mask="url(#letters-mask)">
          <rect x="0" y="0" width="600" height="300" fill="url(#foil)" />
        </g>
      </svg>

      {/* status line */}
      <motion.div
        className="absolute -bottom-14 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      >
        <div className="relative h-px w-40 overflow-hidden bg-navy/10">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="meta-label opacity-60">Entering the portfolio</span>
      </motion.div>
    </motion.div>
  );
}

          <linearGradient id="foil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ab894b" stopOpacity="0" />
            <stop offset="45%" stopColor="#ab894b" stopOpacity="0" />
            <stop offset="50%" stopColor="#e5cf9a" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#ab894b" stopOpacity="0" />
            <stop offset="100%" stopColor="#ab894b" stopOpacity="0" />
            <animate attributeName="x1" values="-1;1" dur="4.8s" repeatCount="indefinite" />
            <animate attributeName="x2" values="0;2" dur="4.8s" repeatCount="indefinite" />
          </linearGradient>

          <mask id="letters-mask">
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Cormorant Garamond, serif"
              fontWeight="400"
              fontSize="240"
              letterSpacing="6"
              fill="white"
            >
              J.R
            </text>
          </mask>
        </defs>

        {/* mist outline, displaced — the "liquid contour" */}
        <g filter="url(#liquid)">
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="400"
            fontSize="240"
            letterSpacing="6"
            fill="none"
            stroke="#c8dce3"
            strokeWidth="10"
            strokeLinejoin="round"
            opacity="0.85"
          >
            J.R
          </text>
        </g>

        {/* thin secondary outline, offset for relief */}
        <text
          x="50%"
          y="58%"
          dx="-3"
          dy="-3"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Cormorant Garamond, serif"
          fontWeight="400"
          fontSize="240"
          letterSpacing="6"
          fill="none"
          stroke="#ab894b"
          strokeWidth="0.6"
          opacity="0.55"
        >
          J.R
        </text>

        {/* navy body */}
        <g filter="url(#softshadow)">
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="400"
            fontSize="240"
            letterSpacing="6"
            fill="url(#ink)"
          >
            J.R
          </text>
        </g>

        {/* gold shimmer passing through the letters */}
        <g mask="url(#letters-mask)">
          <rect x="0" y="0" width="600" height="300" fill="url(#foil)" />
        </g>
      </svg>

      {/* status line */}
      <motion.div
        className="absolute -bottom-14 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      >
        <div className="relative h-px w-40 overflow-hidden bg-navy/10">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <span className="meta-label opacity-60">Entering the portfolio</span>
      </motion.div>
    </motion.div>
  );
}
