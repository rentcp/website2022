import booksLogoFirst from 'Images/books-logo-first.png';
import booksLogoRest from 'Images/books-logo-rest.png';

//import proLogoFirst from 'Images/professional-logo-first.png';
//import proLogoRest from 'Images/professional-logo-rest.png';

import uofmLogoFirst from 'Images/uofm-logo-first.png';
import uofmLogoRest from 'Images/uofm-logo-rest.png';

import booksBackgroundImage from 'Images/background/background-image-books.jpg';
//import proBackgroundImage from 'Images/background/background-image-pro.jpg';
import collegeBackgroundImage from 'Images/background/background-image-college.jpg';

export const timelineListValue = [
  {
    id: 'UofM',
    companyName: 'College',
    position: '2000-2003 (3.5 years)',
    duration: 'BS, Chemical Engineering',
    location: 'Ann Arbor',
    roleDetail: '',
    companyDetail: '',
    firstLogo: uofmLogoFirst,
    restLogo: uofmLogoRest,
    restMargin: 37,
    backgroundImage: collegeBackgroundImage,
    projects: []
  },
  //{
    //id: 'professional',
    //companyName: 'Professional Employment',
    //link: 'https://www.linkedin.com/in/chris-rentsch/',
    //position: 'Process Development Manager. Helping food, energy, plastics and chemical start-up companies build 100-1000x larger',
    //duration: 'Jan 2004 - Present (19 years)',
    //location: '',
    //roleDetail: 'roleDetail.',
    //companyDetail: 'companyDetail.',
    //firstLogo: proLogoFirst,
    //restLogo: proLogoRest,
    //restMargin: 30,
    //backgroundImage: proBackgroundImage,
    //projects: []
  //},
  {
    id: 'books',
    companyName: 'Reading',
    link: '',
    position: '',
    duration: '',
    location: '',
    roleDetail: '',
    firstLogo: booksLogoFirst,
    restLogo: booksLogoRest,
    restMargin: 30, // the secound image margin because logo length is different
    backgroundImage: booksBackgroundImage,
    projects: ['atomic', 'hamming', 'feynman', 'GEB', 'tails', 'grant', 'pi', 'noise', 'physics']
  }
];