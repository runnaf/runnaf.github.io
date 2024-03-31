import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../../redux/cartSlice";
import { CartItem } from "../../ui/CartItem/CartItem";
import { Title } from "../../ui/Title/Title";
import { EmptyCart } from "./EmptyCart";
import "./style.css";
import { ButtonCart } from "../../ui/ButtonCart/ButtonCart";

export function Cart() {
  const cartItems  =useSelector(getCartItems)
  const totalPrice = useSelector(getTotalPrice)

  return (
    <div className='cart'>
      <Title text='Корзина' />
      {cartItems.length === 0 ? 
      <EmptyCart /> : (
      <>
        <div className='cart__container'>
          <ul className='cart__list-title'>
            <li>Цена</li>
            <li>Количество</li>
            <li>Сумма</li>
          </ul>
        </div>
        <ul>
          {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
        </ul>
        <div className='cart__result'>
          <p>Промежуточный итог: {totalPrice} руб.</p>
        </div>
        <ButtonCart />
      </>)      
    }
    </div>
  )
}
