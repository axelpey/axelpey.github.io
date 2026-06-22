export interface BlogImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  // Shown above the post title and used for social previews by default.
  headerImage?: BlogImage;
  // Optional Open Graph/Twitter override when the visible header should differ.
  socialImage?: BlogImage;
  content: string; // Markdown content with optional {{tweet:https://...}} markers
}

export const posts: BlogPost[] = [
  {
    slug: "companies-are-art-projects",
    title: "Companies are art projects",
    date: "2026-06-21",
    excerpt:
      "The best companies have a soul: they embody a founder's vision in the same way an art project does.",
    headerImage: {
      src: "/blog/companies-are-art-projects-header.jpg",
      alt: "A hand sketching a collage of music, spaceships, architecture, and robotics.",
      width: 1983,
      height: 793,
    },
    socialImage: {
      src: "/blog/companies-are-art-projects-social.jpg",
      alt: "A hand sketching a collage of music, spaceships, architecture, and robotics.",
      width: 1200,
      height: 630,
    },
    content: `I was triggered recently by reading a quote from Steve Blank about how the best entrepreneurs are artists that want to put in the world a vision of their own.

It surprised me, as I took his famous class at Stanford: the Lean Launchpad. It follows the Lean method he laid out, which Eric Ries crystallized in the famous “The Lean Startup” book. Even before then, this was a book I had encountered in Paris many times; a book that entrepreneurs in France swore by. So why did he say this back in 2011? In the class, there was a clear method to follow; one that made it seem like making a company is mostly a process and that you can just do it by talking to enough people and analyzing everything that comes out of it properly.

I came to realize that there is no real paradox here. In fact, when you took the class, you could see that Steve was maybe the least “follow the book straight to the line” of all the teachers. He understood that a general method needed to be interpreted (and stretched) when the entrepreneur’s intuition pointed at doing something that might look stupid. For all the misunderstandings we seemed to have–Steve did not seem to get our idea of where robotics would go–he was at the same time the most likely to change his mind. Because he knew that you have to be a bit crazy sometimes. And arguably, what we pitched at the end of the class WAS crazy. 6 months later, when we raised our pre-seed, it was still crazy.

Since then I have realized how the best companies are indeed like art projects. They have a soul, they embody something that is not just a “follow the process and get rich”. Some can get pretty big without an apparent soul, but they always have some kind of element of craziness, something different about them. And arguably the most inspiring ones are the ones telling a story. Founders like Elon, David Holz of Midjourney, Dario from Anthropic… they tell you something about the world they see, and they do it in their very own way. It’s very important that they do it in their very own way. 


## The medium is the message

As a founder, when going direct with your communication, the medium is the message. Elon has grand speeches or awkward interviews, which are his signature. Dario has his blog posts. David has the videos he made for Midjourney which are his particular style. Roy Lee’s success is probably a consequence of his vitriolic style.

{{tweet:https://x.com/midjourney/status/2067422898407837797}}

These are extremely different from the average communication styles you see in most startups copying what’s trendy today. And you need extreme confidence to act like this, because you’re standing out twice when both the content and the medium are your own vibe.

{{tweet:https://x.com/im_roy_lee/status/2031020809376932049/video/1}}

When I was in undergrad, I used to direct a student organization making videos and shows, that was massively successful. There was something to it that was fun and purposeful, and we appeared as such for the rest of the student body. It attracted people who wanted to film what was going on and, as our mission statement said, “be the memory of the campus”. I found that, in the years since when the organization has worked less, it seemed because they had forgotten about their purpose. But when you have a purpose and you create your own media that expresses it, this is where you hit the jackpot. This is what Jobs expressed by saying the most powerful person is the storyteller.

## Building as a medium

Founders are also artists in that their product seems more of a representation of what they believe than a solution to a problem (while obviously being one). But the act of artistic creation plays a huge role in it. The joy of the founder arises from the process of drawing designs, of imagining something very representative of themselves. Even as it is the result of a team effort, the team follows a kind of artistic calling that leads all of them to be consistent in their work–when it works.

Building, itself, is a medium. It’s been most visible lately when expressed as games which are the most immersive medium possible. Just like you paint a figure, layer notes on a DAW or edit a dolly in Premiere, building a game was, at least for me, a way of expressing myself. And there’s a reason why a lot of founders started this way. Hell the amount of technical founders I know that started with building around Minecraft–the best code blank slate the exists– is staggering. We started as artists, and we see our craft as such. 

I am using these analogies because, for inhabitants of Silicon Valley, building has been akin to coding for the past 20 years, but obviously hardware builders work the same way. If anything, by putting their builds out there in the physical world, it could be seen as a superior type of art, but who the hell am I to make comparisons (well, yeah, a hardware founder).

We are builders, but we are maybe first and foremost artists. I have come to believe that to be good founders we need to cultivate this, and that comes by practice all types of art. From drawing, to music, to video editing, to design and crafting by hand and all sorts of things. And as I end editing this piece, I am sitting on the side of the pool realizing that today I practiced 3 or 4 different types of craft for the company, and I feel completely myself. 

There used to be a time when I thought I would either be an engineer or an artist. It is a beautiful realization to see that today, I can be both.`,
  },
  {
    slug: "code-nostalgia",
    title: "Code Nostalgia",
    date: "2026-05-21",
    content: `When I was a kid, I used to find solace coming in my room and coding. I would look at my screen, which would be the only light in my dark room, put my hands on the keyboard, and lock in.
I would enter another world, one of digital wonders. The internet seemed vast and diverse, with multiple different corners. I would hang out in my corner and felt like for the rest of history, the digital spaces would continue growing and diversifying.

And that I would be able to make my own, and just, code and build.

For many, coding started as a way to make something because they saw others getting money like that, or because of classes.
That was not my case, I liked it because it was my escape. I became so good at it that it carried me throughout all my studies.

The reason I liked math was because it helped me code better. I liked physics because I could simulate it with code.

I came to Silicon Valley because of code.

And now, it’s going away.
In the meantime I grew and lived many things and diversified my interests. I also learned at some point to like maths more than code, and during my years at Stanford I did prefer white boards to black screens. But still, I would sometimes sit and feel how talented I was at code. It was reassuring in a way.

Code going away is just a fact of life, of history.
In the grand scheme of things, we only had code for what… 75 years?
For the first 25, it was gate kept in big companies, then the PC arrived and we all could suddenly code and build.

For the next 50 years, careers, companies, personal success stories were based on code.
Software spread everywhere, ate the world while lifting a generation. Numerous people, like me as a kid, fell in love with it.

But now it’s time to say goodbye. Some will say there’s nothing wrong with that, as human beings we need to learn to adapt, we always did, and we always learned to love the new things we learned.
But we will always look back to this particular chapter of history, this beautiful world made of code that we had all created for ourselves. It was maybe the greatest collaboration at humanity’s scale, and it is now closing.

No longer will we have late nights debugging a SIGSEGV or an environment issue while browsing reddit here and there.
We will leave the maintenance of this digital world to our new AI partners, only coming back from time to time to observe the World Wide Web, full of robots.

A place that we built, but that does not belong to us anymore.`,
  },
  {
    slug: "personal-music",
    title: "Personal music",
    date: "2026-05-12",
    content: `Something happened today: I prompted a song for myself and I love it enough to listen to it in repeat.
I knew it would happen eventually, but it did so in such a natural way that I’m split between amazement at the technology and a simple feeling of “oh, okay, well that’s possible now”

It seems so normal that writing this post feels like an unimportant task because I imagine everyone will feel the same, and it will become the new normal.
But it’s not normal. For thousands of years, music was an intense, tasteful process that required many people to collaborate and perform. It shaped entire industries, made some people extremely prominent in history–Michael Jackson is said to be the most famous human ever after Jesus–and might be the biggest driver of emotions in our lives.

For thousands of years, it had never been challenged that one human would make music and many would listen to it. Even when the synthesizer was invented, which removed the need for a lot of instrumentalists, it was still one human producing for many.

Now, we’re about to get to one music per human. No more artists*. The most surprising is actually not the disappearance of the job (which won’t be completely gone), but maybe in how most humans relate to one another. It will be rarer to ask “do you listen to this artist”. Rarer to get a “omg I love David guetta you too?”. And the same might also happen in other forms of art, such as movies.

Or will it?
Maybe we will discover that, all along, what art was truly about was at least in part, what brings us together to appreciate the human condition. After all, I still see more and more of the same stuff than my friends do on Instagram and X. And a particular AI slop mixing fruits and relative TV shows seems to gather everyone online even though we could very well each enjoy our own flavor of themed reality TV.

So maybe it’s never been so much about the artist, but about something deep inside an opus that would lead us to appreciate it together; and maybe AI will lead us faster to the ecstasy of the most exquisite art.

I should go back to work, this memo won’t write itself. And just like that, I will integrate that now, I can simply generate the kind of mood-inducing music I like, and never think too much about it again.
The world will continue to revolve, and the future will have smoothly blended itself into the present.

*voluntarily exaggerating here, there will still be artists for I’m expecting the market of music consumption to shift to industrially generated AI music and some–maybe still wealthy–artisan music producers.`,
  },
  {
    slug: "everyone-is-the-same-online",
    title: "Everyone is the same online",
    date: "2026-04-24",
    content: `AI and social media addiction is driving everyone to speak the same way online and it’s getting me crazy

“We are working with x companies of the Fortune 500”

“It’s not X, it’s Y”

“I got retweeted by Y dude from Z fund, here is how to do it too”

“And honestly, that is what matters”

The same startups all the time, the same pitches with just slight variations. The same empty style, at every fucking corner of the Internet.

An investor friend of mine told me recently that Tier 1 VCs see everything SO much that they have a bias for things that feel different because they’re just bored. Well I’m not surprised, it’s literally frying my brain.

Not that I don’t understand why people do this, I do. Society converges towards some kind of blurb-style that everyone sort of understands and as long as you haven't found your style, maybe generic is better than nothing. But still, I am begging everyone to please be original and not use Claude or GPT for writing. Please, I’m going to lose my mind otherwise.`,
  },
  {
    slug: "most-statements-are-obvious",
    title: "Most statements are obvious",
    date: "2026-03-01",
    content: `Many statements are obvious in a blog post, especially if you are a literate person. I was reading the "Why I Write" essay by George Orwell after a dinner with Vig. I was recommended to take a look at it now that I'm trying to get better at writing. Being slightly intoxicated, I made the remark that the text was very clear but not necessarily groundbreaking or introducing novel ideas. Vig, in his great wiseness (always surprising me for someone that young), remarked that most texts are like that.

But when you're a researcher, an engineer, someone who cares about putting novel things out there, it seems strange to put words on something that thousands of others have already. And yet, you won't reinvent the wheel every time you write a blog post and you should be okay with that.

Very stupidly, I re-discover frequently how writing is more about expressing things in your own way than constantly inventing novel things. We are not writing papers, creating novel contributions. We are just saying things in a new way sometimes, and that is okay, and it can be beautiful.

Come to think of it, most of the blogs I've read—shoutout to Sam Altman ofc, Paul Graham, Nikunj Kothari, Ben Bolte—are not necessarily saying anything crazy. Sometimes, they do, when they write a thesis about something they're an expert on. Sometimes though, they just write about what they observe, which multiple others have observed before.

But for every person reading you that has read about that same idea before, there is likely a lot more that haven't, or haven't thought deeply about it. So you're still giving them food for thought. And if they did, not with the particular take, the particular emotion and approach that you are.

These two things are valid at the same time: you don't have to say something new when you're writing, but anything you say might still be new for many others.`,
  },
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
