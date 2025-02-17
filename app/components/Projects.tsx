import Image from "next/image"

const projects = [
  {
    title: "Neural Interface for Robotic Control",
    description: "A brain-computer interface that allows direct control of robotic limbs through thought.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Generative AI Chatbot",
    description: "An advanced chatbot using generative AI to provide more natural and context-aware responses.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Augmented Reality Workspace",
    description: "An AR system that enhances productivity by creating an immersive, customizable work environment.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

export default function Projects() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore some of my recent work in HCI, generative agents, and robotics.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

