/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: " ",
};

// Home Page
const greeting = {
  title: "Hello.",
  title2: "Uttam!",
  logo_name: "uttam.b()",
  nickname: "uttamb / picleric",
  full_name: "Uttam Madhukar Bangera",
  subTitle:
    "Software Engineer, Linux & Networks Enthusiast. Constantly Evolving...",
  resumeLink:
    "https://drive.google.com/file/d/1pOgH8DOPs0xfVPAGUtjLYOfUsM0uPcQR/view?usp=sharing",
  mail: "mailto:uttambangera@outlook.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/UttamB96",
  linkedin: "https://www.linkedin.com/in/uttam-bangera-089622/",
  gmail: "uttambangera@outlook.com"
  //gitlab: " ",
  //facebook: " ",
  //twitter: " ",
  //instagram: " ",
};

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Backend development using Node.JS and Express.JS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        /*{
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },*/
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        /*{
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#f89820",
          },
        },
        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },*/
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        /*{
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-js",
          style: {
            //backgroundColor: "#FFFFFF",
            color: "#339933",
          },
        },*/
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified AWS Cloud Practioner",
        "⚡ Experience working on multiple cloud platforms, including Azure and GCP.",
        "⚡ Deploying Microsoft Chatbot on cloud to use on websites",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Data Analysis and Visualization Tools.",
        "⚡ Certifications from Udemy",
        "⚡ Project on GitHub based on Credit Card Churn",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        /*{
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },*/
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dalhousie University",
      subtitle: "Masters of Engineering - Internetworking",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ Studied Advanced Networking and Cyber Security Concepts.",
        "⚡ Learnt Advanced Topics on Cloud Infrastructure and Virtualization.",
        "⚡ Worked on projects related to network automation and traffic monitoring.",
      ],
      website_link: "https://www.dal.ca/",
    },
    {
      title: "St. Joseph Engineering College",
      subtitle: "B.Tech. in Mechnical Engineering",
      logo_path: "sjec.jpg",
      alt_name: "SJEC",
      duration: "2014 - 2018",
      descriptions: [
        "⚡Studied Microprocessors, Programming and Robotics as electives during my course."
      ],
      website_link: "https://sjec.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/18p1i3FQXokNJPJuwYl0Go5uC13ClRMzT/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Data Science and Machine Learning",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1H2WKDIimSfItGKolyb4QQ5Dida5P4wGo/view?usp=sharing",
      alt_name: "Udemy",
      color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have over 4 years of work experience as a Software Engineer and Analyst. I am actively seeking new opportunites to showcase my expertise and skills to drive business forward.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "LTIMindtree",
          company_url: "https://www.ltimindtree.com/",
          logo_path: "lti.jpg",
          duration: "October 2018 - October 2021",
          location: "Pune, India",
          description:
            "LTIMindtree is a global technology consulting and digital solutions company that enables enterprises across industries to reimagine business models, accelerate innovation, and maximize growth by harnessing digital technologies.",
          color: "#FFBB33",
        },
        {
          title: "Associate Consultant",
          company: "Infosys Limited",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys-logo.webp",
          duration: "October 2021 - December 2022",
          location: "Bengaluru, India",
          description:
            "Infosys is a global leader in next-generation digital services and consulting, enabling clients in more than 56 countries to navigate their digital transformation.",
          color: "#FF6619",
        },
      ],
    },
    {
      title: "Accomplishments",
      experiences: [
        {
          title: "Pat on the Back Award",
          company: "LTI Mindtree",
          company_url: "https://www.ltimindtree.com/",
          logo_path: "lti.jpg",
          duration: "Oct 2018 - Oct 2021",
          location: "Pune, India",
          description: "Received appreciation from organization for business deliverables.",
          color: "#FF6619",
        },
        {
          title: "Scholarships",
          company: "Dalhousie University",
          company_url: "https://www.dal.ca/",
          logo_path: "dal.png",
          duration: "Jan 2023 - July 2024",
          location: "Halifax, NS, Canada",
          description: "Received 4 scholarships for being among the top 10% in class.",
          color: "#FFBB33",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Teaching Assistant",
          company: "Dalhousie University",
          company_url: "https://www.dal.ca/",
          logo_path: "dal.png",
          duration: "February - March 2024",
          location: "Halifax, NS, Canada",
          description:
            "Provided comprehensive support in teaching-related tasks, including student mentorship and laboratory management, ensuring a cohesive and supportive learning environment.",
          color: "#FFBB33",
        },
        {
          title: "President - Automation and Robotics Club",
          company: "St, Joseph Engineering College",
          company_url: "https://sjec.ac.in/",
          logo_path: "sjec.jpg",
          duration: "Summer of 2017 - Summer of 2018",
          location: "Mangaluru, India",
          description:
            "Day to day resposibilites of this position included planning and organizing programming and robotics workshops, as well as contests for both club members and students.",
          color: "#FF6619",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "uttam.png",
    description:
      "You can contact me through email or the links mentioned below. I will get back to you as soon as possible.",
  }
};

const projects = {
  data: [
    {
      name: "Credit Card Customer Churn",
      url: "https://github.com/UttamB96/Python-Data-Jungle/",
      description: "An ML model that predicts if a Credit Card customer will churn, based on the provided input data.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Pandas",
          iconifyClass: "logos-pandas",
        },
        {
          name: "Seaborn",
          iconifyClass: "logos-seaborn",
        },
        {
          name: "Numpy",
          iconifyClass: "logos-numpy",
        },
        {
          name: "Matplotlib",
          iconifyClass: "logos-matplotlib",
        }
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
