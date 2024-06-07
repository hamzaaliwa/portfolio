import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine learning engineer",
    icon: mobile,
  },
  {
    title: "Data engineering",
    icon: backend,
  },
  {
    title: "Cloud and DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ML Developer",
    company_name: "ENSIAS company",
    icon: starbucks,
    iconBg: "#383E56",
    date: "JULY 2023 - Sept 2021",
    points: [
      "Detecting fake news using machine learning and natural language processing involves training algorithms to analyze patterns in language and content to distinguish between genuine and false information.",
      "By leveraging machine learning techniques, such as classification and sentiment analysis, combined with natural language processing, we can develop models capable of identifying misleading or deceptive news articles.",
      "Using sophisticated algorithms, machine learning models can assess various linguistic features, including tone, style, and context, to determine the credibility of news sources and the accuracy of their content.",
      "Through the application of advanced computational methods, detecting fake news becomes more efficient and accurate, helping to combat the spread of misinformation in today's digital landscape.",
    ],
  }
  /*{
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "Web platform",
    description:
      "The School Internship Management Web Platform is a centralized system designed to streamline the administration of student internships within educational institutions. This platform facilitates communication between students, educational staff, and internship providers, offering features such as internship listings, application management, progress tracking, and reporting. By providing a cohesive interface for managing internships, the platform aims to enhance the efficiency of internship programs, optimize student learning experiences, and foster stronger connections between students and potential employers.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
         "Designing a mini Pascal compiler involves creating a software tool that translates Pascal source code into executable machine code. It typically includes components such as a lexical analyzer, syntax analyzer, semantic analyzer, intermediate code generator, optimizer, code generator, and symbol table. These components work together to analyze the structure and semantics of the Pascal code, generate optimized intermediate representations, and translate them into executable machine code for a target platform, facilitating the execution of Pascal programs",
    tags: [
     {
        name: "C#",
        color: "blue-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "IA project",
    description:
      "Creating an AI model for recognizing emotions from meme images involves collecting a labeled dataset, designing and training a convolutional neural network (CNN) architecture, fine-tuning pre-trained models with transfer learning techniques, and optimizing performance through techniques like data augmentation and regularization. Once trained, the model can be deployed in applications where users upload meme images for emotion recognition, with regular updates and retraining to ensure continued accuracy and effectiveness.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {

    name: "web Platforme",
    description:
      "Developing a system of inventory management in multiple warehouses using web services entails creating a scalable and efficient architecture that allows real-time tracking and management of inventory across various locations. This involves designing RESTful APIs for inventory management operations such as adding, updating, and retrieving inventory items, as well as integrating authentication and authorization mechanisms for secure access. Additionally, implementing features like inventory synchronization, stock level alerts, and reporting functionalities can enhance the system's usability and effectiveness. By leveraging web services, the system enables seamless communication and coordination between warehouses, facilitating streamlined inventory management processes.",
    tags: [
      {
        name: "GrapheQL",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "ReactJS",
        color: "pink-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
