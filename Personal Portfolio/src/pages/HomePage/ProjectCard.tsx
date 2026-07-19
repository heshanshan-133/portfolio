import { motion } from 'framer-motion';
import { Play, Calendar, Building2, Briefcase, Users, Award, CheckCircle2 } from 'lucide-react';
import type { IProject } from '@/data/portfolio';

interface ProjectCardProps {
  project: IProject;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-card border border-border/60 rounded-xl overflow-hidden flex flex-col hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Video placeholder */}
      <div className="relative aspect-video bg-muted flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted" />
        <div className="relative z-10 flex flex-col items-center gap-2.5 text-muted-foreground">
          <div className="size-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Play className="size-5 ml-0.5" />
          </div>
          <span className="text-sm font-medium">视频占位</span>
          <span className="text-xs text-muted-foreground/70">后续替换为项目演示视频</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title + tag */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            《{project.name}》
          </h3>
          <span className="shrink-0 text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium whitespace-nowrap">
            {project.subtitle}
          </span>
        </div>

        {/* Meta info */}
        <div className="space-y-1.5 mb-4">
          {project.period && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="size-3.5 shrink-0" />
              <span>{project.period}</span>
            </div>
          )}
          {project.company && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Building2 className="size-3.5 shrink-0" />
              <span>{project.company}</span>
            </div>
          )}
          {project.position && (
            <div className="flex items-center gap-2 text-xs text-primary font-medium">
              <Briefcase className="size-3.5 shrink-0" />
              <span>
                {project.position}
                {project.teamSize && `（${project.teamSize}）`}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Responsibilities */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <div className="mb-5">
            <div className="text-xs font-semibold text-foreground mb-2.5 uppercase tracking-wider">
              负责内容
            </div>
            <ul className="space-y-1.5">
              {project.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-5">
            <div className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="size-3.5 text-primary" />
              项目成果
            </div>
            <ul className="space-y-1">
              {project.achievements.map((item, i) => (
                <li key={i} className="text-sm text-primary font-medium leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech tags */}
        <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
