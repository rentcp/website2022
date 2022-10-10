import satelliteIcon from 'Icons/project-icon-satellite.png';
import arxivIcon from 'Icons/project-icon-arxiv.png';
import feynmanIcon from 'Icons/feynman_icon.png';
import hammingIcon from 'Icons/hamming_icon.png';
import GEBIcon from 'Icons/GEB_icon.png';
import tspIcon from 'Icons/project-icon-tsp.png';
import grantIcon from 'Icons/grant_icon.png';
import atomicIcon from 'Icons/atomic_bomb_icon.png'
import piIcon from 'Icons/pi_icon.png';
import physicsIcon from 'Icons/physics_icon.png';
import linkedinIcon from 'Icons/icon-LinkedIn.png'
import om1Icon from 'Icons/project-icon-om1.png';
import colexIcon from 'Icons/project-icon-colex.png';
import cleanfuelsIcon from 'Icons/project-icon-cleanfuels.png';

export const projectsListValue = {
  tsp1: {
    name: 'Angular Study',
    tech: [],
    involvement: '',
    icon: tspIcon,
	link: {
      type: 'visit',
      value: 'https://en.wikipedia.org/wiki/P_versus_NP_problem'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Empirical study of large TSP solutions'
      },
      {
        type: 'text',
        value: 'The Travelling Salesman Problem is one of seven Millenium Prize problems (P vs NP Problem) awaiting proof that solutions can be calculated in polynomial time (or not). When this challenge was first taken up seriously by the engineers at Bell Labs, there were very few solutions available and only for small maps. After computers deployed to solve new TSP maps, a resource began to grow: a library of TSP solutions. This library may be viewed as a tremendous resource, collectively representing many millions of CPU-hours.'
      },
	  {
        type: 'text',
        highlight: 'green',
        value: 'What insights may be extracted from this library?'
      },
	  {
        type: 'text',
        value: 'When compared to Greedy, Branch-And-Cut, or other optimized algorithms, the true shortest-route solution tends to show an aversion for acute angles, meaning that the angle measured between the arrival and departing path lines tends not to be <90 degrees. Why? There does not immediately appear to be an underlying driver exerting preference for joining 3 cities via non-acute paths. One potential explanation for this behavior: the algorithm should be written to consider both the distance between cities *and* the angle formed at each city. This would require adopting a formulat similar to those that govern liquid films drawn by capillary action.'
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
        value: 'Infrared spectrophotometric measurements made between 2003-2019 totalling 40 TB were downloaded, filtered for clear-sky conditions, then trended to show the impact of rising CO2 levels in the atmosphere.'
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
        value: 'This study led to a publication in ____.'
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
        type: 'header',
        value: 'Bohr\'s Fission Inspiration:',        
      },
      {
        type: 'text',
        value: 'Placzek pointed out that uranium and thorium both exhibit a capture resonance for neutrons with medium-range energies of about 25 electron volts. That meant, first of all, that although fission was one behavior uranium could exhibit under neutron bombardment, capture and subsequent transmutation continued to be another. Bohr was not ever to be rid of those inconvenient “transuranians.” Some of them were real.',        
      },
      {
        type: 'text',
		value:'If a neutron penetrated a uranium nucleus, for example, the result might be fission. But if the neutron happened to be traveling at the appropriate energy when it penetrated—somewhere around 25 eV—the nucleus would probably capture it without fissioning. Beta decay would follow, increasing the nuclear charge by one unit; the result should be a new, as-yet-unnamed transuranic element of atomic number 93. That was one of Placzek’s points. It would prove in time to be crucial.',        
      },
      {
        type: 'text',
		value:'The other source of confusion was more straightforward. It was also more immediately relevant to the question of how to harness nuclear energy. It concerned differences between uranium and thorium. Thorium, element 90, a soft, heavy, lustrous, silver-white metal, was first isolated by the celebrated Swedish chemist Jons Jakob Berzelius in 1828. Berzelius named the new element after Thor, the Norse god of thunder. Its oxide found commercial use beginning in the late nineteenth century as the primary component of the fragile woven mantles of gas lanterns: heat incandesces it a brilliant white. Because it is mildly radioactive, and radioactivity was once considered tonic, thorium was also for some years incorporated into a popular German toothpaste, Doramad. Auer, the company that made German gas mantles, also made the toothpaste. Hahn, Meitner and Strassmann, the Joliot-Curies and others had regularly studied thorium alongside uranium. Its behavior was often similar. Otto Frisch had first demonstrated that it fissioned. He bombarded it next after uranium in the course of his January experiment in Copenhagen, the experiment he had discussed with Bohr after he returned from Kungälv and Bohr had worked so hard in the United States to protect.',        
      },
      {
        type: 'text',
		value:'Frisch was then also the first to notice that the fission characteristics of thorium differed from those of uranium. Thorium did not respond to the magic of paraffin; it was unaffected by slow neutrons. Richard B. Roberts and his colleagues at the Department of Terrestrial Magnetism of the Carnegie Institution of Washington had just independently confirmed and extended Frisch’s findings. With their 5 million volt Van de Graaff they could generate neutrons of several different, known energies. Continuing their experiments after their Saturday-night show for the Washington Conference group, they had compared uranium and thorium fission responses at varying energies as Frisch with his single neutron source could not. They found to their surprise (Frisch’s paper had not yet appeared in Nature) that while both uranium and thorium fissioned under bombardment by fast neutrons, only uranium fissioned under bombardment by slow neutrons. Some energy between 0.5 MeV and 2.5 MeV marked a lower threshold for fast-neutron fission for both elements. (Bohr and John Wheeler, beginning work at Princeton on fission theory, had estimated the threshold energy to be about 1 MeV.) The slow neutrons that also fissioned uranium were effective at far lower energies. “From these comparisons,” the DTM group concluded in a February paper, “it appears that the uranium fissions are produced by different processes for fast and slow neutrons.”',        
      },
      {
        type: 'text',
		value:'Why, Placzek now prodded Bohr, should both uranium and thorium have similar capture resonances and similar fast-neutron thresholds but different responses to slow neutrons? If the liquid-drop model had any validity at all, the difference made no sense. Bohr abruptly saw why and was struck dumb. Not to lose what he had only barely grasped, oblivious to courtesy, he pushed back his chair and strode from the room and from the club. Rosenfeld hurried to follow. “Taking a hasty leave of Placzek, I joined Bohr, who was walking silently, lost in deep meditation, which I was careful not to disturb.” The two men tramped speechless through the snow across the Princeton campus to Fine Hall, the Neo-Gothic brick building where the Institute for Advanced Study was then lodged. They went in to Bohr’s office, borrowed from Albert Einstein. It was spacious, with leaded windows, a fireplace, a large blackboard, an Oriental rug to warm the floor. No peripatetic like Bohr, Einstein had judged it too large and moved into a small secretarial annex nearby.',        
      },
      {
        type: 'text',
		value:'“As soon as we entered the office,” Rosenfeld remembers, “[Bohr] rushed to the blackboard, telling me: ‘Now listen: I have it all.’ And he started—again without uttering a word—drawing graphs on the blackboard.”  The first graph Bohr drew looked like this: The horizontal axis plotted neutron energy left to right—low to high, slow to fast. The vertical axis charted cross sections—the probability of a particular nuclear reaction—and served a double purpose. The lazy S that filled most of the frame represented thorium’s cross section for capture at different neutron energies, the steep central peak demonstrating the 25 eV resonance in the middle range. The tail that waved from the horizontal axis on the right side represented a different thorium cross section: its cross section for fission beginning at that high 1 MeV threshold. What Bohr had drawn was thus a visualization of thorium’s changing response to bombardment by neutrons of increasing energy. Bohr moved to the next section of blackboard and drew a second graph. He labeled it with the mass number of the isotope most plentiful in natural uranium. “He wrote the mass number 238 with very large figures,” Rosenfeld says; “he broke several pieces of chalk in the process.” Bohr’s urgency marked the point of his insight. The second graph looked exactly like the first.',        
      },
      {
        type: 'text',
		value:'But a third graph was coming.',        
      },
      {
        type: 'text',
		value:'Francis Aston had found only U238 when he first passed uranium through his mass spectrograph at the Cavendish. In 1935, using a more powerful instrument, physicist Arthur Jeffrey Dempster of the University of Chicago detected a second, lighter isotope. “It was found,” Dempster announced in a lecture, “that a few seconds’ exposure was sufficient for the main component at 238 reported by Dr. Aston, but on long exposures a faint companion of mass number 235 was also present.” Three years later a gifted Harvard post-doctoral fellow named Alfred Otto Carl Nier, the son of working-class German emigrants to Minnesota, measured the ratio of U235 to U238 in natural uranium as 1:139, which meant that U235 was present to the extent of about 0.7 percent. By contrast, thorium in itsnatural form is essentially all one isotope, Th232. And that natural difference in the composition of the two elements was the clue that set Bohr off. He drew his third graph. It depicted one cross section, not two: Having made a hard copy of his abrupt vision, Bohr was finally ready to explain himself.',        
      },
      {
        type: 'text',
		value:'Both thorium and U238 could be expected on theoretical grounds to behave similarly, he pointed out to Rosenfeld: to fission only with fast neutrons above 1 MeV. And it seemed that they did. That left U235. It followed as a matter of logic, Bohr said triumphantly, that U235 must be responsible for slow-neutron fission. Such was his essential insight. He went on to explore the subtle energetics of the several reactions. Thorium was lighter than U235, U238 heavier, but the middle isotope differed more significantly in another important regard. When Th232 absorbed a neutron it became a nucleus of odd mass number, Th233. When U238 absorbed a neutron it also became a nucleus of odd mass number, U239. But when U235 absorbed a neutron it became a nucleus of even mass number, U236. And the vicissitudes of nuclear rearrangement are such, as Fermi would explain one day in a lecture, that “changing from an odd number of neutrons to an even number of neutrons released one or two MeV.” Which meant that U235 had an inherent energetic advantage over its two competitors: it accrued energy toward fission simply by virtue of its change of mass; they did not.',        
      },
      {
        type: 'text',
		value:'Lise Meitner and Otto Frisch had realized in Kungälv that a certain amount of energy was necessary to agitate the nucleus to fission, but they had not considered in detail the energetics of that input. They were distracted by the enormous 200 MeV output. In fact, the uranium nucleus required an input of about 6 MeV to fission. That much energy was necessary to roil the nucleus to the point where it elongated and broke apart. The absorption of any neutron, regardless of its velocity, made available a binding energy of about 5.3 MeV. But that left U238 about 1 MeV short, which is why it needed fast neutrons of at least that threshold energy before it could fission.',        
      },
      {
        type: 'text',
		value:'U235 also earned 5.3 MeV when it absorbed a neutron. But it won Fermi’s “one or two MeV” in addition simply by adjusting from an odd to an even mass. That put its total above 6 MeV. So any neutron at all would fission U235—slow, fast or in between. Which was what Bohr’s third graph demonstrated: the probably continuous fission cross section of U235. From slow neutrons on the left only a fraction of an electron volt above zero energy, to fast neutrons on the right above 1 MeV that would also fission U238, any neutron an atom of U235 encountered would agitate it to fission. Natural uranium masked U235’s continuous fissibility; the more abundant U238 captured most of the neutrons. Only by slowing the neutrons with paraffin below the U238 capture resonance at 25 eV had experimenters like Hahn, Strassmann and Frisch been able to coax the highly fissionable U235 out of hiding. In a burst of insight Bohr had answered Placzek’s objections and replenished his liquid drop.'
      },
      {
        type: 'header',
        value: 'Sturdy Hans Bethe',        
      },
      {
        type: 'text',
        value: 'At Trinity gloom was everywhere. A physical chemist from Los Alamos, Joseph Hirschfelder, remembers Oppenheimer’s discomfort that Saturday evening at the hotel where the guests invited to view the test had begun to assemble: “We drove to the Hilton Hotel in Albuquerque, where Robert Oppenheimer was meeting with a large group of generals, Nobel laureates, and other VIP’s. Robert was very nervous. He told [us] about some experimental results which Ed Creutz had obtained earlier in the day which indicated that the [Trinity] atom bomb would be a dud.”',        
      },
      {
        type: 'text',
		value:'Back at Base Camp Oppenheimer slept no more than four hours that night; Farrell heard him stirring restlessly on his bunk in the next room of the quarters they shared, racked with coughing. Chain-smoking as much as meditative poetry drove him through his days. Sturdy Hans Bethe found a way back from the precipice, Kistiakowsky remembers: "Sunday morning another phone call came with wonderful news. Hans Bethe spent the whole night of Saturday analyzing the electromagnetic theory of this experiment and discovered that the instrumental design was such that even a perfect implosion could not have produced oscilloscope records different from what was observed. So I became again acceptable to local high society." When Groves called, Oppenheimer chatted happily about the Bethe results. '
      },
      {
        type: 'header',
        value: 'Bohr\'s Presence',        
      },
      {
        type: 'text',
        value: 'Oppenheimer appreciated the salutary effect of Bohr’s presence. “Bohr at Los Alamos was marvelous,” he told an audience of scientists after the war. “He took a very lively technical interest...But his real function, I think for almost all of us, was not the technical one.” Here two texts of the postwar lecture diverge; both versions illuminate Oppenheimer’s state of mind in 1944 as he remembered it. In unedited transcript he said Bohr “made the enterprise which looked so macabre seem hopeful”; edited, that sentence became: “He made the enterprise seem hopeful, when many were not free of misgiving.” How Bohr did so Oppenheimer and even Bohr had work to explain. Oppenheimer outlines an explanation in his lecture:'        
      },
      {
        type: 'text',
		value:'Bohr spoke with contempt of Hitler, who with a few hundred tanks and planes had tried to enslave Europe for a millennium. He said nothing like that would ever happen again; and his own high hope that the outcome would be good, and that in this the role of objectivity, the cooperation which he had experienced among scientists would play a helpful part; all this, all of us wanted very much to believe.',
      },
      {
        type: 'text',
		value:'“He said nothing like that would ever happen again” is a key; Austrian emigré theoretician Victor Weisskopf supplies another:  In Los Alamos we were working on something which is perhaps the most questionable, the most problematic thing a scientist can be faced with. At that time physics, our beloved science, was pushed into the most cruel part of reality and we had to live it through. We were, most of us at least, young and somewhat inexperienced in human affairs, I would say. But suddenly in the midst of it, Bohr appeared in Los Alamos.',
      },
      {
        type: 'text',
		value:'It was the first time we became aware of the sense in all these terrible things, because Bohr right away participated not only in the work, but in our discussions. Every great and deep difficulty bears in itself its own solution...This we learned from him. “They didn’t need my help in making the atom bomb,” Bohr later told a friend. He was there to another purpose.',
      },
     {
        type: 'header',
        value: 'Fermi\'s Pile',        
      },
      {
        type: 'text',
        value: '“This time,” he told Weil, “take the control rod out twelve inches.” Weil withdrew the cadmium rod. Fermi nodded and ZIP was winched out as well. “This is going to do it,” Fermi told Compton. The director of the plutonium project had found a place for himself at Fermi’s side. “Now it will become self-sustaining. The trace [on the recorder] will climb and continue to climb; it will not level off.” Herbert Anderson was an eyewitness: '        
      },
      {
        type: 'text',
        value: 'At first you could hear the sound of the neutron counter, clickety-clack, clickety-clack. Then the clicks came more and more rapidly, and after a while they began to merge into a roar; the counter couldn’t follow anymore. That was the moment to switch to the chart recorder. But when the switch was made, everyone watched in the sudden silence the mounting deflection of the recorder’s pen. It was an awesome silence. Everyone realized the significance of that switch; we were in the high intensity regime and the counters were unable to cope with the situation anymore. Again and again, the scale of the recorder had to be changed to accommodate the neutron intensity which was increasing more and more rapidly. Suddenly Fermi raised his hand. “The pile has gone critical,” he announced. No one present had any doubt about it. '        
      },
      {
        type: 'text',
        value: 'Fermi allowed himself a grin. He would tell the technical council the next day that the pile achieved a k of 1.0006. Its neutron intensity was then doubling every two minutes. Left uncontrolled for an hour and a half, that rate of increase would have carried it to a million kilowatts. Long before so extreme a runaway it would have killed anyone left in the room and melted down. “Then everyone began to wonder why he didn’t shut the pile off,” Anderson continues. “But Fermi was completely calm. He waited another minute, then another, and then when it seemed that the anxiety was too much to bear, he ordered ‘ZIP in!’ ” It was 3:53 P.M. Fermi had run the pile for 4.5 minutes at one-half watt and brought to fruition all the years of discovery and experiment. Men had controlled the release of energy from the atomic nucleus. The chain reaction was moonshine no more. Eugene Wigner reports how they felt:'        
      },
      {
        type: 'text',
        value: 'Nothing very spectacular had happened. Nothing had moved and the pile itself had given no sound. Nevertheless, when the rods were pushed back in and the clicking died down, we suddenly experienced a let-down feeling, for all of us understood the language of the counter. Even though we had anticipated the success of the experiment, its accomplishment had a deep impact on us. For some time we had known that we were about to unlock a giant; still, we could not escape an eerie feeling when we knew we had actually done it. We felt as, I presume, everyone feels who has done something that he knows will have very far-reaching consequences which he cannot foresee.'        
      },
     {
        type: 'header',
        value: 'Oppenheimer\'s Biggest Regret',        
      },
      {
        type: 'text',
        value: '“Dr. Oppenheimer...suddenly told me that we had [made] a terrible scientific blunder,” Groves testified after the war. “I think he was right. It is one of the things that I regret the most in the whole course of the operation. We had failed to consider [thermal diffusion] as a portion of the process as a whole.” From the beginning the leaders of the Manhattan Project had thought of the several enrichment and separation processes as competing horses in a race. That had blinded them to the possibility of harnessing the processes together. Groves had partly opened his eyes when barrier troubles delayed K-25; then he had decided to cancel the upper stages of the K-25 cascade and feed the lower-stage product to the Beta calutrons for final enrichment. So he was prepared to understand immediately Oppenheimer’s similar point about the value of a thermal-diffusion plant: “I at once decided that the idea was well worth investigating.”'        
      },	  
    ]
  },
  
  pi: {
    name: '',
    tech: [],
    involvement: 'History of Pi',
    icon: piIcon,
	link: {
      type: 'visit',
      value: 'https://www.amazon.com/History-Pi-Petr-Beckmann/dp/0312381859/ref=asc_df_0312381859/'
    },
    description: [
      {
        type: 'header',
        value: 'Axioms',        
      },
      {
        type: 'text',
        value: 'The attitude of the ancient Greeks to Euclidian geometry was essentially this: “The truth of these five axioms is obvious; therefore everything that follows from them is valid also." The attitude of modern mathematics is somewhat different: "If we assume that these axioms are valid, then everything that follows from them is valid also." At first sight the difference between the two seems to be a chicken-hearted technicality. But in reality it goes much deeper. In the 19th century it was discovered that if the fifth postulate was pulled out from under Euclid’s cathedral, not all of the building would collapse; a part of the structure (called absolute geometry) would remain supported by the other four axioms. It was also found that if the fifth axiom was replaced by its exact opposite, namely, that it is possible to draw more than one straight line through a point parallel to a given straight line, then on this strange fifth foundation stone (together with the preceding four) one could build all kinds of weird and wonderful cathedrals. Riemann, Lobachevsky, Bolyai and others built just such crazy cathedrals; they are known as non-Euclidean geometry.'
      },
      {
        type: 'text',
        value: 'The non-Euclidean axiom may sound ridiculous. But an axiom is unprovable; if we could prove it, it would not be an axiom, for it could be based on a more primitive (unprovable) axiom. We just assume its validity or we don’t; all we ask of an axiom is that it does not lead to contradictory consequences. And non-Euclidean geometry is just as free of contradictions as Euclidean is. One is no more “true” than the other. The fact that we cannot draw those parallel lines in the usual way proves nothing.'
      },

      {
        type: 'text',
        value: 'Nevertheless, some readers may feel that all this is pure mathematical abstraction with no relation to reality. Not quite. Reality is what is confirmed by our experience. Euclidean geometry is convenient for describing this kind of experience; which is not the same thing as saying it is “universally true.” For there are other experiences for whose description Euclidean geometry is extremely inconvenient. Suppose point A is on this page of the book and point B is on some star in a distant galaxy; then what does “straight" mean? In that case we have no experience with ropes, but we do have experience with light rays. And this experience shows that light rays traveling through gravitational fields do not behave like ropes stretched between stakes. Their behavior is described by Einstein\'s General Theory of Relativity, which works with non-Euclidean geometry. This is more convenient in describing the laws that govern our experience. If we were to express these laws in Euclidean space they would assume very complicated forms, or alternatively, we would have to revamp all of our electromagnetic theory from scratch (without guarantee of success), and this is not considered worth while (by the few physicists who have even given this alternative any thought). And so the chicken-hearted technicality of saying "if" is neither chicken-hearted nor a technicality.',
      }
    ]
  },
  
  physics: {
    name: '',
    tech: [],
    involvement: 'Thinking Physics',
    icon: physicsIcon,
	link: {
      type: 'visit',
      value: 'https://www.amazon.com/Thinking-Physics-Understandable-Practical-Reality/dp/0935218084'
    },
    description: [
      {
        type: 'header',
        value: 'Relativistic Bike and Trolley',        
      },
      {
        type: 'text',
        highlight: 'green',
        value: 'Consider a motorcycle powered by super-powerful electric batteries, and a common electric street-car (powered by overhead wire) that are each driven to speeds approaching the speed of light. In turn, each drives over a scale which we read in our stationary frame of reference. An increase in mass of the ______ will be registered:'
      },
      {
        type: 'points',
        value: [
          'A) motorcycle',
          'B) streetcar',
          'C) both',
		  'D) neither'
        ]
      },
      {
        type: 'text',
        value: 'B), despite the widespread misconception among relativity buffs that the mass of a moving thing always increases, going to infinity as the speed of the thing approaches the speed of light. It so happens that the mass of a thing increases not if speed is added to it, but only if energy is added to it. Energy is poured into the streetcar from the powerhouse through the overhead trolley wire. But the motorcycle carries its own energy supply with it. While new energy is added to the streetcar, no new energy is added to the motorcycle. Energy has inertia. So the mass of the streetcar increases with speed while the mass of the motorcycle remains unchanged whatever its speed. Interestingly enough, all the mass gained by the streetcar is compensated by a like decrease in mass at the power source. If the streetcar gains a thousand kilograms then the mass of the fuel and its products at the power plant is minus one thousand kilograms! And with the motorcycle, any gain in mass of the bike and rider is compensated by a like decrease of mass of the battery so there is no net change in mass. So the mass of all things does not go to infinity simply because their speed goes to the speed of light. After all, light moves at the speed of light and its mass is certainly not infinite. ',
      }
    ]
  },  

  hamming: {
    name: '',
    tech: [],
    icon: hammingIcon,
    involvement: 'The Art of Doing Science and Engineering',
    link: {
      type: 'visit',
      value: 'https://press.stripe.com/the-art-of-doing-science-and-engineering'
    },
    description: [
      {
        type: 'header',
        value: 'Simulations'
      },
      {
        type: 'text',
        value: 'In many proposed areas of simulation there are neither such known experiences nor theory. Thus when I was occasionally asked to do some ecological simulation I quietly asked for the mathematically expressed rules for every possible interaction, for example given the amount of rain what growth of the trees would occur, what exactly were the constants, and also where I could get some real live data to compare some test runs. They soon got the idea and went elsewhere to get someone more willing to run very questionable simulations which would give the results they wanted and could use for their propaganda. I suggest you keep your integrity and do not allow yourself to be used for other people’s propaganda; you need to be wary when agreeing to do a simulation! How is the outsider to distinguish this from a Rorschach test? Did he merely find what he wanted to find, or did he get at “reality”? Regretably, many, many simulations have a large element of this adjusting things to get what they want to get. It is so easy a path to follow. It is for this reason traditional Science has a large number of safeguards, which these days are often simply ignored.',        
      },
      {
        type: 'header',
        value: 'Finding Non-Existent Patterns in Noise'
      },
      {
        type: 'text',
        value: 'Now to the next story. A psychologist friend at Bell Telephone Laboratories once built a machine with about 12 switches and a red and a green light. You set the switches, pushed a button, and either you got a red or a green light. After the first person tried it twenty times they wrote a theory of how to make the green light come on. The theory was given to the next victim and they had their twenty tries and wrote their theory, and so on endlessly. The stated purpose of the test was to study how theories evolved. But my friend, being the kind of person he was, had connected the lights to a random source! One day he observed to me that no person in all the tests (and they were all high class Bell Telephone Laboratories scientists) ever said there was no message. I promptly observed to him not one of them was either a statistician or an information theorist, the two classes of people who are intimately familiar with randomness. A check revealed I was right!'
      },
      {
        type: 'text',
		highlight: 'green',
        value: 'More than most people want to believe, what we see depends on how we approach the problem! Too often we see what we want to see, and therefore you need to consciously adopt a scientific attitude of doubting your own beliefs.'
      },
      {
        type: 'header',
        value: 'Management Avoids Decisions'
      },
      {
        type: 'text',
        value: 'Getting more data is also time consuming so the decision is further delayed—a favorite trick of people in charge who do not want to bear the responsibility of their position—“Get more data”, they say. Company managers always seem to have the idea if only they knew the current state of the company in every detail then they could manage things better. So nothing will do but they must have a data base of all the company’s activities, always up to the moment. This has its difficulties as indicated above. But another thing; suppose you and I are both V.Ps of a company and for a Monday morning meeting we want exactly the same figures. You get yours from a program run on Friday afternoon, while I, being wiser and knowing over the weekend much information comes in from the outlying branches, wait until Sunday night and prepare mine. Clearly there could be significant differences in our two reports, even though we both used the same program to prepare them! That is simply intolerable in practice. Furthermore, most important reports and decisions should not be time sensitive to up to the minute data! '
      }
    ]
  },
  
  GEB: {
    name: '',
    tech: [],
    icon: GEBIcon,
    involvement: 'Godel, Escher, Bach',
    link: {
      type: 'visit',
      value: 'https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach'
    },
    description: [
      {
        type: 'header',
        value: 'Genome',        
      },
      {
        type: 'text',
        value: 'Recently, the entire genome of the tiniest known virus, cpX174, has been laid bare. One most unexpected discovery was made en route: some of its nine genes overlap—that is, two distinct proteins are coded for by the same stretch of DNA! There is even one gene contained entirely inside another! This is accomplished by having the reading frames of the two genes shifted relative to each other, by exactly one unit. The density of information packing in such a scheme is incredible.'
      }
    ]
  },

  grant: {
    name: '',
    tech: [],
    icon: grantIcon,
    involvement: 'Think Again',
    link: {
      type: 'visit',
      value: 'https://google.com'
    },
    description: [
      {
        type: 'header',
        value: 'Totalitarian Ego',        
      },
      {
        type: 'text',
        value: 'When a core belief is questioned, we tend to shut down rather than open up. The technical term for this in psychology is the Totalitarian Ego, and its job is to keep out threatening information. The Totalitarian Ego steps in like a body guard for our minds, protecting our self-image by feeding us comforting lies. Neuroscientists find that when our core beliefs are challenged, it can trigger the amygdala, the primitive lizard brain that breezes right past cool rationality and activates a hot fight-or-flight response. The anger and fear are visceral: it feels as if we\'ve been punched in the mind. The Totalitarian Ego comes to the rescue  with mental armor. Presented with someone else\'s arguement, we\'re quite adept at psotting the weaknesses but the positions we\'re blind about are our own. I find this odd, because we weren\'t born with our opinions. Unlike our height or raw intelligence, we have full control over what we believe is true.'
      },
      {
        type: 'header',
        value: 'Arguing Effectively',        
      },
	  {
        type: 'text',
        value: 'Although productive disagreement is a critical life skill, it\'s one that many of us never fully develop. The problem starts early: parents disagree behind closed doors, fearing that conflict will make children anxious or somehow damage their character. Yet research shows that how often parents argue has no bearing on their children\'s adademic, social, or emotional development. What matters is how respectfully parents argue, not how frequently. I\'ve watched too many leaders shield themselves from task conflict. As they gain power, they tune out boat-rockers and listen to bootlickers, becoming more and more susceptible to seduction by sycophants. We learn more from people who challenge our thought process than those who affirm our conclusions. In fact, when I argue with someone, it\'s not a display of disresepct—it\'s a sign of respect. It means I value their views enough to contest them. If their opinions didn\'t matter to me, I wouldn\'t bother. I know I have chemistry with someone when we find it delightful to prove eachother wrong.'
      },
	  {
        type: 'header',
        value: 'Changing Another\'s Mind',        
      },
	  {
        type: 'text',
        value: 'When we try to convince people to think again, our first instinct is usually to start talking. Yet the most effective way to help others open up their minds is often to listen. Psychologists have found that when people detect an attempt at influence, they have sophisticated defense mechanisms. Motivational interviewing requires a genuine desire to help people reach their goals. It starts with showing more interest in other people\'s interests rather than trying to judge their status or prove our own. Truly curious questions that don\'t have a hidden agenda facilitate the clear expression of another person\'s thoughts. In a series of experiments, interacting with an empathetic, non-judgemental, attentive listener made people less anxious and defensive. They felt less pressure to avoid contradictions in their thinking, which encourages them to explore their opinions more deeply, recognize more nuances in them, and share them more openly. When people have a chance to express themselves out loud, they often discover new thoughts. As the write E. M. Forster put it: "How can I tell what I think till I see what I say?"'
      },
	  {
        type: 'header',
        value: 'Escalation of Commitment',        
      },
	  {
        type: 'text',
        value: 'When we dedicate ourselves to a plan and it isn\'t going as we hoped, our first instinct isn\'t usually to rethink it. Instead, we tend to double down and sink more resources in the plan. This pattern is called escalation of commitment. Evidence shows that entrepreneurs persist with failing strategies when they should pivot. Escalation of commitment happens because we are rationalizing creatures, constantly searching for self-justifications for our prior beliefs as a way to soothe our egos, shield our images, and validate our past decisions. Ironically, it can be fueld by one of the most celebrated engines of success: grit. Grit is the combination of passion and perseverance, and research shows that it can play an important role in motivating us to accomplish long-term goals. Experiments show that gritty people are more likely to overplay their hands in roulette and more willing to stay the course in tasks at whcih they\'re failing and success is impossible. There\'s a fine line between heroic persistance and foolish stubbornness.'
      }
    ]
  },
  
  om1: {
    name: 'Origin Materials 1',
    tech: [],
    icon: om1Icon,
    involvement: 'Head of Engineering',
    link: {
      type: 'visit',
      value: 'https://vimeo.com/640469917'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Head of Engineering at Origin Materials from 2014-2019. Designed the OM1 facility in Sarnia, Ontario that converts multiple types of biomass into 5-Chloromethylfurfural, an intermediate chemical that can be further converted into polymers, textiles, or plastic water bottles.'
      }
    ]
  },
  
 colex: {
    name: 'Colex-D',
    tech: [],
    icon: colexIcon,
    involvement: 'Manufacturing Representative',
    link: {
      type: 'visit',
      value: 'https://youtu.be/tpLLq0tKF4c'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Designed and commissioned a system in 2011 that produced a modified chemical compound with lower odor and lower drift. This prevents a weed killer from damaging sensitive neighboring plants (e.g., grapes, fruit trees).'
      }
    ]
  },
 
 cleanfuels: {
    name: 'Clean Fuels',
    tech: [],
    icon: cleanfuelsIcon,
    involvement: 'Process Engineer',
    link: {
      type: 'visit',
      value: 'https://www.toledoblade.com/Energy/2005/09/27/3-northwest-Ohio-refineries-finishing-clean-fuel-upgrades.html'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Commissioned a new hydrotreater in 2006 to meet ultra-low sulfur fuel specifications.'
      }
    ]
  }
};
