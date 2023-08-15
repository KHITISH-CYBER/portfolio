import Github from 'public/github.svg';
import Linkedin from 'public/linkedin.svg';
import Email from 'public/email.svg';

export interface footerLinkInterface {
  icon: string;
  name: string;
  url: string;
}

interface headerInterface {
  name: string;
  imageUrl: string;
  resumeLink: string;
}

export const socialIcons: footerLinkInterface[] = [
  {
    icon: Github,
    name: 'Github',
    url: 'https://github.com/KHITISH-CYBER',
  },
  {
    icon: Linkedin,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/khitish-kumar-sahoo-15a473206/',
  },
  {
    icon: Email,
    name: 'Email',
    url: 'khitishkumar07@gmail.com',
  },
];

export const headerData: headerInterface = {
  name: 'Khitish',
  imageUrl:
    '/public/profile pic.jpg',
  resumeLink: 'https://drive.google.com/file/d/1ApZ64t5OANQZ7NwL8cP7odNphOrk84He/view?usp=sharing',
};
