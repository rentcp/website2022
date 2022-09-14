import satelliteIcon from 'Icons/project-icon-satellite.png';
import arxivIcon from 'Icons/project-icon-arxiv.png';
import feynmanIcon from 'Icons/feynman_icon.png';
import atomicIcon from 'Icons/atomic_bomb_icon.png'
import linkedinIcon from 'Icons/icon-LinkedIn.png'
import om1Icon from 'Icons/project-icon-om1.png';

export const projectsListValue = {
  tsp1: {
    name: 'Angular Study',
    tech: [],
    involvement: 'Sole Author',
    icon: arxivIcon,
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Empirical study of large TSP solutions'
      },
      {
        type: 'points',
        highlight: 'green',
        title: 'Build a software tool that observed that there is a tendency for optimal TSP solutions to have certain characteristics:',
        value: [
          'Aversion for acute angles between cities',
          'Exponential distribution of path lengths',
        ]
      },
      {
        type: 'text',
        highlight: 'green',
        value: 'text.'
      },
      {
        type: 'header',
        value: 'My Contribution:',        
      },
      {
        type: 'text',
        value: 'Contributions.',
      }
    ]
  },
  
  arxiv: {
    name: 'Measurement of greenhouse effect',
    tech: [],
    involvement: 'Sole Author',
    icon: arxivIcon,
	link: {
      type: 'visit',
      value: 'https://arxiv.org/abs/1911.10605'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Infrared spectrophotometric measurements made between 2003-2021 totalling 40 TB were downloaded, filtered for clear-sky conditions, then trended to show the impact of rising CO2 levels in the atmosphere.'
      },
      {
        type: 'points',
        highlight: 'green',
        title: 'This was a ground-breaking study because:',
        value: [
          'First global, space-based assessment',
          'First empirical measuremennt of CO2 effective radiative forcing',
          'First quantitative check of computer LBL models of CO2',
        ]
      },
      {
        type: 'text',
        highlight: 'green',
        value: 'This study led to a publication in 2022.'
      },
      {
        type: 'header',
        value: 'My Contribution:',        
      },
      {
        type: 'text',
        value: 'Contributions.',
      }
    ]
  },
  
  feynman: {
    name: 'The Pleasure of Finding Things Out',
    tech: [],
    icon: feynmanIcon,
    involvement: '',
    link: {
      type: 'visit',
      value: 'https://www.amazon.com/Pleasure-Finding-Things-Out-Richard/dp/0465023959/ref=d_pd_sbs_sccl_2_1/131-7494496-0122603'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'First Text.'
      },
      {
        type: 'header',
        value: 'Header:',        
      },
      {
        type: 'text',
        value: 'Second Text.'
      },
      {
        type: 'points',
        value: [
          'Point 1',
          'Point 2',
          'Point 3'
        ]
      }
    ]
  },
  
  atomic: {
    name: 'The Making of the Atomic Bomb',
    tech: [],
    icon: atomicIcon,
    involvement: '',
    link: {
      type: 'visit',
      value: 'https://www.amazon.com/Pleasure-Finding-Things-Out-Richard/dp/0465023959/ref=d_pd_sbs_sccl_2_1/131-7494496-0122603'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'First Text.'
      },
      {
        type: 'header',
        value: 'Header:',        
      },
      {
        type: 'text',
        value: 'Second Text.'
      },
      {
        type: 'points',
        value: [
          'Point 1',
          'Point 2',
          'Point 3'
        ]
      }
    ]
  },
  
  work: {
    name: 'Work History',
    tech: [],
    icon: linkedinIcon,
    involvement: '',
    link: {
      type: 'visit',
      value: 'https://www.linkedin.com/in/chris-rentsch/'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'First Text.'
      },
      {
        type: 'header',
        value: 'Header:',        
      },
      {
        type: 'text',
        value: 'Second Text.'
      },
      {
        type: 'points',
        value: [
          'Point 1',
          'Point 2',
          'Point 3'
        ]
      }
    ]
  },
  
  om1: {
    name: 'Origin Materials 1',
    tech: [],
    icon: om1Icon,
    involvement: '',
    link: {
      type: 'visit',
      value: 'https://www.linkedin.com/in/chris-rentsch/'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'First Text.'
      },
      {
        type: 'header',
        value: 'Header:',        
      },
      {
        type: 'text',
        value: 'Second Text.'
      },
      {
        type: 'points',
        value: [
          'Point 1',
          'Point 2',
          'Point 3'
        ]
      }
    ]
  }
};
