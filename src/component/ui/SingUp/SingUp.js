import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormRegister } from '../FormRegister/FormRegister';
import { setUser } from '../../../redux/userSlice';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "./style.css"


export function SingUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e, email, password, setEmail, setPassword) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((user)=>{
        dispatch(setUser({
          email: user.user.email,
          id: user.user.uid,
          token: user.user.accessToken
        }));
        setEmail('')
        setPassword('')
        navigate('/');
      }).catch((error)=>{
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          alert('Вы уже зарегистрированы')
          navigate('/login');
        }
        console.log(error.message)
      }
      )
  }

  return (
    <div className='sing-up'>
      <FormRegister title={'зарегистрироваться'} handleClick= {handleRegister}/>
    </div>
  )
}
