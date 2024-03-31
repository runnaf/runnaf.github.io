import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { CartLogo } from '../../svg/CartLogo';
import { Title } from '../../ui/Title/Title';
import { data } from '../../../mock/dataAll'
import { addItemToCart } from '../../../redux/cartSlice';
import { Modal } from '../Modal/Modal';

import './style.css';


export function Best () {
  const quantity = 1
  const dispatch = useDispatch();
  const good = data.find((good) => good.best);
  const [activeModal, setActiveModal] = useState(false);
  const addGood = () => {
    dispatch(addItemToCart({good, quantity}));
    setActiveModal(true)
  }
  const newPrice = good.price*(100 - good.discount)/100;
  

  return(
    <section className='best section'>
      <img src={ good.image } alt="Бокс “Трюфель”" width="516" height="561" />      
      <div className="best__container">
        <Title text={ "Бокс “Трюфель”" }/>
        <p>Акция <span className="best__sale"> -{good.discount}%</span></p>
        <p>с 08.03.2021 по 10.03.2021</p>
        <div className="best__button-container">
          <p className="best__price">{good.price} руб.</p>
          <p className="best__price best__price--new">{newPrice} руб.</p>
        </div>
        <div className="best__button-container">
          <Link to="*" className="btn">Подробнее</Link>
          <button type="button" onClick={addGood} className="best__button-cart">
            <span className="visually-hidden">Купить</span>
            <CartLogo />
          </button>
        </div>
        <Modal good={good} quantity={quantity} active={activeModal} setActive={setActiveModal} path2='/' />
      </div>
    </section>
  )
}