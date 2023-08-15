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
    date: '2017 - 2019',
    url: 'https://saiinternational.edu.in/',
  },
  {
    degree: 'Secondary Education',
    school: 'Saint Joseph School, Kendrapara',
    date: '2005-2017',
    url: 'https://sjskendrapara.com/',
  },
];
