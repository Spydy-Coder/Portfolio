/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bikash Dalai",
  title: "Hi all, I'm Bikash",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hJAvwTZl9x7SVTduqBadaeEk0tehNKXi/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Spydy-Coder/",
  linkedin: "https://www.linkedin.com/in/bikash-chandra-dalai-572560203/",
  gmail: "bikashchandradalai1002@gmail.com",
leetcode: "https://leetcode.com/spydy_coder/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Odisha University of Technology and Research, Bhubaneswar",
      logo: require("./assets/images/college.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2020-2024",
      desc: "CGPA: 9.71/10.0",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Kendriya Vidyalaya NTPC Shaktinagar",
      logo: require("./assets/images/school.png"),
      subHeader: "Senior Secondary",
      duration: "2020",
      desc: "Percentage: 96.4",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Developer Intern",
      company: "Hindustan Aeronautics Limited",
      companylogo: require("./assets/images/hal.png"),
      date: "June 2023 – July-2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Constructed a web app called Resolver which is a township complaint system designed to provide a platform for residents to report and address issues within their community",
        "It serves as a centralized hub where users can submit complaints, interact with the respective authorities, track the progress of their complaints, and have direct communication with the authorities handling their complaints through an integrated chat application."
      ]
      ,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hal-resolver.web.app/"
        },
        {
          name:"View Code",
          url: "https://github.com/Spydy-Coder/HAL-Project"
        }
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const codingProfiles = {
  title: "Coding Profiles",

  projects: [
    {
      image: require("./assets/images/ratingleetcode.png"),
      projectName: "Solved 420+ Questions on LeetCode",
      projectDesc: "Contest Rating- 1628",
      footerLink: [
        {
          name: "View Profile",
          url: "https://leetcode.com/spydy_coder/"
        }

      ]
    },
    {
      image: require("./assets/images/ratingcodechef.png"),
      projectName: "3 ⭐ Coder in CodeChef ",
      projectDesc: "Contest Rating- 1736",
      footerLink: [
        {
          name: "View Profile",
          url: "https://www.codechef.com/users/bikash_chandra"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/grocery.png"),
      projectName: "Grocery Depot",
      projectDesc: "It provides a convenient platform for local shopkeepers to showcase their products and prices while enabling local residents to browse and purchase items easily.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://grocery-depot-ver1.vercel.app/"
        },
        {
          name:"View Code",
          url: "https://github.com/Spydy-Coder/Virtual-Grocery-Store"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chatify.png"),
      projectName: "Chatify",
      projectDesc: "It's a real-time chat application that promotes seamless communication and collaboration through messaging and emoji sharing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chatify-vercel.vercel.app/"
        },
        {
          name:"View Code",
          url: "https://github.com/Spydy-Coder/Chatify-Messenger"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Introduction to Machine Learning",
      subtitle:
        "Received an Elite Certificate in NPTEL's Machine Learning Course by IIT MADRAS, demonstrating proficiency in machine learning concepts and applications.",
      image: require("./assets/images/nptel.jpg"),
      imageAlt: "Machine Learning",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1yW9VnSF6zhgYXOVYs4ixr6EhVWnan8mS/view"
        }
      ]
    },
    {
      title: "Data Structures and Algorithms ",
      subtitle:
        "It improved my problem-solving abilities, honed my algorithm analysis skills, and made my coding more efficient.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Data Structures",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/11ROpnYOHuD_5jPWETVEiT45Qh8yzGy99/view"
        }
      ]
    },

    {
      title: "Prepinsta PrepSAT",
      subtitle: " Secured a rank in top 1% in the Prepinsta PrepSAT Job-a-thon (90678 participants)",
      image: require("./assets/images/prepinsta.png"),
      imageAlt: "PrepInsta",
      footerLink: [
        {name: "Certificate", url: "https://drive.google.com/file/d/1JewwWTWD13b_BJbN-94P-m5ukQmDmfe_/view?usp=sharing"}

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Ready to bring your digital vision to life? Let's connect and discuss how I can help you create stunning web experiences.",
  number: "+91-7007695278",
  email_address: "bikashchandradalai1002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  codingProfiles
};
