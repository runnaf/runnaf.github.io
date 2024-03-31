import { OrderCard } from "./OrderCard";
import "./style.css"

export function OrderItem ({goods}) {

  return (
    <ul>
      {goods.map(good => <OrderCard good = {good} key={good.id} />)}
    </ul>    
  )
}
