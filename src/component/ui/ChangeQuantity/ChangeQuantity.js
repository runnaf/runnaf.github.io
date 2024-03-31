import { useDispatch } from "react-redux";
import { changeQuantityGood } from "../../../redux/cartSlice";
import "./style.css"

export function ChangeQuantity({ quantity, setQuantity, good }) {
    const dispatch = useDispatch();
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
        if (good) {
            const quantity = newQuantity
            dispatch(changeQuantityGood({good, quantity}))
        } else return ''
    }

    const removeQuantity = () => {
        const newQuantity = quantity - 1;
        if (newQuantity === 0) return
        setQuantity(newQuantity);
        if (good) {
          const quantity = newQuantity
          dispatch(changeQuantityGood({good, quantity}))
        } else return ''
    }
    return (<div className="quantity">
        <button onClick={removeQuantity} type="button" className="quantity__btn">-</button>
        <span>{quantity}</span>
        <button onClick={addQuantity} type="button" className="quantity__btn">+</button>
    </div>

    )
}