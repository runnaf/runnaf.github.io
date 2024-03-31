import { Link } from 'react-router-dom';
import React from 'react';

import { TitleMain } from '../../ui/TitleMain/TitleMain';
import { Login } from '../../ui/Login/Login';
import { Title } from '../../ui/Title/Title';
import './style.css';

export function LoginPage() {
  return (
    <section className="login">
      <TitleMain text={"Логин"} />
      <div className='login__container'>
        <Title text='Войдите' />
        <Login />
        <p className="login__container-content">
          или <Link className="login__register-link" to="/register"> &nbsp; &nbsp;зарегистрируйтесь</Link>
        </p>
      </div>
      <img src='/img/login.png' alt='soup' className='login__img'/>
    </section>
  )
}
