import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { data } from '../../../mock/dataAll';
import { ChangeQuantity } from '../../ui/ChangeQuantity/ChangeQuantity';
import { removeItemFromCart } from '../../../redux/cartSlice';

import "./style.css";

export function CartItem({cartItem}) {
  const [quantity, setQuantity] = useState(cartItem.quantity)
  const good = data.find((good) => good.id === cartItem.goodID)
  const dispatch = useDispatch()
  const removeGood = () => {
    dispatch(removeItemFromCart({goodItemId: cartItem.id}))
  }

  return (
    <li className="cart__container">
      <div className="cart__container-title">
        <img src={good.image} width='157' alt={good.name} />
        <p>{good.name}</p>
      </div>
      <div className="cart__list-title">
        <p>{ good.best ? good.price*(100 - good.discount)/100 : good.price} руб.</p>
        <div>
          <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity} good={good}/>
          <button className='btn-delete' type='button' onClick={removeGood}>X Удалить</button>
        </div>
        <p>{cartItem.totalPrice} руб.</p>
      </div>
    </li>
  )
}