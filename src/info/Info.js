import self from "../img/self.png"
import mock1 from "../img/mock1.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Satya",
    lastName: "Prakash",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. 
        {
            emoji: '☕',
            text: 'fueled by cup of Tea'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Full stack web developer trainee"
        },
        {
            emoji: "📧",
            text: "satyanayak7890@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/satyanayak.nirmal.3",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/itz._.me._.satya/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Satya32-gif",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/satya-prakash-nayak-b40346249/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/iAmsatyaPN",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Satya. I'm a Full Stack Web Developer Trainee. I studied BCA at Salipur Autonomous college, I enjoy to participate in Artwork competitions, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3'],
            exposedTo: ['nodejs', 'Express', 'MongoDB']
        }
    ,
    hobbies: [
        {
            label: 'Drawing',
            emoji: '🎨'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://myflashcard.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Satya32-gif/FlashCard_Generator-Almabetter", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },

    ]
}