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
    name: 'Greenhouse effect',
    tech: [],
    involvement: 'Radiative forcing by CO2 observed at top of atmosphere from 2002-2019',
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
    name: '',
    tech: [],
    icon: feynmanIcon,
    involvement: 'The Pleasure of Finding Things Out',
    link: {
      type: 'visit',
      value: 'https://www.amazon.com/Pleasure-Finding-Things-Out-Richard/dp/0465023959/ref=d_pd_sbs_sccl_2_1/131-7494496-0122603'
    },
    description: [
	  {	
        type: 'header',
        value: 'Scientists should stay disinterested',        
      },
      {
        type: 'text',
        highlight: 'green',
        value: '\"The first matter of judging evidence...you begin by being very uncertain as to what the answer is. For if you already know the answer there is no need to gather any evidence about it. There are usual rules for judging evidence; it\'s not right to pick only what you like, but to take all of the evidence, to try to maintain some objectivity about the thing. Authority may be a hint as to what the truth is, but it is not a source of information. As long as it\'s possible, we should disregard authority whenever the observations disagree with it. And finally, the recording of results should be done in a disinterested way. That\'s a very funny phrase which always bothers me—because it means that after the guy\'s all done with the thing, he doesn\'t give a darn about the results, but that isn\'t the point. Disinterest here means that they are not reported in such a way as to try to influence the reader into an idea that\'s different than what the evidence indicates.\"'
      },
	  {	
        type: 'header',
        value: 'Epaulettes and the Pope',        
      },	  
      {
        type: 'text',
        highlight: 'green',
        value: '\"One of the things that my father taught me besides physics (LAUGHS), whether it\’s correct or not, was a disrespect for respectable...for certain kinds of things. For example, when I was a little boy, and a rotogravure—that’s printed pictures in newspapers—first came out in the New York Times, he used to sit me again on his knee and he’d open a picture, and there was a picture of the Pope and everybody bowing in front of him. And he’d say, “Now look at these humans. Here is one human standing here, and all these others are bowing. Now what is the difference? This one is the Pope—he hated the Pope anyway—and he’d say, “the difference is epaulettes”—of course not in the case of the Pope, but if he was a general it was always the uniform, the position, “but this man has the same human problems, he eats dinner like anybody else, he goes to the bathroom, he has the same kind of problems as everybody, he’s a human being. Why are they all bowing to him? Only because of his name and his position, because of his uniform, not because of something special he did, or his honor, or something like that.” He, by the way, was in the uniform business, so he knew what the difference was between the man with the uniform off and the uniform on; it\'s the same man to him.\"'
      },
	  {	
        type: 'header',
        value: 'Beauty',        
      },	  
      {
        type: 'text',
        highlight: 'green',
        value: '\"It doesn\'t matter how beautiful your theory is, it doesn\'t matter how smart you are. If it doesn\'t agree with experiment, it\'s wrong. In that simple statement is the key to science.\"'
      },
	  {	
        type: 'header',
        value: 'No PhD',        
      },	  
      {
        type: 'text',
        highlight: 'green',
        value: '\"Oh, yes. I’m very proud of not having a Ph.D. I think the Ph.D. system is an abomination. It was invented as a system for educating German professors in the 19th century, and it works well under those conditions. It’s good for a very small number of people who are going to spend their lives being professors. But it has become now a kind of union card that you have to have in order to have a job, whether it’s being a professor or other things, and it’s quite inappropriate for that. It forces people to waste years and years of their lives sort of pretending to do research for which they’re not at all well-suited. In the end, they have this piece of paper which says they’re qualified, but it really doesn’t mean anything. The Ph.D. takes far too long and discourages women from becoming scientists, which I consider a great tragedy. So I have opposed it all my life without any success at all.\"'
      },
    ]
  },
  
  atomic: {
    name: '',
    tech: [],
    icon: atomicIcon,
    involvement: 'The Making of the Atomic Bomb',
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
