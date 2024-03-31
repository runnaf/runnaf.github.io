import { Link } from 'react-router-dom';

import './style.css';

export function ButtonCart({path1, text1, path2, text2, getClosedModal}) {
  return (
    <div className="page">
      <Link to={path1 ? path1 : '/order'} className="page__link page__link--active" onClick={getClosedModal}>{text1 ? text1 : 'Оформить заказ'}</Link>
      <Link to={path2 ? path2 : '/shop'} className="page__link" onClick={getClosedModal}>{text2 ? text2 : 'Продолжить покупки'}</Link>
    </div>
  )
}
