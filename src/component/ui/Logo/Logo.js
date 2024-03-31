import { Link } from "react-router-dom";
import "./style.css"

export function Logo() {
  return (
    <Link className="logo" to="/"><img src={ '/img/logo.svg' } alt="Логотип" width="116" height="66" className="logo__image" /></Link>
  )
}