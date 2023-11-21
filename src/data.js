import p1 from './assets/images/portfolio1.png'
import p2 from './assets/images/portfolio2.png'
import p3 from './assets/images/portfolio3.png'
import p4 from './assets/images/portfolio4.png'
import p5 from './assets/images/portfolio5.png'


export const portfolioData = [
    {
        id: 0,
        title: "Sidescroller game",
        description: "The largest project in my portfolio. Initially I made this just to learn Svelte but it turned into a Full-Stack app. The app is a small RPG game where you pick an avatar, level up, collect items, do small quests and fight certain enemies.",
        description2: "The front-end of the app is connected to a back-end server made with Node.js & MongoDB. This allows authentication, loading and saving your game and account wide unlockable achievements. Almost no packages were used for this app and all the drawings were made on pixilart.com. The app is not a fully finished project since it still needs balancing and more content. [Note: Live version might take a while to load because of the cold start.]",
        githubLink: "https://github.com/NielsvanBrussel/sg-server",
        liveLink: "https://svelte-game-server-4erv.onrender.com",
        tech: ["javascript", "svelte", "node", "mongodb", "html", "css"],
        img: p1
    },
    {
        id: 1,
        title: "Car modifier",
        description: "My second project using Three.js and React Three Fiber. When I was young I played a lot of GTA San Andreas so when I decided to make a project with an interactible model, I immediately had to think of a modifiable car. The app basically lets you interchange the parts and colours of a little car. ",
        description2: "The car parts and the rest of the model I drew with Blender & I loaded the model in with React Three Fiber. This project was a step up from my first Three.js project (see later) in the sense that it added said interactibility but also lighting, camera angles and more.",
        githubLink: "https://github.com/NielsvanBrussel/carmod",
        liveLink: "https://nielsvanbrussel.github.io/carmod/",
        tech: ["javascript", "react", "blender", "threejs", "html", "css"],
        img: p5
    },
    {
        id: 2,
        title: "Graphing calculator",
        description: "Small React project to get familiar with D3.js. When I think of data visualisation, I think of the graphical calculators we used at school so I decided to make a similar version for the browser. ",
        description2: "The app consists of a display where the graphs are drawn (D3 part), an input where you can enter multiple equations, a section where you can calculate the min and max of these equations and a section where you can calculate the intersections between 2 equations. The Nerdamer package is used to for the more complex calculations.",
        githubLink: "https://github.com/NielsvanBrussel/graphcalc",
        liveLink: "https://nielsvanbrussel.github.io/graphcalc/",
        tech: ["javascript", "react", "html", "css", "d3"],
        img: p2
    },
    {
        id: 3,
        title: "Gardener website",
        description: "As someone who started out with React, I always felt like I skipped some of the core of vanilla Javascript and thus decided to make a website purely out of JS, CSS and HMTL. I took an existing website (https://www.tomderanter.be/) as inspiration and copied it (only visually of course) with some slight modifications. ",
        description2: "",
        githubLink: "https://github.com/NielsvanBrussel/gardenerWebsite",
        liveLink: "https://nielsvanbrussel.github.io/gardenerWebsite",
        tech: ["javascript", "html", "css"],
        img: p3
    },
    {
        id: 4,
        title: "The Orchard",
        description: "Basically just a display of my very first model I drew with Blender. There isn't much code going on but I figured I'd add this to my portfolio anyway. It got me familiarised with the basics of React Three Fiber but lacks real complexity like lights, shadows & interactivity.",
        description2: "",
        githubLink: "https://github.com/NielsvanBrussel/orchard",
        liveLink: "https://nielsvanbrussel.github.io/orchard/",
        tech: ["javascript", "blender", "threejs", "html", "css"],
        img: p4
    },
]