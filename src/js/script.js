import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const select = (elem) => document.querySelector(elem);
const selectAll = (elem) => document.querySelectorAll(elem);
const text = selectAll('.preview__title');
const main = select('main');
const petItems = selectAll('.pet__link');
const toggleMenu = select('.header-page__toggle');
const breakpoint = window.matchMedia('(min-width:1200px)');
const breakpointMobile = window.matchMedia('(min-width: 320px)');
const breakpointTablet = window.matchMedia('(min-width: 768px)');
const mainLink = select('.main-link');
const aboutUs = select('.about-us-link');
const skills = select('.skills-link');
const projects = select('.projects-link');
const contacts = select('.contacts-link');
const body = select('body');
const links = selectAll('.header-page__link');
const preview = select('.preview');
const presentation = select('.presentation');
const skillsSection = select('.skills');
const projectsSection = select('.projects');
const one = preview.scrollHeight;
const two = preview.scrollHeight + presentation.scrollHeight + skillsSection.scrollHeight / 2;
const three = preview.scrollHeight + presentation.scrollHeight + skillsSection.scrollHeight + projectsSection.offsetWidth;
const COLOR_DEFAULT = '#ffffff';
const COLOR_GREEN = '#658580';

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
    gsap.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.preview', {opacity: 1}, {opacity: 0, duration: 25});
    tl.to('.main-link', {color: '#ffffff', fontSize: '24px'});
    tl.to('.about-us-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1, duration: 25});
    tl.to('.about-us-link', {color: '#ffffff', fontSize: '24px'});
    tl.to('.skills-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 50});
    tl.to('.skills-link', {color: '#ffffff', fontSize: '24px'});
    tl.to('.projects-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.about-us', {opacity: 1}, {opacity: 0, duration: 25});
    tl.fromTo('.projects', {x: '-300%'}, {x: '-200%', duration: 50}).to('.about-us', {visibility: 'hidden'});
    tl.fromTo('.projects__list-site', {x: 0}, {x: '-180%', duration: 400});
    tl.fromTo('.projects__pet', {x: '0', y: '0'}, {x: '0', y: '-100%', duration: 50}).to('.projects', {backgroundColor: '#163631', duration: 50}).to('.projects-link', {color: '#d67060', duration: 50}).fromTo(petItems, {x: '-300%', opacity: 0}, {x: '0%', opacity: 1, duration: 50}).to(petItems, {opacity: 0, display: 'none', duration: 150}).fromTo('.pet__picture', {x: '10%'}, {x: '130%', scale: 4.5, duration: 100});
    tl.to('.projects-link', {color: '#ffffff', fontSize: '24px'});
    tl.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, onUpdate: animationContactTitle}).to('.projects', {visibility: 'hidden'});
    tl.to('.contacts-link', {color: '#163631', fontSize: '28px'}).to('.projects-link', {color: '#ffffff', fontSize: '24px'});

    mainLink.addEventListener('click', ()=>{
      gsap.to('.main-link', {color: '#163631', fontSize: '28px'});
      gsap.to('.preview', {opacity: 1, duration: 1.5});
      gsap.to('.about-us', {x: '-100%', y: '-100%', opacity: 1});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.skills', {opacity: 0}, {opacity: 1});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to(petItems, {x: '-500%', scale: 1});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: 0, x: 0}});

      getDefaultValues(mainLink);
    });

    aboutUs.addEventListener('click', ()=>{
      gsap.fromTo('.preview', {opacity: 1}, {opacity: 0});
      gsap.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1, duration: 1.5});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.skills', {opacity: 0});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to(petItems, {x: '-500%', scale: 1});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: one}});

      getDefaultValues(aboutUs);
    });

    skills.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 1.5});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to(petItems, {x: '-500%', scale: 1});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: two}});

      getDefaultValues(skills);
    });

    projects.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.skills', {opacity: 1});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects-link', {color: '#163631', fontSize: '28px'});
      gsap.to('.projects', {backgroundColor: '#d67060'});
      gsap.fromTo('.projects', {x: '-300%', y: '0'}, {x: '-200%', y: '0', duration: 1.5});
      gsap.to('.projects__list-site', {x: '0%', y: '0%'});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: three}});

      getDefaultValues(projects);
    });

    contacts.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.skills', {opacity: 1});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects__list-site', {x: '-180%', y: 0});
      gsap.to('.projects__pet', {x: '0%', y: '-100%'});
      gsap.to('.projects-link', {color: '#ffffff', fontSize: '24px'});
      gsap.to('.projects', {x: '-200%', y: '0%', backgroundColor: '#163631'});
      gsap.to(petItems, {x: '0%', scale: 1, opacity: 1});
      gsap.to('.pet__picture', {x: '130%', scale: 4.5});
      gsap.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, duration: 1.5, onUpdate: animationContactTitle});
      gsap.to(window, {scrollTo: {y: body.scrollHeight * 20}});

      getDefaultValues(contacts);
    });

    return;
  }

  if (breakpointTablet.matches) {
    gsap.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.preview', {opacity: 1}, {opacity: 0, duration: 25});
    tl.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1, duration: 75});
    tl.to('.main-link', {color: '#ffffff', fontSize: '24px'});
    tl.to('.about-us-link', {color: '#163631', fontSize: '28px', duration: 25});
    tl.to('.about-us-link', {color: '#ffffff', fontSize: '24px'});
    tl.to('.skills-link', {color: '#163631', fontSize: '28px', duration: 25});
    tl.to('.presentation', {display: 'none'});
    tl.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 50});
    tl.fromTo('.about-us', {opacity: 1}, {opacity: 0, duration: 25});
    tl.fromTo('.projects', {x: '-300%'}, {x: '-200%', duration: 50});
    tl.to('.skills-link', {color: '#ffffff', fontSize: '24px'});
    tl.to('.projects-link', {color: '#163631', fontSize: '28px', duration: 25});
    tl.fromTo('.projects__list-site', {x: 0}, {x: '-200%', duration: 800});
    tl.fromTo('.projects__pet', {x: '0', y: '0'}, {x: '0', y: '-100%', duration: 100}).to('.projects', {backgroundColor: '#163631', duration: 50}).to('.projects-link', {color: '#d67060', duration: 50}).fromTo(petItems, {x: '-300%', opacity: 0}, {x: '0%', opacity: 1, duration: 50}).fromTo('.pet__picture', {x: '10%'}, {x: '130%', scale: 4.5, duration: 100});
    tl.to('.projects-link', {color: '#ffffff', fontSize: '24px', duration: 25});
    tl.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, onUpdate: animationContactTitle});
    tl.to('.contacts-link', {color: '#163631', fontSize: '28px', duration: 50}).to('.projects-link', {color: '#ffffff', fontSize: '24px'});

    mainLink.addEventListener('click', ()=>{
      gsap.to('.main-link', {color: '#163631', fontSize: '28px'});
      gsap.to('.preview', {opacity: 1, duration: 1.5});
      gsap.to('.about-us', {x: '-100%', y: '-100%', opacity: 1});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.skills', {opacity: 0});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to(petItems, {x: '-500%', scale: 1});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: 0, x: 0}});

      getDefaultValues(mainLink, '#658580');
    });

    aboutUs.addEventListener('click', ()=>{
      gsap.fromTo('.preview', {opacity: 1}, {opacity: 0});
      gsap.to('.skills', {opacity: 0});
      gsap.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1, duration: 1.5});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to(petItems, {x: '-500%', scale: 1});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: one * 0.5}});

      getDefaultValues(aboutUs);
    });

    skills.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 1.5});
      gsap.to('.presentation', {display: 'none'});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to(petItems, {x: '-500%', scale: 1});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: two * 0.5}});

      getDefaultValues(skills);
    });

    projects.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.skills', {opacity: 1});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects-link', {color: '#163631', fontSize: '28px'});
      gsap.to('.projects', {backgroundColor: '#d67060'});
      gsap.fromTo('.projects', {x: '-300%', y: '0'}, {x: '-200%', y: '0', duration: 1.5});
      gsap.to('.projects__list-site', {x: '0%', y: '0%'});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: three}});

      getDefaultValues(projects);
    });

    contacts.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.skills', {opacity: 1});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects__list-site', {x: '-180%', y: 0});
      gsap.to('.projects__pet', {x: '0%', y: '-100%'});
      gsap.to('.projects-link', {color: '#ffffff', fontSize: '24px'});
      gsap.to('.projects', {x: '-200%', y: '0%', backgroundColor: '#163631'});
      gsap.to(petItems, {x: '0%', scale: 1, opacity: 1});
      gsap.to('.pet__picture', {x: '130%', scale: 4.5});
      gsap.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, duration: 1.5, onUpdate: animationContactTitle});
      gsap.to(window, {scrollTo: {y: body.scrollHeight * 20}});

      getDefaultValues(contacts);
    });

    return;
  }

  if (breakpointMobile.matches) {
    gsap.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.to('.main-link', {color: '#163631', fontSize: '28px'});
    tl.fromTo('.preview', {opacity: 1}, {opacity: 0, duration: 25});
    tl.to('.main-link', {color: COLOR_GREEN, fontSize: '24px', duration: 25});
    tl.to('.about-us-link', {color: '#163631', fontSize: '28px', duration: 200});
    tl.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1, duration: 100});
    tl.fromTo('.preview', {opacity: 0.03}, {opacity: 0, duration: 75}).to('.presentation', {display: 'none'});
    tl.to('.about-us-link', {color: COLOR_GREEN, fontSize: '24px', duration: 25});
    tl.to('.skills-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 25});
    tl.fromTo('.preview', {y: 0}, {y: '-100%', duration: 50});
    tl.to('.skills-link', {color: COLOR_GREEN, fontSize: '24px', duration: 25});
    tl.to('.projects-link', {color: '#163631', fontSize: '28px', duration: 50});
    tl.fromTo('.projects', {x: '-300%'}, {x: '-200%', duration: 50});
    tl.fromTo('.projects__list-site', {x: 0}, {x: '-140%', duration: 1000});
    tl.fromTo('.projects__pet', {x: '0', y: '0'}, {x: '0', y: '-100%', duration: 100}).to('.projects', {backgroundColor: '#163631', duration: 50}).to('.projects-link', {color: '#d67060', duration: 50});
    tl.to('.projects-link', {color: COLOR_GREEN, fontSize: '24px', duration: 25});
    tl.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, onUpdate: animationContactTitle});
    tl.to('.contacts-link', {color: '#163631', fontSize: '28px', duration: 50}).to('.projects-link', {color: '#ffffff', fontSize: '24px'});

    mainLink.addEventListener('click', ()=>{
      gsap.to('.main-link', {color: '#163631', fontSize: '28px'});
      gsap.to('.preview', {opacity: 1, duration: 1.5});
      gsap.to('.about-us', {x: '-100%', y: '-100%', opacity: 1});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.skills', {opacity: 0}, {opacity: 1});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: 0, x: 0}});

      closingTheMenu();
      getDefaultValues(mainLink, COLOR_GREEN);
    });

    aboutUs.addEventListener('click', ()=>{
      gsap.fromTo('.preview', {opacity: 1}, {opacity: 0, duration: 1.5});
      gsap.to('.skills', {opacity: 0});
      gsap.fromTo('.about-us', {x: '-100%', y: '-100%', opacity: 0}, {x: '-100%', y: '0', opacity: 1});
      gsap.to('.presentation', {display: 'block'});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: one}});

      closingTheMenu();
      getDefaultValues(aboutUs, COLOR_GREEN);
    });

    skills.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.fromTo('.skills', {opacity: 0}, {opacity: 1, duration: 1.5});
      gsap.to('.presentation', {display: 'none'});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects', {x: 0, y: '0', backgroundColor: '#d67060'});
      gsap.to('.projects__list-site', {x: 0});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: two * 0.8}});

      closingTheMenu();
      getDefaultValues(skills, COLOR_GREEN);
    });

    projects.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.to('.presentation', {display: 'none'});
      gsap.to('.skills', {opacity: 1});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects-link', {color: '#163631', fontSize: '28px'});
      gsap.to('.projects', {backgroundColor: '#d67060'});
      gsap.fromTo('.projects', {x: '-300%', y: '0'}, {x: '-200%', y: '0', duration: 1.5});
      gsap.to('.projects__list-site', {x: '0%', y: '0%'});
      gsap.to('.projects__pet', {x: '0', y: '0'});
      gsap.to('.contacts', {x: '-300%', y: '-300%'});
      gsap.to(window, {scrollTo: {y: three}});

      closingTheMenu();
      getDefaultValues(projects, COLOR_GREEN);
    });

    contacts.addEventListener('click', ()=>{
      gsap.to('.preview', {opacity: 0});
      gsap.to('.about-us', {x: '-100%', y: '0', opacity: 1});
      gsap.to('.presentation', {display: 'none'});
      gsap.to('.skills', {opacity: 1});
      gsap.to('.preview', {y: 0});
      gsap.to('.projects__list-site', {x: '-180%', y: 0});
      gsap.to('.projects__pet', {x: '0%', y: '-100%'});
      gsap.to('.projects-link', {color: COLOR_GREEN, fontSize: '24px'});
      gsap.to('.projects', {x: '-200%', y: '0%', backgroundColor: '#163631'});
      gsap.to('.pet__picture', {x: '130%', scale: 4.5});
      gsap.fromTo('.contacts', {x: '-300%', y: '-300%'}, {y: 0, duration: 1.5, onUpdate: animationContactTitle});
      gsap.to(window, {scrollTo: {y: body.scrollHeight * 20}});

      closingTheMenu();

      getDefaultValues(contacts, COLOR_GREEN);
    });

    return;
  }
};

