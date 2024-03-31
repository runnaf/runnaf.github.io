import { Link } from "react-router-dom";
import './style.css'


export function Preview () {
  return(
    <section className="preview section">
      <h2 className="preview__title">Территория красоты и гармонии</h2>
      <p>100% натуральные ингредиенты. Без токсинов, парабенов, искусственных красителей и араматизаторов.</p>
      <Link to="/shop" >Перейти в магазин</Link>
      <img src='img/preview-background.png' alt="preview" className="preview__background" />
    </section>
  )
}