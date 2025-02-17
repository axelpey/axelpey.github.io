interface Project {
  name: string
  url: string
}

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="space-y-2">
      {projects.map((project, index) => (
        <li key={index}>
          <a
            href={project.url}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

