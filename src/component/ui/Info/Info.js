import { Link } from 'react-router-dom';
import './style.css';

export function Info() {
  return (
    <ul className="header__list info">
      <li className="info__item">
        <Link className="info__link" to="/aboutus">О нас</Link>
      </li>
      <li className="info__item">
        <Link to="/shop" className="info__link">Каталог</Link>
      </li>
      <li className="info__item">
        <Link to="/blog" className="info__link">Блог</Link>
      </li>
    </ul>
  ) 
}