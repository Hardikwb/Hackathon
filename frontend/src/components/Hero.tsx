import { motion } from 'framer-motion';
import { Mic, Zap, Terminal, ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-3xl overflow-hidden border border-white/10 bg-surfaceLight/50 backdrop-blur-md"
      aria-labelledby="hero-heading"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-teal/10 pointer-events-none" />

      <div className="relative p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2
              id="hero-heading"
              className="text-3xl font-bold text-textPrimary tracking-tight"
            >
              Interactive Demo
            </h2>
            <p className="text-lg text-textMuted leading-relaxed">
              Experience the power of voice automation. Click the <strong className="text-accentBright">Record</strong> button below, state your command, and watch the system transcribe, interpret, and execute it in real-time.
            </p>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-surface to-surfaceLight border border-white/10 shadow-inner">
            <Terminal className="w-10 h-10 text-accent" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-sm font-medium text-textMuted">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">
              <Mic className="w-4 h-4 text-success" />
            </div>
            <span>Voice Input</span>
          </div>
          <ArrowDown className="w-4 h-4 text-textMuted/30 rotate-[-90deg] md:rotate-0" />
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-accent" />
            </div>
            <span>Intent Extraction</span>
          </div>
          <ArrowDown className="w-4 h-4 text-textMuted/30 rotate-[-90deg] md:rotate-0" />
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-warning" />
            </div>
            <span>Automation Execution</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
