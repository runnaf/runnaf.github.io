import {
  Routes,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Blog } from '../../pages/Blog/Blog';
import { Home } from '../../pages/Home/Home';
import { Shop } from '../../pages/Shop/Shop';
import { FavoriteLogo } from '../../svg/FavoriteLogo';
import { CartLogo } from '../../svg/CartLogo';
import { SearchLogo } from '../../svg/SearchLogo';
import { UserLogo } from '../../svg/UserLogo';
import { AboutUs } from '../../pages/AboutUs/AboutUs';
import { Logo } from '../../ui/Logo/Logo';
import { Footer } from '../Footer/Footer';
import { Order } from '../../pages/Order/Order';
import { Cart } from '../сart/Cart';
import { getCartItems } from '../../../redux/cartSlice';
import { Info } from '../../ui/Info/Info';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { Register } from '../../pages/Register/Register';
import { getUser, removeUser } from '../../../redux/userSlice';
import { Error404 } from '../../pages/Error/Error404';

import './style.css';
import { filterSearch } from '../../../redux/searchSlice';


export function NavigationHeader () {
  const cartItems  =useSelector(getCartItems);
  const [state, setState] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const quantity = cartItems.reduce((total, cartIterms) => {
    return cartIterms.quantity + total
  }, 0)

  const changerMenuState = () => {
    setState(!state)
  }

  const getSearchWorld = (e) => {
    e.preventDefault();
    dispatch(filterSearch(searchTerm))
    setSearchTerm('')
  }

  const handleClick = () => {
    dispatch(filterSearch(searchTerm))
    setSearchTerm('')
  }

  const userEmail = useSelector(getUser)

  const handleClickUserLink = () => {
    dispatch(removeUser())
  }

  return (
    <HashRouter>
      <div className="content">
        <nav className={`header section ${state ? 'header--opened' : 'header--closed'}`}>
          <Logo />
          <button className="header__button-open" type="button" onClick={changerMenuState}>
            <span className="visually-hidden">Открыть меню</span>
          </button>
          <Info />
          <ul className="header__list user-info">
            <li className="user-info__item user-info__item--search">
            <Link to='/shop' onClick={handleClick}>
              <form className="user-info__form" onSubmit={(e)=>{getSearchWorld(e)}}>
                <div className="user-info__container">
                  <input className="user-info__field" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                  <div>
                    <span className="visually-hidden">Поиск</span>
                    <SearchLogo />
                  </div>                    
                </div>              
              </form>
              </Link> 
            </li>
            <li className="user-info__item">
              <Link className="user-info__link" to="/favorite">
                <span className="visually-hidden">Избранное</span>
                <FavoriteLogo />
              </Link>
            </li>
            <li className="user-info__item">
              <Link className="user-info__link" to={userEmail.email ? '/login' : '/register'} onClick={handleClickUserLink}>
                <span className="visually-hidden">Данные пользователя</span>
                <div className="user-info__user-container">
                  <UserLogo />
                  {userEmail.email ? <p>{userEmail.email}</p> : ''}
                </div>
              </Link>
            </li>
            <li className="user-info__item">
              <Link className="user-info__link" to="/cart">
                <span className="visually-hidden">Корзина</span>
                <CartLogo />
                <span className={quantity === 0 ? 'visually-hidden' : ''}>{quantity}</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/order" element={<Order />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>      
      <Footer />
    </HashRouter>
  )
}