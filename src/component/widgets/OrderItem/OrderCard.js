import './style.css'

export function OrderCard({good}) {
  return (
    <>
      {good ? (
        <li className='order__item'>
          <img src={ good.image } alt= { good.name } width="298" height="413" />
          <p>{ good.name }</p>
          <p>{ good.totalPrice } руб.</p>
         </li>
      ) : ''}
    </>
  )
}