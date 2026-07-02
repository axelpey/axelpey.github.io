import Image from "next/image";
import { Github, Linkedin, Twitter, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center px-4 py-10">
      <main className="max-w-xl w-full space-y-8">
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

        <section className="space-y-4" aria-labelledby="about-innate">
          <h3
            id="about-innate"
            className="text-lg font-semibold text-gray-900"
          >
            About Innate
          </h3>

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
        </section>

        <section className="space-y-4" aria-labelledby="about-me">
          <h3 id="about-me" className="text-lg font-semibold text-gray-900">
            About me
          </h3>

          <ul className="list-disc space-y-3 pl-5 text-gray-700 leading-relaxed">
            <li>
              Wrote the 9th most used Minecraft server plugin when I was 14
            </li>
            <li>
              Modeled global ocean plastic pollution for The Ocean Cleanup
              (45,000+ metric tons of trash removed from oceans and rivers so
              far)
            </li>
            <li>Researched countering misinformation at Stanford</li>
            <li>
              Built one of the first{" "}
              <a
                href="https://x.com/ax_pey/status/1804209628680720746"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                agentic robots
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/OpenArchitectAI/open-architect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                code orchestrators
              </a>{" "}
              in early 2024
            </li>
          </ul>
        </section>

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
