import {
  AppIcon,
  DesignIcon,
  MarketingIcon,
  BusinessIcon
} from "./Icons";
export const Process = {
  title: "Our Process",
  description:
    "Our thoughtful process covers all necessary steps to ensure quality and reliability.",

  items: [
    //eacho object is Process
    {
      title: "Gather Information",
      description:
        "A deep understanding of your brand and your audience is crucial in developing and providing what the user ultimately needs.",
      img: "/assest/proccess/gather_info.jpg", // 443 x 344
    },
    {
      title: "Propose a Plan",
      description:
        "Here we propose an execution plan that would fit your needs and budget.",
      img: "/assest/proccess/proposeplan.jpg", // 443 x 344
    },
    {
      title: "Design",
      description:
        "Whether you choose to use a template or a custom tailored design, we'll walk the extra mile and make sure the design to be unique and to fit with your brand without compromising quality. One of our strengths is our high standards and appreciation of intelligent designs. All our models will consider the following elements to ensure a positive and unforgettable user experience",
      img: "/assest/proccess/design.jpg", // 443 x 344
    },
    {
      title: "Code",
      description:
        "This is the part we do best and enjoy the most. Innovation requires a new perspective and flexibility, we retain all the technical coding knowledge to bring advanced and practical solutions.",
      img: "/assest/proccess/code.jpg", // 443 x 344
    },
    {
      title: "Test and Update",
      description:
        "After finishing with the initial iteration, we will give the chance to review your website and ask for further modifications. Meanwhile, we will do more testing and update the site repetitively.",
      img: "/assest/proccess/testupdate.jpg", // 443 x 344
    },
    {
      title: "Launch",
      description:
        "Once you're satisfied with the work we've accomplished, we'll launch your project.",
      img: "/assest/proccess/launch.jpg", // 443 x 344
    },
    {
      title: "Keep in touch",
      description:
        "We'll be here, one phone call or text away in case you need to edit or upgrade your website. We also offer optional yearly website maintenance and improved service.",
      img: "/assest/proccess/keep.jpg", // 443 x 344
    },
  ],
};

export const portfolio = {
  title: "A Glimpse Of What Nu Terra Labs, Can Do For You",
  description:
    "From Social Media, Business Listings, Software Development, Hardware Development, Automation/Robotics, Cloud Solutions, IT Support Ecommerce Website, Drop Shipping & more We Can Help You With All Your Needs Working Within Your Budget.",

  items: [
    //eacho object is project
    {
      serviceName: "Web Design",
      title: "",
      thumbnails: "/assest/project/d.jpg",
      description:
        "We acknowledge the importance of giving as many options to you in the design process to meet your needs and budget. You get to choose whether you want to use a cheaper and more economical approach with an elegant pre-designed template or use a unique & fully customizable tailored design with no creative constraints.One of our strengths is our high standards and appreciation of intelligent designs. Therefore, all our models will consider the following elements to ensure a positive and unforgettable user experience.",
      images: ["/assest/project/d.jpg"],
    },
    {
      serviceName: "Applications",
      title: "",
      thumbnails: "/assest/project/a.jpg",
      description:
        "Achieve your project's potential with smart and reliable solutions. Implement complex functions and features in a fast and efficient manner.<br/>Applications provide substantial flexibility and versatility that will help your company offer new innovative and convenient service to win over new clients.",
      images: ["/assest/project/a.jpg"],
    },
    {
      serviceName: "Cloud Solutions",
      title: "",
      thumbnails: "/assest/project/c.jpg",
      description:
        "Our team is ready to help you build and deploy your solutions on today’s platforms. With experience building solutions leveraging cloud platforms with scalability in mind, allow us to help you grow. Whether its IoT, support, or development, the Nu Terra team is ready.",
      images: ['/assest/project/c.jpg'],
    },
    {
      serviceName: "Online Marketing",
      title: "",
      thumbnails: "/assest/project/m.jpg",
      description:
        "Online/Digital marketing, a variety of methods to boosting your Online performance. Our online marketing package will help improve your organic search results and increase traffic to your website. We use proven and reliable SEO and keyword placement techniques and audit tools. We also offer a social media marketing package that will boost your online presence. Ask us how? SEO Audit Effective Content Writing Anchor text & keywords placement Search Engine Marketing Effective Design across platforms",
       images: ["/assest/project/m.jpg"],
    },
    {
      serviceName: "Robotics/Hardware",
      title: "",
      thumbnails: "/assest/project/r.jpg",
      description: "Our SME’s will work with you to analyze your problems and come up with potential software and hardware solutions. With a wide variety of experience in Embedded Systems, Robotics Systems and Control Systems Nu Terra Labs’ will advise on the design of technology and architecture, as well as include roadmaps for scalability and security, a rough estimate of time and costs, and more.",
      images: ["/assest/project/r.jpg"],
    },
  ],
};

