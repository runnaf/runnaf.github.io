import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { data } from "../../../mock/data";
import { Title } from "../Title/Title";
import { filterCategory } from "../../../redux/filterSlice";
import "./style.css"

export function Category () {
  const [card] = useState(data)
  const dispatch = useDispatch()
  const changeCategory = (type) => {
    dispatch(filterCategory(type))
  }

  return(
    <section className="category section">
      <Title text={"Категории"}/>
      <ul>
        {card.map((item => {
          const {id, name, image, type} = item
          return <li key={id}>
                  <Link to="/shop" onClick={()=>changeCategory(type)}>
                    <img src={image} alt={name} width="360" height="590" />
                    <div>
                    {name}
                    </div>
                  </Link>
                </li>
          }))}
      </ul>
    </section>
  )
}