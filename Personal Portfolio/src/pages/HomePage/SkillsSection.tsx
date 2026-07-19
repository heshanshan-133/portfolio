import { motion } from 'framer-motion';
import { Gamepad2, Code2, Puzzle, Palette, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolio';

const CATEGORY_ICONS: Record<string, typeof Gamepad2> = {
  engine: Gamepad2,
  language: Code2,
  middleware: Puzzle,
  design: Palette,
  other: Sparkles,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-28 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium">技能栈</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            技能与工具
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            覆盖游戏开发全流程技术能力，从引擎开发到性能优化
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Puzzle;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-card border border-border/60 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {category.label}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="text-sm text-foreground font-medium">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-xs text-muted-foreground shrink-0">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