breakpointChecker();

function animationContactTitle() {
  gsap.fromTo('.contacts__title', {x: 0, opacity: 0}, {x: '10px', opacity: 1, duration: 3});
  gsap.fromTo('.contacts__link-container', {x: '-100%', color: '#fff'}, {x: '10px', color: '#d67060', duration: 3});
  gsap.fromTo('.contacts__form', {scale: 0}, {scale: 1, duration: 3});
}

petItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const idItem = item.getAttribute('id');
    const imgesPet = selectAll('.pet__img-select');
    imgesPet.forEach((img) => {
      const imgId = img.getAttribute('data-id');
      if (Number(imgId) === Number(idItem)) {
        // eslint-disable-next-line max-nested-callbacks
        imgesPet.forEach((itemImg) => {
          itemImg.classList.remove('is-active');
        });
        img.classList.add('is-active');
        select('.pet__tv-container').classList.add('js-not-after');
      }
    });
  });
  item.addEventListener('mouseout', () => {
    select('.pet__tv-container').classList.remove('js-not-after');
  });
});

function getDefaultValues(elem, items = links, color = COLOR_DEFAULT) {
  items.forEach((item) =>{
    item.style.color = color;
    item.style.fontSize = '24px';
  });

  mainLink.classList.remove('active');
  toggleMenu.classList.remove('is-active');
  elem.style.color = '#163631';
  elem.style.fontSize = '28px';
}

toggleMenu.addEventListener('click', ()=>{
  toggleMenu.classList.toggle('is-active');
});

function closingTheMenu() {
  toggleMenu.classList.remove('is-active');
}
