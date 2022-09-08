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
    id: 'android',
    name: 'Python',
    firstLogo: androidIcon,
    backgroundImage: androidBackgroundImage,
    description: `Generaly Python capabilities with specific skills in data harvesting (urllib.request, BeautifulSoup), processing (Pandas, SciPy) and visualization (Matplotlib, Seaborn)`,
    projects: ['vc_music_player', 'measure']
  },
  {
    id: 'react',
    name: 'Pandas',
    firstLogo: reactIcon,
    backgroundImage: reactBackgroundImage,
    description: `Pandas is a Python package for handling large datasets. I have written automated Python scripts to process 40+ TB of data.
    <br/><br/>Text 2`,
    projects: ['snapteam', 'nykaa'],
  },
  {
    id: 'laravel',
    name: 'Process Design',
    firstLogo: laravelIcon,
    backgroundImage: laravelBackgroundImage,
    description: `Chemical process design and development, starting from bench scale chemistry.`,
    projects: ['benefactory', 'snapteam']
  },
  {
    id: 'react-native',
    name: 'DOE',
    firstLogo: reactNativeIcon,
    backgroundImage: reactNativeBackgroundImage,
    description: `Assembling a proper Design of Experiment (DOE) requires a specialized understanding of the exploration space as well as the various DOE algorithms (Box-Behnken, Box-Wilson, Plackett-Burman, Latin Hypercube, etc)`,
    projects: ['lighthouse', 'pulse']
  }
];
