// import Website1 from 'media/projects/websites/1.png';
// import Website2 from 'media/projects/websites/2.png';
// import Website3 from 'media/projects/websites/3.png';
// import Website4 from 'media/projects/websites/4.png';
// import Website5 from 'media/projects/websites/5.png';
// import Website6 from 'media/projects/websites/6.png';
// import Website7 from 'media/projects/websites/7.png';
// import Website8 from 'media/projects/websites/8.png';
// import Ecommerce1 from 'media/projects/ecommerce/1.png';
// import Ecommerce2 from 'media/projects/ecommerce/2.png';
// import Lp1 from 'media/projects/landing-pages/1.png';
// import Lp2 from 'media/projects/landing-pages/2.png';
// import Lp3 from 'media/projects/landing-pages/3.png';
// import Lp4 from 'media/projects/landing-pages/4.png';
// import Lp5 from 'media/projects/landing-pages/5.png';
// import Lp6 from 'media/projects/landing-pages/6.png';
// import Lp7 from 'media/projects/landing-pages/7.png';
// import Lp8 from 'media/projects/landing-pages/8.png';
// import Lp9 from 'media/projects/landing-pages/9.png';
// import Lp10 from 'media/projects/landing-pages/10.png';
// import Lp11 from 'media/projects/landing-pages/11.png';
// import Lp12 from 'media/projects/landing-pages/12.png';
// import Lp13 from 'media/projects/landing-pages/13.png';
// import Lp14 from 'media/projects/landing-pages/14.png';
// import Lp15 from 'media/projects/landing-pages/15.png';
// import Lp16 from 'media/projects/landing-pages/16.png';
// import EmailTemplates1 from 'media/projects/email-templates/1.png';
// import EmailTemplates2 from 'media/projects/email-templates/2.png';
// import EmailTemplates3 from 'media/projects/email-templates/3.png';
// import EmailTemplates4 from 'media/projects/email-templates/4.png';
// import EmailTemplates5 from 'media/projects/email-templates/5.png';
// import EmailTemplates6 from 'media/projects/email-templates/6.png';
// import EmailTemplates7 from 'media/projects/email-templates/7.png';
import { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
  rating: number;
  ratingCount: number;
  liveLink?: string;
  purpose?: string;
  role?: string;
  overview?: string;
  challenges?: string;
  solutions?: string;
  results?: string;
  features?: string[];
  tools?: string[];
};

export type ProjectData = {
  [key: string]: Project[];
};

export const projects: ProjectData = {
  all: [
    // ... (copy all project objects from ProjectCards.tsx here) ...
  ],
  website: [],
  virtualAssistant: [],
  landingPages: [],
  ecommerce: [],
  emailTemplates: []
};

type CategoryKey = keyof typeof projects;
projects.all.forEach(project => {
  if (projects[project.category as CategoryKey]) {
    projects[project.category as CategoryKey].push(project);
  }
}); 