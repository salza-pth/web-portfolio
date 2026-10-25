import { useState } from 'react'
import { TOOL_CATEGORIES } from '../../data/tools.js'
import styles from './Tools.module.css'

function ToolItem({ tool }) {
  const [showLogo, setShowLogo] = useState(Boolean(tool.logo))

  return (
    <li className={styles.tool} data-no-logo={showLogo ? undefined : 'true'}>
      {showLogo && (
        <span className={styles.mark}>
          <img
            className={styles.logo}
            src={tool.logo}
            alt=""
            loading="lazy"
            onError={() => setShowLogo(false)}
          />
        </span>
      )}
      <span className={styles.toolName}>{tool.name}</span>
    </li>
  )
}

export function Tools() {
  return (
    <section id="tools" className={styles.tools} aria-labelledby="tools-heading">
      <div className={styles.intro}>
        <p className={styles.label}>Tools &amp; Technologies</p>
        <h2 id="tools-heading" className={styles.heading}>
          Technologies I Work With
        </h2>
        <p className={styles.supporting}>
          Tools and technologies I have explored through coursework, projects,
          and organizational activities.
        </p>
      </div>

      <div className={styles.groups}>
        {TOOL_CATEGORIES.map((category) => (
          <div key={category.id} className={styles.group}>
            <h3 className={styles.groupTitle}>{category.title}</h3>
            <ul className={styles.list}>
              {category.tools.map((tool) => (
                <ToolItem key={tool.name} tool={tool} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
