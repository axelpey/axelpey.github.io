import { Brain, Users, BotIcon as Robot } from "lucide-react"

const features = [
  {
    name: "Human-Computer Interaction",
    description:
      "Designing and researching innovative interfaces that bridge the gap between humans and complex systems.",
    icon: Users,
  },
  {
    name: "Generative Agents",
    description:
      "Developing AI-powered agents that can understand, learn, and generate human-like responses and behaviors.",
    icon: Brain,
  },
  {
    name: "Robotics",
    description: "Creating intelligent robotic systems that can interact seamlessly with humans and their environment.",
    icon: Robot,
  },
]

export default function Expertise() {
  return (
    <div className="py-12 bg-white" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Pushing the boundaries of technology
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            My work focuses on three key areas that are shaping the future of human-machine interaction.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

