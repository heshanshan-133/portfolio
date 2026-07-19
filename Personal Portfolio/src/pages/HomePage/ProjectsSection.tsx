import { motion } from 'framer-motion';
import { Play, Calendar } from 'lucide-react';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Featured projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium">作品集</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            核心作品
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            涵盖商业项目、独立游戏、教育科普与 VR 体验，展现多维度游戏开发能力
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Other works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            其他作品
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            学习与探索项目，快速原型开发实践
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OTHER_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group bg-card border border-border/60 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              {/* Video placeholder - smaller */}
              <div className="relative aspect-video bg-muted flex flex-col items-center justify-center overflow-hidden">
                <div className="relative z-10 flex flex-col items-center gap-1.5 text-muted-foreground">
                  <div className="size-10 rounded-full bg-background/80 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Play className="size-4 ml-0.5" />
                  </div>
                  <span className="text-xs">视频占位</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    《{project.name}》
                  </h3>
                  <span className="shrink-0 text-[11px] px-2 py-0.5 rounded bg-primary/10 text-primary font-medium whitespace-nowrap">
                    {project.subtitle}
                  </span>
                </div>

                {project.period && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <Calendar className="size-3 shrink-0" />
                    <span>{project.period}</span>
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
