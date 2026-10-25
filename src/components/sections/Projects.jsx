import { useMemo, useState } from 'react'
import { PROJECTS, PROJECT_CATEGORIES } from '../../data/projects.js'
import { ProjectModal } from '../ui/ProjectModal.jsx'
import styles from './Projects.module.css'

function ProjectImage({ project }) {
  const [available, setAvailable] = useState(true)

  if (!available) {
    return (
      <div className={styles.placeholder} aria-hidden="true">
        <span className={styles.placeholderTitle}>{project.title}</span>
      </div>
    )
  }

  return (
    <img
      className={styles.image}
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      onError={() => setAvailable(false)}
    />
  )
}

function ProjectCard({ project, index, onOpen }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.media}
        onClick={() => onOpen(project)}
        aria-label={`View details for ${project.title}`}
      >
        <ProjectImage project={project} />
        <span className={styles.badge} aria-hidden="true">
          <span className={styles.badgeDot} />
          {number}
        </span>
      </button>

      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{project.title}</h3>

        <ul className={styles.chips}>
          <li className={styles.chip}>{project.category}</li>
          <li className={styles.chip}>{project.year}</li>
        </ul>

        <p className={styles.cardDescription}>{project.description}</p>

        <button
          type="button"
          className={styles.detailRow}
          onClick={() => onOpen(project)}
          aria-label={`View details for ${project.title}`}
        >
          <span className={styles.detailLabel}>View Details</span>
          <span className={styles.detailArrow} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </button>
      </div>
    </article>
  )
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS
    return PROJECTS.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-heading">
      <div className={styles.intro}>
        <p className={styles.label}>Selected Work</p>
        <h2 id="projects-heading" className={styles.heading}>
          Projects &amp; Case Studies
        </h2>
        <p className={styles.supporting}>
          A collection of projects where I explore web development, data
          analytics, and user-centered design through coursework, team
          collaborations, and practical applications.
        </p>
      </div>

      <div className={styles.filters} role="group" aria-label="Filter projects by category">
        {PROJECT_CATEGORIES.map((category) => {
          const isActive = activeCategory === category
          return (
            <button
              key={category}
              type="button"
              className={styles.filter}
              data-active={isActive ? 'true' : undefined}
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        })}
      </div>

      {visibleProjects.length > 0 ? (
        <div className={styles.grid}>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No projects in this category yet.</p>
      )}

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
