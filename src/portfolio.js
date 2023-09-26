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
  username: "Krishna Sai Mullangi",
  title: "Hi all, I'm Krishna",
  subTitle: emoji("Meet Krishna, a driven master's student in Computer Science at California State University, Long Beach. Always open to learning new things and molding myself to different work cultures."),
  resumeLink:
    "https://drive.google.com/file/d/1RsBdXrkaQzu8O07KMshMqvqI1r9U9718/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/krishna212",
  linkedin: "https://www.linkedin.com/in/krishna-sai-mullangi-47199b173/",
  gmail: "krishnasai.mullangi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Unveiling the creator!!",
  subTitle: "Leveraging my programming skills to optimize workflows - Maximizing results with minimal human input. ",
  skills: [
    emoji("⚡ Master of the Digital Canvas: Full Stack Development for Web and Mobile Platforms"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }, 
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, Long Beach",
      logo: require("./assets/images/csulb.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2022 - December 2023",
      desc: "GPA: 3.67", 
      desc: "Courses: Advanced Analysis of Algorithms Artificial Intelligence, Pattern Recognition"
    },
    {
      schoolName: "SRM University, India",
      logo: require("./assets/images/srm.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2016 - May 2020",
      desc: "GPA: 8.12",
      desc: "Courses: Data Structures, Algorithms Design and Analysis, Database Management Systems, Computer System Architecture, Operating Systems,  Data Science, Web Design, Software Engineering Principles"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Fullstack Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "75%"
    },
    {
      Stack: "Machine learning",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false  // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Instructional Student Assistant",
      company: "California State University, Long Beach",
      companylogo: require("./assets/images/csulb.png"),
      date: "Aug 2022 - Dec 2022",
      descBullets: [
        "Provided instructional support to over 100 students in the Pattern Recognition course through one-on-one tutoring sessions and group study sessions.",
        "Contributed to the development and implementation of course curriculum and lesson plans.",
        "Maintained accurate records of student progress, including attendance, grades, and assessment scores, and provided regular updates to the course instructor."
      ]
    },
    {
      role: "Software Engineer",
      company: "Temenos",
      companylogo: require("./assets/images/temenos.png"),
      date: "Dec 2020 - Feb 2022",
      descBullets: [
        "Developed and maintained a banking application using Kony and Temenos T24.",
        "Led the development of enterprise-level microservices for mobile and web applications.",
        "Built APIs to manage millions of requests and facilitate middleware communication.",
        "Implemented a feature for adding cards to mobile wallets like Apple Pay, Google Pay, and Samsung Pay.",
        "Contributed to the design of Next Generation UI components using MVC architecture.",
        "Handled continuous integration/deployment tasks including code reviews and bug fixing." ]
    },
    {
      role: "Full Stack Intern",
      company: "Infosys",
      companylogo: require("./assets/images/infy.jpeg"),
      date: "Jan 2020 - Mar 2020",
      descBullets: [
        "Worked as a Full Stack Intern at Infosys, gaining hands-on experience in the industry.",
        "Underwent comprehensive training on the MERN Stack, with a focus on practical application over theory.",
        "Acquired valuable insights into the workings of the corporate world, enhancing my professional Understanding.",
        "Successfully designed and implemented a flight ticket booking Web Application as part of my internship project, demonstrating my ability to apply learned skills." 
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
  
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),


  achievementsCards: [
    {
      title: "Machine Learning",
      subtitle:
        "In my course, I mastered building machine learning models in Python using NumPy and scikit-learn. I learned to construct and train supervised models for prediction and binary classification tasks, focusing on linear and logistic regression. I gained a deep understanding of machine learning algorithms, including neural networks, SVMs, decision trees, and their practical applications. I also delved into optimization techniques like gradient descent, and the importance of data analysis, scaling, and PCA in preprocessing. This course has equipped me with a robust foundation in machine learning.",
      image: require("./assets/images/ml.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/V2BBFKSYVAV8"
        }
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach out to me!!"),
  subtitle:
    "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
  number: "+1 (562)-578-9182",
  email_address: "krishnasai.mullangi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
