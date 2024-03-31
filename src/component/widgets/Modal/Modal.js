import { ButtonCart } from "../../ui/ButtonCart/ButtonCart";
import './style.css'

export function Modal({active, setActive, good, quantity, path2}) {
  const getClosedModal = () => {setActive(false)}

  return (
    <div className={active ? 'modal modal--active' : 'modal'} onClick={getClosedModal}>
      <div className='modal__container' onClick={e=>e.stopPropagation()}>
        <img src={good.image} alt={good.name} width='308' height='316' />
        <div className='modal__content'>
          <h2>{good.name}</h2>
          <div className='modal__container-good'>
            <p className="modal__price">{quantity} шт.</p>
            <p>{good.price} руб.</p>
          </div>
          <p className="modal__text-cart"><span><img className="modal__check" src={'/img/check.svg'} alt="check" width='38' height='28' /></span>Добавлено в корзину</p>
          <ButtonCart path1={'/cart'} text1={'Перейти в корзину'} getClosedModal = {getClosedModal} path2={path2}/>
        </div>
        <button type="button" className="modal__button-closed" onClick={getClosedModal}>
          <span className="visually-hidden">Закрыть модальное окно</span>
        </button>
      </div>
    </div>  
  )
}
