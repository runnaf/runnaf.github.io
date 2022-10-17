import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const select = (elem) => document.querySelector(elem);
const selectAll = (elem) => document.querySelectorAll(elem);
const text = selectAll('.preview__title');
const main = select('main');
const petItems = selectAll('.projects__pet-link');
const toggleMenu = select('.header-page__toggle');
const breakpoint = window.matchMedia('(min-width:1200px)');
const breakpointModal = window.matchMedia('(min-width:320px)');
const breakpointTablet = window.matchMedia('(min-width:320px)');
const mainLink = document.querySelector('.main-link');
const aboutUs = document.querySelector('.about-us-link');
const skills = document.querySelector('.skills-link');
const projects = document.querySelector('.projects-link');
const contacts = document.querySelector('.contacts-link');
const links = selectAll('.header-page__link');

const splitTextMy = (el) => {
  el.innerHTML = el.textContent.replace(/(\S*)/g, (m) => {
    return '<div class="word">' +
    m.replace(/(-|#|@)?\S(-|#|@)?/g, '<div class=\'letter\'>$&</div>') +
    '</div>';
  });
  return el;
};

text.forEach((elem) => {
  splitTextMy(elem);
});

function random(min, max) {
  return (Math.random() * (max - min)) + min;
}

Array.from(document.querySelectorAll('.letter')).forEach((el, idx) => {
  gsap.from(el, {
    opacity: 0,
    scale: 0.1,
    x: random(-250, 500),
    y: random(-250, 500),
    z: random(-250, 500),
    delay: idx * 0.02,
    repeat: 0,
    duration: 2.5,
  });
});

gsap.from('.preview__list', {
  opacity: 0, duration: 5, stagger: 0.6, delay: 1,
});

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
ScrollTrigger.create({
  animation: tl,
  trigger: 'body',
  start: 'top top',
  end: () => main.offsetWidth * 2,
  scrub: true,
  pin: true,
});


const breakpointChecker = () => {
  if (breakpoint.matches) {
    tl.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.preview', {opacity: 1}, {opacity: 0.03, duration: 25});
    tl.to('.main-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.about-us-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1, duration: 25});
    tl.fromTo('.preview', {opacity: 0.03}, {opacity: 0, duration: 25});
    tl.to('.about-us-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.skills-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 25});
    tl.fromTo('.preview', {y: 0}, {y: '-100%', duration: 50});
    tl.to('.skills-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.projects-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.projects', {x: '-300%'}, {x: '-200%', duration: 50});
    tl.fromTo('.projects__list-site', {x: 0}, {x: '-180%', duration: 400});
    tl.fromTo('.projects__pet', {x: '0', y: '0'}, {x: '0', y: '-100%', duration: 50}).to('.projects', {backgroundColor: '#163631', duration: 50}).to('.projects-link', {color: '#d67060', duration: 50}).fromTo(petItems, {x: '-300%', opacity: 0}, {x: '0%', opacity: 1, stagger: 0.3, duration: 50}).to(petItems, {opacity: 0, display: 'none', duration: 300}).fromTo('.pet__picture', {x: '10%'}, {x: '130%', scale: 4.5, duration: 100});
    tl.to('.projects-link', {color: '#ffffff', fontSize: '24px', duration: 25, onUpdate: defaultOpacity});
    tl.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, onUpdate: animationContactTitle});
    tl.to('.contacts-link', {color: '#163631', fontSize: '28px', duration: 50});
    return;
  }

  if (breakpointTablet) {
    tl.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.preview', {opacity: 1}, {opacity: 0.03, duration: 25});
    tl.to('.main-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.about-us-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1, duration: 75});
    tl.fromTo('.preview', {opacity: 0.03}, {opacity: 0, duration: 25}).to('.presentation', {display: 'none'});
    tl.to('.about-us-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.skills-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 25});
    tl.fromTo('.preview', {y: 0}, {y: '-100%', duration: 50});
    tl.to('.skills-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.projects-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.projects', {x: '-300%'}, {x: '-200%', duration: 50});
    tl.fromTo('.projects__list-site', {x: 0}, {x: '-200%', duration: 800});
    tl.fromTo('.projects__pet', {x: '0', y: '0'}, {x: '0', y: '-100%', duration: 100}).to('.projects', {backgroundColor: '#163631', duration: 50}).to('.projects-link', {color: '#d67060', duration: 50}).fromTo(petItems, {x: '-300%', opacity: 0}, {x: '0%', opacity: 1, stagger: 0.3, duration: 50}).to(petItems, {opacity: 0, display: 'none', duration: 300}).fromTo('.pet__picture', {x: '10%'}, {x: '130%', scale: 4.5, duration: 100});
    tl.to('.projects-link', {color: '#ffffff', fontSize: '24px', duration: 25, onUpdate: defaultOpacity});
    tl.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, onUpdate: animationContactTitle});
    tl.to('.contacts-link', {color: '#163631', fontSize: '28px', duration: 50});
    return;
  }

  if (breakpointModal) {
    tl.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.preview', {opacity: 1}, {opacity: 0.03, duration: 25});
    tl.to('.main-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.about-us-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1, duration: 75});
    tl.fromTo('.preview', {opacity: 0.03}, {opacity: 0, duration: 25}).to('.presentation', {display: 'none'});
    tl.to('.about-us-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.skills-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 25});
    tl.fromTo('.preview', {y: 0}, {y: '-100%', duration: 50});
    tl.to('.skills-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.to('.projects-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.projects', {x: '-300%'}, {x: '-200%', duration: 50});
    tl.fromTo('.projects__list-site', {x: 0}, {x: '-125%', duration: 600});
    tl.fromTo('.projects__pet', {x: '0', y: '0'}, {x: '0', y: '-100%', duration: 100}).to('.projects', {backgroundColor: '#163631', duration: 50}).to('.projects-link', {color: '#d67060', duration: 50}).fromTo(petItems, {x: '-500%'}, {x: '0%', stagger: 0.3, duration: 100}).to(petItems, {scale: 0.05, duration: 100, delay: 2});
    tl.to('.projects-link', {color: '#ffffff', fontSize: '24px', duration: 25, onUpdate: defaultOpacity});
    tl.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, onUpdate: animationContactTitle});
    tl.to('.contacts-link', {color: '#163631', fontSize: '28px', duration: 50});
    return;
  }
};

breakpointChecker();

function animationContactTitle() {
  gsap.fromTo('.contacts__title', {x: 0, opacity: 0}, {x: '10px', opacity: 1, duration: 2, delay: 1});
  gsap.fromTo('.contacts__link-container', {x: '-100%', color: '#fff'}, {x: '10px', color: '#d67060', duration: 3});
  gsap.fromTo('.contacts__form', {opacity: 0}, {opacity: 1, delay: 2, duration: 2});
}

function defaultOpacity() {
  gsap.to('.contacts__title', {opacity: 0});
  gsap.to('.contacts__form', {opacity: 0});
}

petItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const idItem = item.getAttribute('id');
    const imgesPet = document.querySelectorAll('.img-select');
    imgesPet.forEach((img) => {
      const imgId = img.getAttribute('data-id');
      if (Number(imgId) === Number(idItem)) {
        // eslint-disable-next-line max-nested-callbacks
        imgesPet.forEach((itemImg) => {
          itemImg.classList.remove('is-active');
        });
        img.classList.add('is-active');
        document.querySelector('.tv').classList.add('js-not-after');
      }
    });
  });
  item.addEventListener('mouseout', () => {
    document.querySelector('.tv').classList.remove('js-not-after');
  });
});

