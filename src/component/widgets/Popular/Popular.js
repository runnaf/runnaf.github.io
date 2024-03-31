import { useState } from "react"
import { data } from "../../../mock/dataAll"
import { Title } from "../../ui/Title/Title";
import { ItemCard } from "../../ui/ItemCard/ItemCard";
import { useMediaQuery } from "react-responsive";
import './style.css'

export function Popular () {
  let newArray = [];  
  const dataArray = data.filter(item=>item.popular);
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });
  const [popularItem, setPopularItem] = useState(isMobile? 0 : [0, 1]);

  if (isMobile) {
    newArray.push(dataArray[popularItem])
  } else {
    newArray.push(dataArray[popularItem[0]], dataArray[popularItem[1]])
  }
  
  const showNextPicture = () => {
    if (isMobile) {
      setPopularItem(popularItem+1)
      if (popularItem === dataArray.length-1) {
        setPopularItem(0);
      } 
    } else {
      setPopularItem([popularItem[0]+1, popularItem[1]+1]);
  
      if (popularItem[1] === dataArray.length-1) {
        setPopularItem([popularItem[0]+1, 0]);
      } else if (popularItem[0] === dataArray.length-1) {
        setPopularItem([0, popularItem[1]+1]);
      }
    }    
  }

  const showPrevPicture = () => {
    if (isMobile) {
      setPopularItem(popularItem-1)

      if (popularItem === 0) {
        setPopularItem(dataArray.length-1);
      } 
    } else {
      setPopularItem([popularItem[0]-1, popularItem[1]-1]);
  
      if (popularItem[0] === 0) {
        setPopularItem([dataArray.length-1, popularItem[1]-1]);
      } else if (popularItem[1] === 0) {
        setPopularItem([popularItem[0]-1, dataArray.length-1]);
      }
    }
  }

  return <section className="popular section">
    <Title text={'Популярные товары'} />
    <div className="slider">
      <button className="slider__button slider__button--prev" onClick={ showPrevPicture } type="button">
        <span className="visually-hidden">Предыдущий слайдер</span>
      </button>
      <ul>{ newArray.map((item, id) => {
        return <ItemCard key={id} good={item} path2='/' className="slider__item"/>
        })}
      </ul>
      <button className="slider__button slider__button--next" onClick={ showNextPicture } type="button">
        <span className="visually-hidden">Следующий слайдер</span>
      </button>
    </div>    
  </section>
} 