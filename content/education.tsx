export interface EducationDataProps {
  degree: string;
  school: string;
  date: string;
  url: string;
}

export const educationData: EducationDataProps[] = [
  {
    degree: 'B.Tech in Electrical Engineering',
    school: 'National Institute of Technology, Rourkela',
    date: '2020 - Present',
    url: 'https://nitrkl.ac.in/',
  },
  {
    degree: 'Higher Secondary Education',
    school: 'SAI International School, Bhubaneshwar',
    date: '2018 - 2020',
    url: 'https://odishavikash.com/',
  },
  {
    degree: 'Secondary Education',
    school: 'Saint Joseph School, Kendrapara',
    date: '2006-2018',
    url: 'http://davcda.org/',
  },
];