function getDefaultValues(elem, items = links) {
  items.forEach((item) =>{
    item.style.color = '#ffffff';
    item.style.fontSize = '24px';
  });

  elem.style.color = '#163631';
  elem.style.fontSize = '28px';
}

toggleMenu.addEventListener('click', ()=>{
  toggleMenu.classList.toggle('is-active');
});

mainLink.addEventListener('click', ()=>{
  getDefaultValues(mainLink);

  gsap.to('.preview', {opacity: 1});
  gsap.to('.about-us', {x: '-100%', y: '-100%', opacity: 1});
  gsap.to('.presentation', {display: 'block'});
  gsap.to('.skills', {opacity: 0}, {opacity: 1});
  gsap.to('.preview', {y: 0});
  gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
  gsap.to('.projects__list-site', {x: 0});
  gsap.to('.projects__pet', {x: '0', y: '0'});
  gsap.to(petItems, {x: '-500%', scale: 1});
  gsap.to('.contacts', {x: '-300%', y: '-300%'});
});

aboutUs.addEventListener('click', ()=>{
  getDefaultValues(aboutUs);
  gsap.fromTo('.preview', {opacity: 1}, {opacity: 0});
  gsap.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1});
  gsap.to('.presentation', {display: 'block'});
  gsap.to('.skills', {opacity: 0});
  gsap.to('.preview', {y: 0});
  gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
  gsap.to('.projects__list-site', {x: 0});
  gsap.to('.projects__pet', {x: '0', y: '0'});
  gsap.to(petItems, {x: '-500%', scale: 1});
  gsap.to('.contacts', {x: '-300%', y: '-300%'});
});

skills.addEventListener('click', ()=>{
  getDefaultValues(skills);
  gsap.to('.presentation', {display: 'none'});
  gsap.to('.preview', {opacity: 0});
  gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
  gsap.fromTo('.skills', {opacity: 0}, {opacity: 1});
  tl.to('.skills', {opacity: 1});
  gsap.to('.preview', {y: 0});
  gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
  gsap.to('.projects__list-site', {x: 0});
  gsap.to('.projects__pet', {x: '0', y: '0'});
  gsap.to(petItems, {x: '-500%', scale: 1});
  gsap.to('.contacts', {x: '-300%', y: '-300%'});
});

projects.addEventListener('click', ()=>{
  getDefaultValues(projects);
  gsap.to('.preview', {opacity: 0});
  gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
  gsap.to('.presentation', {display: 'block'});
  gsap.to('.preview', {y: 0});
  gsap.to('.projects-link', {color: '#163631', fontSize: '28px'});
  gsap.to('.projects', {backgroundColor: '#d67060'});
  gsap.to('.projects__list-site', {x: '0', y: '0'});
  gsap.fromTo('.projects', {x: '-300%', y: '0'}, {x: '-200%', y: '0'});
  tl.fromTo('.projects__pet', {x: '0', y: '0'}, {x: '0', y: '-100%', duration: 100}).to('.projects', {backgroundColor: '#163631', duration: 50}).to('.projects-link', {color: '#d67060', duration: 50}).fromTo(petItems, {x: '-500%'}, {x: '0%', stagger: 0.3, duration: 100}).to(petItems, {scale: 0.05, duration: 100, delay: 2});
  gsap.to('.contacts', {x: '-300%', y: '-300%'});
});

contacts.addEventListener('click', ()=>{
  getDefaultValues(contacts);
  gsap.to('.preview', {opacity: 0});
  gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
  gsap.to('.presentation', {display: 'block'});
  gsap.to('.skills', {opacity: 1});
  gsap.to('.preview', {y: 0});
  gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
  gsap.to('.projects__list-site', {x: 0});
  gsap.to('.projects__pet', {x: '0', y: '0'});
  gsap.to(petItems, {x: '-500%', scale: 1});
  gsap.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, onUpdate: animationContactTitle});
});

