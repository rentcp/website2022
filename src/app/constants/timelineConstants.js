import booksLogoFirst from 'Images/books-logo-first.png';
import booksLogoRest from 'Images/books-logo-rest.png';

import proLogoFirst from 'Images/tailoredtech-logo-first.png';
import proLogoRest from 'Images/tailoredtech-logo-rest.png';

import uofmLogoFirst from 'Images/uofm-logo-first.png';
import uofmLogoRest from 'Images/uofm-logo-rest.png';

import booksBackgroundImage from 'Images/background/background-image-books.jpg';
import proBackgroundImage from 'Images/background/background-image-pro.jpg';
import collegeBackgroundImage from 'Images/background/background-image-college.jpg';

export const timelineListValue = [
  {
    id: 'UofM',
    companyName: 'Chemical Engineering',
    position: 'Summa cum laude',
    duration: '2000-2003 (3.5 years)',
    location: 'Ann Arbor',
    roleDetail: '',
    companyDetail: '',
    firstLogo: uofmLogoFirst,
    restLogo: uofmLogoRest,
    restMargin: 37,
    backgroundImage: collegeBackgroundImage,
    projects: []
  },
  {
    id: 'professional',
    companyName: 'Professional Experience',
    link: 'https://www.linkedin.com/in/chris-rentsch/',
    position: 'Process Development Manager',
    duration: 'Jan 2004 - Present (19+ years)',
    location: 'USA',
    roleDetail: 'roleDetail.',
    companyDetail: 'companyDetail.',
    firstLogo: proLogoFirst,
    restLogo: proLogoRest,
    restMargin: 34,
    backgroundImage: proBackgroundImage,
    projects: ['snapteam']
  },
  {
    id: 'books',
    companyName: 'Books',
    link: '',
    position: '',
    duration: 'Notes from noteworthy books',
    location: '',
    roleDetail: '',
    firstLogo: booksLogoFirst,
    restLogo: booksLogoRest,
    restMargin: 26, // the secound image margin because logo length is different
    backgroundImage: booksBackgroundImage,
    projects: ['feynman']
  }
];

