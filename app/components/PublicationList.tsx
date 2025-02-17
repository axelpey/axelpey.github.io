interface Publication {
  name: string
  url: string
  description: string
}

interface PublicationListProps {
  publications: Publication[]
}

export default function PublicationList({ publications }: PublicationListProps) {
  return (
    <ul className="space-y-4">
      {publications.map((pub, index) => (
        <li key={index}>
          <a
            href={pub.url}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            {pub.name}
          </a>
          <p className="text-gray-400 text-sm mt-1">{pub.description}</p>
        </li>
      ))}
    </ul>
  )
}

