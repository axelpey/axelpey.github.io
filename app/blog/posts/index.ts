import { companiesAreArtProjects } from "./companies-are-art-projects";
import { codeNostalgia } from "./code-nostalgia";
import { personalMusic } from "./personal-music";
import { everyoneIsTheSameOnline } from "./everyone-is-the-same-online";
import { mostStatementsAreObvious } from "./most-statements-are-obvious";
import { writingInEnglish } from "./writing-in-english";
import { fairnessAndAgency } from "./fairness-and-agency";
import { theInnateWay } from "./the-innate-way";
import { stopChasingTitles } from "./stop-chasing-titles";
import { aiRobotsAndSociety } from "./ai-robots-and-society";
import type { BlogPost } from "./types";

export type { BlogImage, BlogPost } from "./types";

export const posts: BlogPost[] = [
  companiesAreArtProjects,
  codeNostalgia,
  personalMusic,
  everyoneIsTheSameOnline,
  mostStatementsAreObvious,
  writingInEnglish,
  fairnessAndAgency,
  theInnateWay,
  stopChasingTitles,
  aiRobotsAndSociety,
];
