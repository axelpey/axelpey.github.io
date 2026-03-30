import Image from "next/image";
import ProjectList from "./components/ProjectList";
import { Github, Linkedin, Twitter, BookOpen } from "lucide-react";

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
            src="/marin-mar-26.png"
            alt="Axel Peytavin"
            width={150}
            height={150}
            className="w-[150px] h-[150px] rounded-full object-cover object-center mx-auto mb-4"
          />
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Axel Peytavin
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">CEO, Innate</h2>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-justify max-w-prose mx-auto">
            Every 20 years, a new technology emerges that changes the world. In
            the 2020s, we are lucky to have two: AI, and soon robots.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify max-w-prose mx-auto">
            The second one will be bigger and will change the world in ways we
            can’t even imagine. In order for it to develop fast and to benefit
            everyone, it needs to be made so intuitive that everyone can become
            a roboticist.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify max-w-prose mx-auto">
            This is the mission of Innate. We build a new kind of robotics
            platform, not only fit for deeply technical builders, but also
            newcomers. A robot for the rest of us.
          </p>

          <p>If you're interested in learning more, please reach out.</p>
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
        href="https://www.linkedin.com/in/axel-peytavin/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <Linkedin className="w-6 h-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="https://x.com/ax_pey"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-800"
      >
        <Twitter className="w-6 h-6" />
        <span className="sr-only">Twitter</span>
      </a>
      <a href="/blog" className="text-gray-600 hover:text-gray-800">
        <BookOpen className="w-6 h-6" />
        <span className="sr-only">Blog</span>
      </a>
    </div>
  );
}
