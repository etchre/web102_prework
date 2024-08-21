# WEB102 Prework - **Sea Monster Crowdfunding Website**

Submitted by: **Ethan Reed**

**Sea Monster Crowdfunding Website** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **28** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] Created a navigation bar at the top to quickly navigate to specific sections of the page
* [x] Overhaul game card to display more information (like total amount raised and the goal)
* [x] Create a search bar to search for a specific game
* [x] Implemented responsive design (multiple layouts for different screen sizes)
* [x] Changed color scheme to a ligher one
* [x] Changed font to 'M PLUS 1'
* [ ] Overhaul stats card section to fit in with the look of the game cards

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='https://i.imgur.com/WM94yKW.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Building the website and going through the steps was pretty straight-forward, and I arrived at the website in its basic form pretty quickly. I started thinking about optional features and I began working on the easy stuff, like adding a simple nav-bar and a search-bar. It took a bit of reading to get the search-bar looking just how I wanted since I wanted to have it pop out when you hover over it. I'd never worked with CSS Animations much, but I then figured out that all I had to do was turn on transitions. After doing a couple extra hours of work, I figured I could stop there, but I wasn't satisfied with how the website looked. I decided to challenge myself and try my hand at responsive design, but it was way more work than I expected.

I hadn't really worked with pure HTML/CSS/JS to make a dynamic type website so it was a learning experience for me, figuring out how to apply styles dynamically and using media queries to change said styles depending on the size of the window. I think the roughest part of my attempt at responsive design was that I went in totally blind, so I ended up with a huge stylesheet. It didn't really help that I kept working in the same file, and I probably should have made multiple files for each section of the website in order to have better kept my sanity. I also had made the mistake of working on the biggest layout first, and then working my way down. I realized later on that it would've been way easier to start mobile first, and it culminated in a lot of repetition in my stylesheet.

All in all after I finished making layouts for a good amount of screen sizes, I think it turned out well. It's not perfect, and there's definitely some layouts that bug me, but I like what I ended up with. I ended up giving up on adding a visual flourish (variable font sizes depending on how much money was raised), but it was hard to do and it would've made doing responsive design a nightmare. In fact, trying to implement responsive design (which was pretty new to me) taught me a lot, and I figured out a lot of do's and dont's for future projects.

## License

    Copyright [2024] [Ethan Reed]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
