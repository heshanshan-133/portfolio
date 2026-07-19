import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio';

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: '教育背景',
    value: 'GPA 3.8 · 专业前 3%',
  },
  {
    icon: Code2,
    label: '核心技术',
    value: 'Unity · C# · 商业主程',
  },
  {
    icon: Briefcase,
    label: '项目经验',
    value: '5+ 核心项目 · 含商业项目',
  },
  {
    icon: Award,
    label: '软著 & 奖项',
    value: '多项软著 · 院级一等奖',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium">关于我</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            自我介绍
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border/60 rounded-xl p-8 md:p-10 shadow-sm"
        >
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-8">
            {PERSONAL_INFO.intro}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Icon className="size-3.5 text-primary" />
                    {item.label}
                  </div>
                  <div className="text-foreground font-semibold text-sm">
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
