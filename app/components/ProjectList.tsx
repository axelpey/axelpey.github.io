interface Project {
  name: string;
  url: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.url}
          className="group block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
              {project.name}
            </h3>
            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}
