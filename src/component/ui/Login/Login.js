import React from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { FormRegister } from '../FormRegister/FormRegister';
import { setUser } from '../../../redux/userSlice';
import { auth } from "../../../firebase";


export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e, email, password, setEmail, setPassword) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }));
        setEmail('')
        setPassword('')
        navigate('/');
      })
      .catch((error)=>{
        console.log(error.message)
        alert('неверный пароль')
        setPassword('')
      })
    }

  return (
    <div className='login__container-content'>
      <FormRegister handleClick = {handleLogin} title={'войти'}/>
    </div>
  )
}

