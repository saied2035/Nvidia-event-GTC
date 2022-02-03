const toggleMenu = (event) => {
	if(!event.target.classList.contains('mobile-list-item')){
        const body = document.querySelector('body')
        body.classList.toggle('no-scroll')
	}
	  const nav = document.querySelector('#mobile-nav')
	  const menu = document.querySelector('#mobile-list')
	  const menuBtn = document.querySelector('#menu-btn')
      nav.classList.toggle('style-popup-menu')
	  menu.classList.toggle('dn')      
      menuBtn.classList.toggle('fa-bars')
      menuBtn.classList.toggle('fa-times')
}

const menuBtn = document.querySelector('#menu-btn')
menuBtn.addEventListener('click',toggleMenu)

const menuItems = document.querySelectorAll('.mobile-list-item')
menuItems[0].addEventListener('click',toggleMenu)
menuItems[1].addEventListener('click',toggleMenu)
menuItems[2].addEventListener('click',toggleMenu)
menuItems[3].addEventListener('click',toggleMenu)
menuItems[4].addEventListener('click',toggleMenu)
menuItems[5].addEventListener('click',toggleMenu)