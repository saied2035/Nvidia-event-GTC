const getSpeakersInfo= () => {
	return {
		speaker1: {
			name: " Mark Zuckerberg",
			postion: "Co-founder and CEO - Facebook",
			description: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder."
		},
		speaker2: {
			name: " Mark Zuckerberg",
			postion: "Co-founder and CEO - Facebook",
			description: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder."
		},
		speaker3: {
			name: " Mark Zuckerberg",
			postion: "Co-founder and CEO - Facebook",
			description: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder."
		},
		speaker4: {
			name: " Mark Zuckerberg",
			postion: "Co-founder and CEO - Facebook",
			description: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder."
		},
		speaker5: {
			name: " Mark Zuckerberg",
			postion: "Co-founder and CEO - Facebook",
			description: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder."
		},
		speaker6: {
			name: " Mark Zuckerberg",
			postion: "Co-founder and CEO - Facebook",
			description: "Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist and Facebook, Inc co-founder."
		}
	}
}
const createSpeakersSection = () => {
	const speakersInfo = getSpeakersInfo()
	const speakersSection = document.querySelector('#speakers')
	const heading = document.createElement('h2');
	heading.id="speakers-heading";
	heading.innerText = "Featured Speakers";
	speakersSection.appendChild(heading)
	const hr = document.createElement('hr')
	speakersSection.appendChild(hr)
	const ul = document.createElement('ul')
	for(let i=0;i<6;i++){
		const li = document.createElement('li')
		const speaker = document.createElement('img')
		speaker.alt=`speaker ${i+1}`
		speaker.src= `./images/Home-page/Mobile-version/speaker-${i+1}.png`
		li.appendChild(speaker)
        const div = document.createElement('div')
        const p1 = document.createElement('p')
        p1.className="speaker-name"
        p1.innerText= speakersInfo[`speaker${i+1}`].name
        const p2 = document.createElement('p')
        p2.className="speaker-postion"
        p2.innerText= speakersInfo[`speaker${i+1}`].postion
        const innerHr = document.createElement('hr')
        const p3 = document.createElement('p')
        p3.className= "description"
        p3.innerText= speakersInfo[`speaker${i+1}`].description
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(innerHr)
        div.appendChild(p3)
        li.appendChild(div)
        if(window.innerWidth<768 && i>=2){
        	li.className="allow-to-hide dn"
        }
        ul.appendChild(li)
	}
	
	if(window.innerWidth<768){
		const more = document.createElement('button')
	   more.className= 'more'
	   const span = document.createElement('span')
	   span.innerText= 'more'
	   const moreIcon = document.createElement('i')
	   moreIcon.classList.add('fas')
	   moreIcon.classList.add('fa-chevron-circle-down')
	   moreIcon.classList.add('fa-1x')
	   more.appendChild(span)
	   more.appendChild(moreIcon)
	   speakersSection.appendChild(ul)
       speakersSection.appendChild(more)
       return
	}
    speakersSection.appendChild(ul)
    speakersSection.appendChild(more)
	
}

createSpeakersSection()

const showMore = () => {
	const btn = document.querySelector('.more')
	const hiddenSpeakers = document.querySelectorAll('.allow-to-hide')
	Array.from(hiddenSpeakers).forEach(speaker => {
		speaker.classList.toggle('dn')
	})
	btn.children[1].classList.toggle('fa-chevron-circle-down')
	btn.children[1].classList.toggle('fa-chevron-circle-up')
	if(btn.innerText.includes('less')){
           btn.children[0].innerText= "more"
           return;
	}
	btn.children[0].innerText= 'less'

}

const moreBtn = document.querySelector('.more')
moreBtn.addEventListener('click',showMore)