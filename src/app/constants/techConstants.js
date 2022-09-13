import reactIcon from 'Icons/technology/pandas-tech-icon.png';
import reactNativeIcon from 'Icons/technology/react-native-tech-icon.png';
import androidIcon from 'Icons/technology/python-tech-icon.png';
import laravelIcon from 'Icons/technology/chemical-tech-icon.png';
import electronIcon from 'Icons/technology/electron-tech-icon.png';

import reactBackgroundImage from 'Images/technology/pandas-background-image.png';
import reactNativeBackgroundImage from 'Images/technology/react-native-background-image.png';
import androidBackgroundImage from 'Images/technology/python-background-image.png';
import laravelBackgroundImage from 'Images/technology/chemical2-background-image.png';
import electronBackgroundImage from 'Images/technology/pandas-background-image.png';

export const techList = [
  {
    id: 'react',
    name: 'Studying CO2',
    firstLogo: reactIcon,
    backgroundImage: reactBackgroundImage,
    description: `The first satellite study measuring the radiative effects of increasing carbon dioxide in the atmosphere.`,
    projects: ['arxiv'],
  },
//  {
//    id: 'android',
//    name: 'Python',
//    firstLogo: androidIcon,
//    backgroundImage: androidBackgroundImage,
//    description: `General Python capabilities with specific skills in data harvesting (urllib.request, BeautifulSoup), processing (Pandas, SciPy) and visualization (Matplotlib, Seaborn)`,
//    projects: ['vc_music_player', 'measure']
//  },
  {
    id: 'laravel',
    name: 'Process Design',
    firstLogo: laravelIcon,
    backgroundImage: laravelBackgroundImage,
    description: `Chemical process design and development, starting from bench scale chemistry.`,
    projects: ['om1']
  },
  {
    id: 'react-native',
    name: 'TSP',
    firstLogo: reactNativeIcon,
    backgroundImage: reactNativeBackgroundImage,
    description: `Travelling Salesman Problem`,
    projects: ['tsp1']
  }
];
