import { Link } from 'react-router-dom'
import "./style.css"

export function EmptyCart({children}) {
  return (
    <div className='cart__empty-container'>
      <img src={'/img/oups.png'} width='600px' alt='отсутвует товар' />
      <p>Упс...</p>
      {children ? children : <>
        <p>Кажется Вы еще не выбрали товары.</p>        
      </>}
      <p>У меня есть прекрасный выбор других страниц</p>
      <div className="cart__container-link">
        <Link to='/' className="cart__link-page">Главная страница </Link>
        <Link to='/shop' className="cart__link-page">Каталог товаров</Link>
        <Link to='/blog' className="cart__link-page">Блог</Link>
      </div>
    </div>
  )
}