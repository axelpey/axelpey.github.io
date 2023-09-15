---
layout: page
title: Activism & Climate Change Denial on Twitter
description: A research project for Stanford CS 224C
img: assets/img/soup_throw.jpg
importance: 2
category: work
---

- Code: [Github](https://github.com/axelpey/llm4ccdenial-twitter)
- Paper: [Download]({% link assets/pdf/CS_224C_Final_Paper.pdf %})
- Poster: [Download]({% link assets/pdf/poster-xpo-cs224c-project.pdf %})

Understanding the impact of climate change activism on how people conceive the issue is a crucial issue to make sure we correctly fight climate change. In fact, it's such a pressing issue that [a peer-reviewed paper](https://doi.org/10.1002/wcc.683) ranting about the lack of work done on it was published in 2021.

I used AI to study how climate change denialism evolves on Twitter during major activism events.

GPT-3.5 can be used to detect if a tweet comes from a climate change denier or believer, and then statistical analysis can tell us more about its evolution.

Here are the results:

- 🌍📉 On days of major shock events, Twitter gets more denialist, even when only accounting for people who usually tweet about climate change. Further research remains to see the impact over time, as isolating one event’s impact after 48hrs wasn’t possible.

- ⚙️🧠 A simple prompt given to GPT-3.5 can outperform a 2022 specialized model in detecting if a tweet comes from a climate change denier or believer (& it’s not even GPT-4!)

- ⏱️💼 This shows using LLMs can dramatically reduce the time and resources required to do social sciences and greatly increase pace of research on such a pressing topic!