export const services = [
  {
    label: "Website Design",
    icon: DesignIcon,
    title: "Whatever your websites need we can help!",
    description:
      "Websites are everywhere, with the world online having a good website that stands out can be a challenge. With every shifting requirement they continually evolve, ensuring you always have that perfect website we are here to help. We acknowledge the importance of giving as many options to you in the design process to meet your needs and budget. You get to choose whether you want to use a cheaper and more economical approach with an elegant pre-designed template or use a unique & fully customizable tailored design with no creative constraints. Whether it be designs and graphics, adding new features, e-commerce store, drop shipping, custom implementations or anything else web related you can think of, our team of experts will be able to help.",
    features: {
      title: "Bullet Points",
      items: [
        "Pre-designed Templates",
        "Efficient, Reliable and Economical",
        "Custom Tailored Design",
        "Unique and Creative Design",
      ],
    },
    img: "/assest/services/s1.jpg",
  },
  {
    label: "Applications",
    icon: AppIcon,
    title: "Applications can be diverse",
    description:
      "Applications might sound scary. Hearing about Android, IOS, Windows, & even web applications, there are so many devices and languages to choose from. But, applications provide substantial flexibility and versatility that will help your company offer new innovative and convenient service to win over new clients That’s where Nu Terra Labs comes in to help you ensure you have team to ensure fulfil, you’re requirements and ace the delivery.  Whether you’re starting from scratch or already have an application, we can help you with any problems and you take your project to the next level.",
      img: "/assest/services/s2.jpg",
      features: {
      title: "Bullet Points",
      items: [
        "Implement complex functions and features in a fast and efficient manner",
      ],
    },
  },
  {
    label: "Online Marketing",
    icon: MarketingIcon,
    title: "Getting Value.",
    description:
      "Online Marketing/Digital marketing is a variety of methods to boosting your Online performance. Our online marketing package will help improve your organic search results and increase traffic to your website. We use proven and reliable SEO and keyword placement techniques and audit tools. We also offer a social media marketing package that will boost your online presence. Ask us how?",
      img: "/assest/services/s3.jpg",
      features: {
      title: "Bullet Points",
      items: [
        "SEO Audit",
        "Effective Content Writing",
        "Anchor text & keywords placement",
        "Search Engine Marketing",
        "Effective Design across platforms",
      ],
    },
  },
  {
    label: "Business Solutions",
    icon: BusinessIcon,
    title: "Nu Terra Labs is able to offer you",
    description:
      "Have a business idea or project but not sure how to get it done? We will help you through the entire product development cycle, from initial requirements analysis to the implementation and adoption. Our team has profound understanding of service-oriented architectures, complex enterprise application and UI/UX design that enables them to develop high-performing web solutions.Our SME’s will work with you to analyze your problems and come up with potential software solutions. Nu Terra Labs’ will advise on the design of technology and architecture, as well as include roadmaps for scalability and security, a rough estimate of time and costs, and more.",
      img: "/assest/services/s4.jpg",
      features: {
      title: "Bullet Points",
      items: [
        
      ],
    },
  },
];
