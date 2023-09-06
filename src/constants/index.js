import { BiSupport } from "react-icons/bi";
import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";
import { MdOutlineDesignServices, MdWebAsset } from "react-icons/md";
import {
  AiOutlineAppstore,
  AiOutlineShoppingCart,
  AiOutlineSolution,
} from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const about_services = [
  {
    title: "24/7 Online support",
    desc: "Our committed team is accessible around-the-clock to provide online support, ensuring that your business activities proceed without any issue. You can depend on us for quick support whenever you need it.",
    icon: <BiSupport size={25} />,
  },
  {
    title: "Value added services",
    desc: "Our value-added services go above and beyond the norm by providing strategic insights and tailored solutions that accelerate the growth of your company. Discover the benefits of our all-encompassing pursuit of excellence.",
    icon: <MdOutlineDesignServices size={25} />,
  },
  {
    title: "Scalable solutions",
    desc: "Embrace growth confidently with our scalable solutions designed to evolve alongside your business, ensuring your operations remain efficient and effective as you expand. Unlock new levels of flexibility and performance with our tailored scalability.",
    icon: <AiOutlineSolution size={25} />,
  },
];

export const services = [
  {
    title: "App development",
    desc: "Crafting innovative and user-centric mobile app development to drive digital transformation.",
    icon: (
      <AiOutlineAppstore
        className="mt-1 h-7 w-7 flex-none"
        color="#776fff"
        size={30}
      />
    ),
  },
  {
    title: "Web Development",
    desc: "Delivering dynamic and responsive web development services for a seamless online presence.",
    icon: (
      <MdWebAsset
        className="mt-1 h-7 w-7 flex-none"
        color="#776fff"
        size={30}
      />
    ),
  },
  {
    title: "E commerce Store",
    desc: "Empowering businesses with comprehensive e-commerce store solutions for online growth.",
    icon: (
      <AiOutlineShoppingCart
        className="mt-1 h-7 w-7 flex-none"
        color="#776fff"
        size={25}
      />
    ),
  },
  {
    title: "Blockchain Development",
    desc: "Empowering businesses with comprehensive e-commerce store solutions for online growth.",
    icon: (
      <FaEthereum
        className="mt-1 h-7 w-7 flex-none"
        color="#776fff"
        size={25}
      />
    ),
  },
];
