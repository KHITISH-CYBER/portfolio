import { IconType } from 'react-icons';
import Github from 'public/github.svg';
import Globe from 'public/globe.svg';
import Playstore from 'public/playstore.svg';

export interface linkInterface {
  icon: any;
  name: string;
  url: string;
}

export interface experienceInterface {
  title: string;
  style: string;
  isWeb: boolean;
  image: string;
  deployLink: string;
  description: string;
  technologies: string[];
  links: linkInterface[];
}

export const projectData: experienceInterface[] = [
  {
    title: 'Netflix Movies and TV Shows Analysis EDA Project',
    style: 'normal',
    isWeb: true,
    image:
      'https://res.cloudinary.com/da8nxkd2u/image/upload/v1692127303/Netflix_Data_Visualization_ghtbll.jpg',
    description: `Utilized Python, Jupyter Notebook, Pandas, NumPy, Matplotlib, and
    Seaborn to comprehensively analyze Netflix content. Conducted data
    cleaning, preprocessing, and exploratory analysis, unveiling trends in
    types, ratings, annual additions, genres, countries, and show dura‐
    tion. Visualized data to showcase Netflix’s worldwide expansion.
    `,
    deployLink: 'https://project-nft-docket.vercel.app/',
    technologies: ['Python', 'Pandas', 'Numpy', 'Data Analysis', 'Matplotlib', 'Seaborn', 'Jupyter'],
    links: [
      {
        icon: Github,
        name: 'Github',
        url: 'https://github.com/sambit-sankalp/project-nftdocket',
      },
      {
        icon: Globe,
        name: 'Website',
        url: 'https://project-nft-docket.vercel.app/',
      },
    ],
  },
  {
    title: 'Advanced Sales Dashboard Power BI Project',
    style: 'reverse',
    isWeb: true,
    image:
      'https://res.cloudinary.com/da8nxkd2u/image/upload/v1692128197/PBI_PROJECT_xntoat.jpg',
    description: `Developed advanced sales dashboard in Power BI with a 15‐day sales
    forecast. Utilized Power BI for data cleaning, DAX queries, and diverse
    visualizations to showcase detailed sales projections, essential KPIs,
    and strategic insights through time series analysis. `,
    
    
    deployLink:
      'https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning',
    technologies: ['Power BI','KPIs', 'DAX Queries', 'Forecasting'],
    links: [
      // {
      //   icon: Github,
      //   name: 'Github',
      //   url: 'https://github.com/Monday-Morning/project-pegasus',
      // },
      {
        icon: Playstore,
        name: 'Playstore',
        url: 'https://play.google.com/store/apps/details?id=in.ac.nitrkl.mondaymorning',
      },
    ],
  },
  {
    title: 'SuperStore Dashboard MS Excel Project',
    style: 'normal',
    isWeb: true,
    image:
      'https://res.cloudinary.com/da8nxkd2u/image/upload/v1692127303/Customer-Analytics-Dashboard-in-Excel-1_jzxpwj.png',
    description: `Built an Excel dashboard with end‐to‐end data operations : data
    cleaning, processing, analysis and visualization. Utilized advanced Ex‐
    cel features including pivot tables, pivot‐charts, and slicers to craft
    impactful reports, charts, and insights`,
    deployLink: 'https://tedxnitrourkela.com/',
    technologies: ['MS Excel'],
    links: [
      {
        icon: Github,
        name: 'Github',
        url: 'https://github.com/sambit-sankalp/website-v2',
      },
      {
        icon: Globe,
        name: 'Website',
        url: 'https://tedxnitrourkela.com/',
      },
    ],
  },
  {
    title: 'Credit Card Fraud Detection Model ML Project',
    style: 'reverse',
    isWeb: true,
    image:
      'https://res.cloudinary.com/da8nxkd2u/image/upload/v1692128302/credit-card2790_hnq5a9.jpg',
    description: `Built a Credit card Fraud Detection System using Machine Learning
    with Python and have used the Logistic Regression model.`,
    deployLink: 'https://pilot-two.vercel.app/',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'Numpy', 'Scikit Learn'],
    links: [
      {
        icon: Github,
        name: 'Github',
        url: 'https://github.com/sambit-sankalp/project-pilot',
      },
      {
        icon: Globe,
        name: 'Website',
        url: 'https://pilot-two.vercel.app/',
      },
    ],
  },
];
