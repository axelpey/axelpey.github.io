export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string; // Markdown or HTML content
}

export const posts: BlogPost[] = [
  {
    slug: "the-innate-way",
    title: "The Innate Way",
    date: "2026-01-01",
    content: `### Simplicity always wins

*This is a repost of the original manifesto I wrote for Innate ([innate.bot](https://innate.bot)) in January 2025. More than ever, I still stand behind this philosophy.*

**TL;DR:** We are destroying the barriers to entry in robotics by making the first robot everyone can actually teach easily. A massive data collection will ensue to enable an AGI for robotics that thrives on data diversity the most importantly.

## It has never been that simple to build robots

During the past 2 years, the barriers to entry to building in robotics have drastically lowered. This is in the major part due to the AI wave of course. It has made learning robotics much simpler, and allowed for much simpler solutions using large models that understand the world much better.

It has never been that simple to build robots. It's a good thing, and the impact of it is that the amount of builders in the field is growing. One can look at the number of stars on LeRobot's github repository, or the amount of users in K-Scale Labs' discord. Every week on X, someone reveals their new surprisingly smart robot and brings other people in. New robotics hackathons pop more frequently in Silicon Valley, and they are filled with young people and software engineers who are discovering the field and learning fast.

It has never been that simple to build robots. And yet, it's still not simple enough. It still takes an enormous amount of knowledge to work on the complete stack: on localization that works without spending hours on configuration, on manipulation that needs fast and working inference, on easy data collection, on a software architecture that does not break every 2 days, and on a working, affordable hardware.

The secret to bringing folks like myself (a year ago) in robotics is NOT to make bigger robots with 36,000 degrees of freedom, it is to just make it simpler to build something smart that works. That's it.

## The winners have always made things simple

In the early days of personal computers, everyone thought mainframes were going to be a thing. PCs were this fun thing that hobbyists built in their garage that didn't really provide business value. Until some folks in Palo Alto made it simpler to develop on a platform that just works. The year was 1976, and the Apple I was born. During that year, Steve and Steve sold 500 of these computers to mostly hobbyists, and the reason many were impressed in that population was because it simply worked and was so expandable.

From this success, they made the Apple II, a more widely accessible computer built on everything they learned from the Apple I. It sold to millions of units, and Apple went public 3 years after.

We're now 50 years later, and once again a new hardware x software revolution is happening in Silicon Valley: Robotics. And again, everyone is racing towards adding more complexity, not simplifying. Why? Because making complex things simple take dedication and time. It is much easier to strap together pieces of hardware to make a humanoid form factor, than to make a small robot that learns fast, but the first one seems more impressive.

At the end of the day, the platform that wins will be, like history has many times proven, the most accessible one. The one people will be able to look at and feel "this was the first robot that really, innately understood the world".

## Crazy upsides: Should we win, we will also win Physical AGI

The reward for success will be even greater than Apple. We are not talking only spreading a product to millions of units and revolutionizing the way we interact with technology once again. We are talking unlocking a massive data collection method for society.

In a world were robots are easy to train and teach everywhere, data is the new app. Everyone will be able to share and get rewarded for their data, especially if it gets used in AGI models that power all robots of the future.

This is our final goal: When everyone can collect all kinds of data on effortlessly teachable platform, we collect exactly the kind of diversity required to generalize AI models for robotics, not just for manipulation, but also interaction, world modeling, everything.

This is how we get to Physical AGI.

## Robots of today and tomorrow

Maurice, our first robot, is but the first step to mass-democratizing our technology. Bigger robots are already roaming our house in Palo Alto, and we're taking great care to their design.

There is a lot to invent, and we will do it by staying close to people and staying opinionated. We make accessible, innately intelligent systems that you can use today. We stand for every builder that wants to join the robotics revolution.

It will only take a year for our first systems to autonomously interact with humans in homes like ChatGPT does today, but with full physical capability.

By 2027, our robots will have full capability in your home, leveraging training from all humans, doing tasks the way you want. From doing dishes to laundry, from securing your place to being a companion for your kids and alders, all the while being a natural extension of your computer and phone.

By 2030, this knowledge will be used in the real world. Innate robots will be helping wherever humans are too few or too busy. They will start helping repairing bridges before they falter, replanting trees where we need them, delivering aid in disaster-stricken areas. They will help us increase energy generation safely, streamline our manufacturing lines, and explore the universe.

All of it will be enabled because everyone will be a part of it. Because, in our future, robots will have been taught by the people, for the people, and the benefit of all.

– Axel & Vig`,
  },
  {
    slug: "stop-chasing-titles",
    title: "Stop chasing titles",
    date: "2025-10-21",
    content: `Living in Silicon Valley in 2025 is being surrounded by people with titles and achievements. The most prestigious ones include specific fellowships or awards, such as the IOI, IMO, the Thiel Fellowship… If you get in an accelerator you will also perceive that some are ranked “higher signal” than others. Others will consider your previous company, your previous university… In group chats you’ll see messages starting with “ex-imo medalist, team from Stanford, includes a Navy SEAL and the creator of the first mobile agentic framework” or similar. VCs fight to fund the best titles, founders fight to hire them.

It’s a game that is understandable for everyone to play, since it is a simple, visible heuristic gauge. Get the right titles, and see doors open for you. The earlier you follow the games’ rules in your life, the better you’ll be considered. If you don’t understand the rules though, life is a lot harder. People will give very little attention to you, or no attention at all if you really have no title.

When I hire, I can see how well the game works for the most prestigious titles, and how bad it plays out for folks who don’t have any. I can sense my biases, I know them, and I try to give the benefit of the doubt to those who don’t have it. Unfortunately, it consumes time and most people (including me) don’t have a lot of it. But through this process, I have become a little less cynical about the world and how it favors only the ones who were born in the game. There is still a way to make it to the top.

I have been in several rooms, hackathons, discussions, with some of the brightest people around here with great pedigrees. And I have also been in rooms with extremely talented people without. And I can tell you that great builders will recognize each other regardless of titles. One place where it’s even easier than real-life Silicon Valley is of course on the internet. The recipe is simple: You have to build one thing better and deeper than others and show it online. Whatever your background is, if you do this, post it and bring it to the attention of people on Reddit or X, there is a high chance that strong people will notice your skills. And you will then realize that there is nothing that stands between you and greatness than just doing work you love, in depth, and to publish it (you need to get good at that last part).

As a builder myself, I can see when someone has it despite having no titles, and I really admire it.

And in fact, most great companies kind of started with such builders who didn’t care about their background at the start. Apple and Microsoft were born in very nerdy communities like the Homebrew Computer Club, which was not high-profile back then. Zuckerberg was perceived as a weirdo when he started, it was not as cool back then to do something controversial like Facemash then spend months building a social network for your school. Bezos spent months in a small office, after an early career in finance, struggling to raise since he was not a traditional tech person. Pictures of him from this era show a balding dude in his late-twenties in a shitty room, which is not something you’d do back then performatively.

It can be discouraging to see the big folks and how others will pursue them. But don’t think about it. Even today, true builders will get noticed, hired or funded. And if you can’t play the game, don’t waste your time or worse, fake it with bad titles. Lean into what you like, publish it, and things will happen to you.`,
  },
  {
    slug: "ai-robots-and-society",
    title: "AI, robots and society",
    date: "2025-10-01",
    content: `(Importing content soon...)`,
  },
];
