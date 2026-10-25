const TECH_LOGOS = {
  Figma: '/logos/figma.svg',
  HTML: '/logos/html5.svg',
  CSS: '/logos/css.svg',
  JavaScript: '/logos/javascript.svg',
  React: '/logos/react.svg',
  Python: '/logos/python.svg',
  Tableau: '/images/tableau.svg',
  'Power BI': '/images/power-bi.svg',
  'Microsoft SQL Server': '/images/sql.svg',
}

export function techLogo(name) {
  return TECH_LOGOS[name] ?? null
}
