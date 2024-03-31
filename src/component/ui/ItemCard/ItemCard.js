import { useDispatch } from "react-redux";
import { useState } from "react";
import { ChangeQuantity } from "../ChangeQuantity/ChangeQuantity";
import { addItemToCart } from "../../../redux/cartSlice";
import { Modal } from "../../widgets/Modal/Modal";

export function ItemCard({good, quantityCount, path2}) {
  const [quantity, setQuantity] = useState(quantityCount ? quantityCount : 1)
  const [modalActive, setModalActive] = useState(false)
  const dispatch = useDispatch();
  const addGood = () => {
    dispatch(addItemToCart({good, quantity}));
    setModalActive(true)
    return <Modal /> 
  }

  return (
    <li>
        {good ? (
          <>
            <img src={ good.image } alt= { good.name } width="298" height="413" />
            <p>{ good.name }</p>
            <p>{ good.price } руб.</p>
            <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity} />
            <button type="button" onClick={addGood} className="btn">
              Купить
            </button>
          </>
        ) : ''}
        <Modal active={modalActive} setActive={setModalActive} good={good} quantity={quantity} path2={path2} />
    </li>
  )
}