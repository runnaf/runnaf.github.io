import { Link } from 'react-router-dom';
import React from 'react';

import { TitleMain } from '../../ui/TitleMain/TitleMain';
import { SingUp } from '../../ui/SingUp/SingUp';

import './style.css';

export function Register() {
  return (
    <section className='register'>
      <TitleMain text={"Регистрация"} />
      <SingUp />
      <p>Уже есть аккаунт? <Link className='register__login-link' to="/login">Войдите</Link></p>
      <img className='sing-up__image' src='/img/register.png' alt='soup' />
    </section>
  )
}
