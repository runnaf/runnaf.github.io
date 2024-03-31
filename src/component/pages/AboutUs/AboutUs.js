import { useState } from 'react';

import { TitleMain } from '../../ui/TitleMain/TitleMain';
import { desc } from '../../../mock/aboutUs';

import './style.css';

export function AboutUs () {
  const [state, setState] = useState(false);

  const onChangeState = () => {
    setState(!state)
  }

  return(
    <section className="about section">
      <TitleMain text="кто мы?" />
      <div className="about__container">
        <div>
          <div className="about__wrapper">
            <p>{desc[0]}</p> 
          </div>          
          <img className="about__image-one" src={ '/img/about/shop.jpg' } width='461' height="632" alt="наш магазин" />
        </div>    
        <div className="about__wrapper" >
          <img className="about__image-two"  src={ '/img/about/natural.jpg' } width='705' height="736" alt="наш магазин" />
          <h2>Наследие NATURAL STORIES</h2>
          <p>{state ? desc[1] : desc[1].substring(0, 170)}<button type="button" onClick={onChangeState}>{state ? 'свернуть' : 'развернуть'}</button></p>
        </div>
      </div>
    </section>
  )
}