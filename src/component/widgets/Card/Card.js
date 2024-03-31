import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemCard } from "../../ui/ItemCard/ItemCard";
import { ArrowButton } from "../../svg/ArrowButton";
import "./style.css";

export function Card({ className, arrayData, numberCards, page }) {
  const [cardPage, setCardPage] = useState(1);
  const lastIndexCard = cardPage * numberCards;
  const firstIndexCard = lastIndexCard - numberCards;
  const cardsOnList = arrayData.slice(firstIndexCard, lastIndexCard);
  const lists = [];

  for (let i = 1; i <= Math.ceil(arrayData.length / numberCards); i++) {
    lists.push(i);
  }

  function functionChange(item) {
    setCardPage(item);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  function prevList() {
    if (cardPage !== 1) {
      setCardPage(cardPage - 1);
    } else return;
  }

  function nextList() {
    if (cardPage !== lists.length) {
      setCardPage(cardPage + 1);
    } else return;
  }

  useEffect(()=>{
    setCardPage(1)
  },[page])

  return (
    <>
      <ul className={className ? `${className} card__list` : "card__list"}>
        {cardsOnList.map((good, id) => {
          return <ItemCard key={id} good={good} />;
        })}
      </ul>
      <div className="navigation">
        <button type="button" className={cardPage === 1 ? 'navigation__button-nonepointer navigation__button' : 'navigation__button'} onClick={prevList} >
          <span className="visually-hidden">Назад</span>
          <ArrowButton />
        </button>
        <ul>
          {lists.map((item) => {
            return (
              <li key={item} className="page-item">
                <Link to="#!" className={cardPage === item ? "page-item__link--current page-item__link" : "page-item__link"} onClick={() => functionChange(item)} >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <button type="button" className={cardPage === lists.length ? 'navigation__button-nonepointer navigation__button navigation__button--next' : 'navigation__button navigation__button--next'} onClick={nextList} >
          <span className="visually-hidden">Вперед</span>
          <ArrowButton />
        </button>
      </div>
    </>
  );
}
