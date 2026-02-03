import { motion } from 'framer-motion';
import { Mic, BrainCircuit, Workflow, ArrowRight } from 'lucide-react';

export function LandingHero() {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-blob mix-blend-screen" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-teal/20 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-8 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surfaceLight/50 border border-white/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm font-medium text-textMuted">Hackathon 2026 Ready</span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="block text-textPrimary">Voice-Activated</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accentBright via-teal-light to-purple animate-shimmer bg-[length:200%_auto]">
            Browser Automation
          </span>
          <span className="block text-textPrimary">for Accessibility</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-textMuted leading-relaxed"
        >
          Empowering elderly and motor-impaired users with hands-free web control.
          Powered by state-of-the-art AI to translate your voice into action.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={scrollToDemo}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full font-semibold text-lg transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-1"
          >
            Try the Demo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Overview Flow: 3 nodes with animated arrows */}
        {/* Removed overview flow between CTA and Features per request */}

        {/* Tech Stack */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <TechItem 
            icon={<Mic className="w-6 h-6" />} 
            title="Wispr Flow" 
            delay={0.8} 
            color="bg-teal-light/20 text-teal-light"
          />
          <TechItem 
            icon={<BrainCircuit className="w-6 h-6" />} 
            title="Gemini AI" 
            delay={0.9}
            color="bg-purple/20 text-purple"
          />
          <TechItem 
            icon={<Workflow className="w-6 h-6" />} 
            title="n8n + Playwright" 
            delay={1.0}
            color="bg-accent/20 text-accentBright"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Flow components removed
function TechItem({ icon, title, delay, color }: { icon: React.ReactNode, title: string, delay: number, color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center border border-white/5`}>
        {icon}
      </div>
      <span className="font-medium text-textMuted">{title}</span>
    </motion.div>
  );
}
