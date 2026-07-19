import { motion } from 'framer-motion';
import { GraduationCap, Mail, ArrowDown } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';
import { PERSONAL_INFO } from '@/data/portfolio';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <GraduationCap className="size-4 text-primary" />
          <span>
            {PERSONAL_INFO.major} · {PERSONAL_INFO.school}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-4"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl text-primary font-semibold mb-6"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground italic mb-10"
        >
          「{PERSONAL_INFO.tagline}」
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <UniversalLink
            to="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-sm shadow-primary/20"
          >
            查看作品
            <ArrowDown className="size-4" />
          </UniversalLink>
          <UniversalLink
            to={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-muted transition-colors"
          >
            <Mail className="size-4" />
            联系我
          </UniversalLink>
        </motion.div>
      </div>
    </section>
  );
}
