export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string; // Markdown or HTML content
}

export const posts: BlogPost[] = [
  {
    slug: "writing-in-english",
    title: "Writing in English",
    date: "2026-02-23",
    content: `When I was in France, I loved to write. My personal journal is over 300 pages long, and looking back at its earliest entries, I can see how much I've improved.

When you write a lot, you develop a style — a personal prose. After a few years of it, I could almost recognize my own writing if I stumbled on a past essay at random.

I love writing. There are certain rhetorical devices I overuse more than others — anaphora in particular.

A device perfect for driving a point home.
A device just as perfect for building a surge of intensity in the reader.
A device finally perfect for drawing out every shade of nuance, for digging into an idea and unfolding it until every corner is revealed.

Writing is giving your thoughts the chance to influence others. It's shaping a sentence with precision to evoke a concept and, at the same time, an emotion. You could write something perfectly clear about an idea, but with no feeling coming through. And in my view, that kind of work is far less memorable.

----

When I arrived in the United States four years ago, I threw myself into tech. Having learned English since the age of 11 — to code — I already felt in my element. But it was, and still is, a very technical English. Not an English that sounds good. It takes a while, once you've passed the stage of "I'm fluent enough that people sometimes mistake me for American," to realize that true mastery of a language takes infinitely longer.

To express yourself well, with all the necessary prosody, seems to require an enormous amount of work. Many people I admire write fascinating blogs, and I think to myself "I could absolutely write the same thing." And yet… it's more work than it seems. Especially since French prose tends to be longer, more philosophical than English prose — but also less immediately clear.

It's a prose that lives up to what other nationalities might think of the French: beautiful but pompous, sometimes arrogant. And like the chicken-or-the-egg question, you could wonder whether it's our language that shapes our culture, or the other way around, pushing us to act the way we do.

After four years here, I've also noticed a kind of split between my French personality and my English one. It's subtle, but it's there. A different way of presenting things. A tendency to want to say more, where less would be faster. It bleeds into the way I think — to the point where I sometimes wonder if I should think more in French than in English to approach certain subjects.

Beyond the scientific curiosity this raises in me, it's recently pushed me to want to write more in English. Because these two personalities should converge, and the fluency of mind I have in French should exist at the same level in English. It's an extra challenge on the path to greatness for an immigrant. One more thing to take on — especially at a time when you can't afford to sound like an AI. And above all, a pleasure to rediscover in a language I now use more than my mother tongue.

PS: Because I wanted to put my French writing to the test on this English-language blog, this post was written in collaboration with Claude to faithfully render my prose in another language.`,
  },
  {
    slug: "fairness-and-agency",
    title: "Fairness and agency",
    date: "2026-01-28",
    content: `"The world is unfair" is an obvious statement to make. How you react to it is however, not.
A recent Innate candidate told me this during an interview, "We can't really solve this issue, but we should be mindful of it".
Is that enough?

Your reaction to this fact says a lot about you. It varies wildly between people. 

Yes, the world is unfair. 
Sometimes this is nature—the randomness of inherited disease or talent. Sometimes we call it "the world" when it's actually other humans creating the unfairness.
Either way, standing in front of it and deciding "it is what it is" is a dumb and weak thing to do.

It's a moral failure to accept it as inevitable. It's even worse to use it as a justification to act unfairly.

We humans have the power of choice. We can choose to realize when there is a lack of fairness, and to choose to account for it. To help those who didn't get lucky. It is being strong to realize that yes, you're going against a state of fact that has been randomly decided by nature, and you're doing it because you're human. It is the same fight as to constantly oppose the natural decay of things. To look at the world in its eyes and say "I won't let you be unfair".

This means fairness is not passive. It requires active judgment. It is not being nice or kind all the time; it is also being willing to condemn and punish. It is having a moral compass and applying it by taking action.

You might hope that rules and laws will usually take care of delivering fairness, but they can't do it alone. Sometimes, even laws are unfair. They can either be exploited, or misapplied. 
Misapplied like in the many ways we can punish a poor child for stealing food. Or kicking out an undocumented immigrant for being here while working hard for their host country.
Exploited when some find legal loopholes to save taxes, or escape conviction on a technicality like a cop forgetting to read their rights.

A fair ruler (or ruling system) should be able to see through it and punish such behavior, but it can't always do so. Fairness depends on us all choosing to embody it. 

In fact, a healthy society depends on it. Being fair holds societies together. It is what makes great cultures. 
It is celebrating those that make the most effort for others, but also not granting them the power to be above rules that apply to the masses.
It is wanting more Frank Caprio judges to be understanding of unfortunate circumstances. More Teddy Roosevelts to set rules against the concentration of power.

Now, in our current era we are rewarding more and more agency as the number one quality.
The best leaders have this quality. They seemingly surpass obstacles and do things deemed impossible. Harnessed properly, agency leads us to a better future.

However we overlook that agency can be used for evil these days. You can be high agency and fair, you can also be high agency and a complete criminal. Not respecting any rule and law is maybe the highest signal of agency.

Agency without a moral compass is corrosive. Celebrating successful people for their ability to go around moral, fair, implicit rules, we risk destroying the fabric of our societies.
There is a lot of doers in this world, and many of the high-agency ones are in their ranks. We should just remember that the ability to do things is not per-se a sign of goodness. It's a pre-requisite to being a leader, not necessarily a good one.

If you're reading this and want to do things, I applaud you, and I urge you to be fair. 
The world is the beautiful place it is today because millions of people before you strived to make it work for everyone. It needs to stay like this.
So stand in the way.`,
  },
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
