import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';
import { PERSONAL_INFO } from '@/data/portfolio';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-card border-t border-border/60 py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-medium">联系我</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            期待与你合作
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            如果你对我的作品感兴趣，或有合作机会，欢迎随时联系
          </p>

          <UniversalLink
            to={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-sm shadow-primary/20"
          >
            <Mail className="size-4" />
            {PERSONAL_INFO.email}
          </UniversalLink>

          <div className="mt-12 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </div>
            <div className="text-xs">
              Built with React & Tailwind CSS
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 size-10 rounded-full bg-primary text-primary-foreground shadow-md flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="返回顶部"
        >
          <ArrowUp className="size-4" />
        </motion.button>
      )}
    </footer>
  );
}
