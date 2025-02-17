import Image from "next/image";
import ProjectList from "./components/ProjectList";
import { Github, Linkedin, Twitter } from "lucide-react";

const projects = [
  { name: "Innate: AI Robots everyone can teach", url: "https://innate.bot" },
  { name: "AI and Social Media Research at Stanford University", url: "#" },
  {
    name: "GetAlong: Better conversations on news websites",
    url: "https://getalong.io",
  },
  {
    name: "Ocean Plastic Pollution Modeling at The Ocean Cleanup",
    url: "https://theoceancleanup.com",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center p-4">
      <main className="max-w-xl w-full space-y-6">
        <div className="text-center">
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Axel Peytavin"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Axel Peytavin
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            Co-Founder & CEO, Innate
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-justify max-w-prose mx-auto">
            I am the co-founder of{" "}
            <a
              href="https://innate.bot"
              target="_blank"
              className="text-blue-500"
            >
              Innate
            </a>
            , a Bay Area startup working to bring physical life to AI in
            innately intelligent general-purpose robots running on multimodal
            models. We currently make the easiest mobile robots to teach for
            hobbyists.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify max-w-prose mx-auto">
            Previously, I was an Applied Maths grad at Stanford and researched
            using AI to understand humans on social media and counter
            misinformation. I also worked at The Ocean Cleanup on modeling ocean
            plastic pollution, and I founded GetAlong, a project aimed at
            fostering more constructive conversations on news platforms.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify max-w-prose mx-auto">
            I am an avid fan of sci-fi, particularly Isaac Asimov's literature,
            in particular the concept of Psychohistory and his anticipation of
            positronic robots. I also love sharing wine and talking about
            society, playing the guitar over the ocean, and filming with my
            drone.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify max-w-prose mx-auto">
            If you're interested in bringing real life to robots before 2026,
            you can reach me at{" "}
            <a href="mailto:axel@innate.bot" className="text-blue-500">
              axel@innate.bot
            </a>
            . I also enjoy just meeting interesting people, so hit me up if you
            want to chat.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Some cool things I've done
          </h2>
          <ProjectList projects={projects} />
        </div>

        <SocialLinks />
      </main>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <a
        href="https://github.com/axelpey"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <Github className="w-6 h-6" />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <Linkedin className="w-6 h-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="https://twitter.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <Twitter className="w-6 h-6" />
        <span className="sr-only">Twitter</span>
      </a>
    </div>
  );
}
