// show menu Y hidden
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
    
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// skills
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader =document.querySelectorAll('.skills__header')
    
function toggleSkills()
{
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

//qualification
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll ('[data-content]')

    tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualifications__active')
        })
        target.classList.add('qualification__active')
        
        tab.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

// service modal
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')
        
let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i ) => {
    modalBtn.addEventListener('click', ()=>{
    modal(i)
    })
})

modalCloses.forEach((modalClose)=> {
    modalClose.addEventListener('click', ()=> {
        modalViews.forEach((modalView)=> {
            modalView.classList.remove('active-modal')
        })
    })
})

// Portfolio Swiper
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // mousewheel: true,
    // keyboard: true,
  });
//   testimonial
  let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor:true,
    spaceBetween: 48,
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
    // mousewheel: true,
    // keyboard: true,
  });
        