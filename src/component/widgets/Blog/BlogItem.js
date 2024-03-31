import { useState } from "react";
import { data } from "../../../mock/dataBlog";
import "./style.css";

export function BlogItem() {
  const [blogCart] = useState(data);

  return(
    <ul className="blog__list-card">
      {blogCart.map(item => {
        const {id, image, desc, date} = item;

        return (
          <li key={ id }>
            <img src={image} width="338" height="500" alt="Иллюстрация к блоку" />
            <p>{ desc }</p>
            <p>{ date }</p>
          </li>
        )
      })}
    </ul>
  )
}
