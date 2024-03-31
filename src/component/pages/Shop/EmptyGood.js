export function EmptyGood({handleClick}) {
  return (
    <div className='cart__empty-container'>
      <img src={'/img/oups.png'} width='600px' alt='отсутвует товар' />
      <p>Упс...</p>
      <p>Кажется мы ничего не нашли</p>
      <p>Вам могут понравится наши товары</p>    
      <div className="cart__container-link">
        <button onClick={handleClick} className="cart__link-page">Просмотреть все товары </button>
      </div>
    </div>
  )
}