import { EducationRecord, LanguageItem } from './Education.interface';

export const EDUCATION_SECTION_HEADER = {
  eyebrow: 'Academic Foundation & Credentials',
  titleStart: 'Education &',
  titleHighlight: 'Languages',
  subtitle:
    'Strong engineering fundamentals in Electronics and Communication Engineering combined with specialized MERN & enterprise frontend development.',
};

export const EDUCATION_RECORDS: EducationRecord[] = [
  {
    id: 'be-ece',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Electronics and Communication Engineering',
    institution: 'RVS College of Engineering and Technology',
    location: 'Coimbatore, Tamil Nadu',
    period: '2017 – 2021',
    primary: true,
  },
  {
    id: 'mern-certification',
    degree: 'MERN Full Stack Development Specialization',
    field: 'Full-Stack Web Engineering (MongoDB, Express, React, Node.js)',
    institution: 'Be Practical Tech Solutions',
    location: 'Bengaluru, Karnataka',
    period: '2022 (6 Months)',
    primary: true,
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'Mathematics, Physics, Chemistry & Computer Science',
    institution: 'Chinnasamy Ammal Boys Higher Secondary School',
    location: 'Tiruppur, Tamil Nadu',
    period: '2015 – 2017',
  },
  {
    id: 'sslc',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    field: 'General Academic Curriculum',
    institution: 'Chinnasamy Ammal Boys Higher Secondary School',
    location: 'Tiruppur, Tamil Nadu',
    period: '2013 – 2015',
  },
];

export const SPOKEN_LANGUAGES: LanguageItem[] = [
  {
    name: 'English',
    proficiency: 'Professional Working Proficiency',
  },
  {
    name: 'Tamil',
    proficiency: 'Native / Bilingual Proficiency',
  },
];
