const getSpeakersInfo = () => ({
  speaker1: {
    name: 'Jensen Huang',
    postion: 'Founder and CEO, NVIDIA',
    description: 'GTC 2022 Keynote',
  },
  speaker2: {
    name: 'Chelsea Finn',
    postion: 'Assistant Professor, Stanford University',
    description: 'Scaling Data-Driven Robot Learning',
  },
  speaker3: {
    name: 'Serdar Kadioglu',
    postion: 'Vice President AI, Fidelity Investments | Brown University',
    description: 'Multi-Objective Optimization to Boost Exploration in Recommender Systems',
  },
  speaker4: {
    name: 'Khalifeh AlJadda',
    postion: 'Sr. Director of Data Science, The Home Depot',
    description: 'Building AI-based Recommender System Leveraging the Power of Deep Learning and GPU',
  },
  speaker5: {
    name: 'Xiaodi Hou',
    postion: 'Co-Founder and CTO, TuSimple',
    description: 'Achieving Level 4 Autonomy at Scale: How TuSimple is Building on NVIDIA DRIVE Orin to Deploy',
  },
  speaker6: {
    name: 'Dale Durran',
    postion: 'Professor, University of Washington, Department of Atmospheric Sciences',
    description: 'Bringing Rain to the Subseasonal Forecasting Desert with Deep Learning Weather Prediction',
  },
});
const createSpeakersSection = () => {
  const speakersInfo = getSpeakersInfo();
  const speakersSection = document.querySelector('#speakers');
  const heading = document.createElement('h2');
  heading.id = 'speakers-heading';
  heading.innerText = 'Featured Speakers';
  speakersSection.appendChild(heading);
  const hr = document.createElement('hr');
  speakersSection.appendChild(hr);
  const ul = document.createElement('ul');
  for (let i = 0; i < 6; i++) {
    const li = document.createElement('li');
    const speaker = document.createElement('img');
    speaker.alt = `speaker ${i + 1}`;
    speaker.src = `./images/Home-page/speaker-${i + 1}.png`;
    li.appendChild(speaker);
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    p1.className = 'speaker-name';
    p1.innerText = speakersInfo[`speaker${i + 1}`].name;
    const p2 = document.createElement('p');
    p2.className = 'speaker-postion';
    p2.innerText = speakersInfo[`speaker${i + 1}`].postion;
    const innerHr = document.createElement('hr');
    const p3 = document.createElement('p');
    p3.className = 'description';
    p3.innerText = speakersInfo[`speaker${i + 1}`].description;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(innerHr);
    div.appendChild(p3);
    li.appendChild(div);
    if (window.innerWidth < 768 && i >= 2) {
        	li.className = 'allow-to-hide dn';
    }
    ul.appendChild(li);
  }

  const a = document.createElement('a');
  a.href = 'https://www.nvidia.com/gtc/#gtcspeaker1';
  a.target = '_blank';
  a.innerText = 'Link to all the speakers';
  if (window.innerWidth < 768) {
	  a.className = 'allow-to-hide dn';
  }
  const more = document.createElement('button');
	   more.className = 'more';
	   const span = document.createElement('span');
	   span.innerText = 'more';
	   const moreIcon = document.createElement('i');
	   moreIcon.classList.add('fas');
	   moreIcon.classList.add('fa-chevron-circle-down');
	   moreIcon.classList.add('fa-1x');
	   more.appendChild(span);
	   more.appendChild(moreIcon);
	   speakersSection.appendChild(ul);
	   speakersSection.appendChild(a);
  speakersSection.appendChild(more);
};

createSpeakersSection();

const showMore = () => {
  const btn = document.querySelector('.more');
  const hiddenSpeakers = document.querySelectorAll('.allow-to-hide');
  Array.from(hiddenSpeakers).forEach((speaker) => {
    speaker.classList.toggle('dn');
  });
  btn.children[1].classList.toggle('fa-chevron-circle-down');
  btn.children[1].classList.toggle('fa-chevron-circle-up');
  if (btn.innerText.includes('less')) {
    btn.children[0].innerText = 'more';
    return;
  }
  btn.children[0].innerText = 'less';
};

const moreBtn = document.querySelector('.more');
moreBtn.addEventListener('click', showMore);

const toggleMenu = (event) => {
  if (!event.target.classList.contains('mobile-list-item')) {
    const body = document.querySelector('body');
    body.classList.toggle('no-scroll');
  }
	  const nav = document.querySelector('#mobile-nav');
	  const menu = document.querySelector('#mobile-list');
	  const menuBtn = document.querySelector('#menu-btn');
  nav.classList.toggle('style-popup-menu');
	  menu.classList.toggle('dn');
  menuBtn.classList.toggle('fa-bars');
  menuBtn.classList.toggle('fa-times');
};

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', toggleMenu);

const menuItems = document.querySelectorAll('.mobile-list-item');
menuItems[0].addEventListener('click', toggleMenu);
menuItems[1].addEventListener('click', toggleMenu);
menuItems[2].addEventListener('click', toggleMenu);
menuItems[3].addEventListener('click', toggleMenu);
menuItems[4].addEventListener('click', toggleMenu);
menuItems[5].addEventListener('click', toggleMenu);