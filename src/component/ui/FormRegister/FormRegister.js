import { useState } from "react"
import './style.css'

export function FormRegister({title, handleClick}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    return (
      <form className="register-form" onSubmit={(e)=>handleClick(e, email, password, setEmail, setPassword)}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" autoComplete="on" minLength={'6'}/>
        <button className="register-form__submit">{title}</button>
      </form>
  )
}