import { VKLogo } from "../../svg/VKLogo";
import { Logo } from "../../ui/Logo/Logo";
import '../../../App.css';
import { InstagramLogo } from "../../svg/InstagramLogo";
import { MailLogo } from "../../svg/MailLogo";

export function FooterContact() {
  return (
    <div className="footer__link-container">
      <Logo />
      <a className="footer__link-tel" href="tel:+78126843636">+7 684 36 36</a>
      <a href="https://yandex.ru/maps/?text=г.Санкт-Петербург ул.Ординарная 1" target="_blank" rel="noreferrer">г.Санкт-Петербург ул.Ординарная 1</a>
      <ul>
        <li>
          <a href="https://vk.com/runnaf" target="_blank" rel="noreferrer" className="footer__link-svg">
            <VKLogo />
            <p className="visually-hidden">vk</p>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="footer__link-svg">
            <InstagramLogo />
            <p className="visually-hidden">instagram</p>
          </a>
        </li>
        <li>
          <a href="mailto:blog@naturalstories.ru&body=привет" className="footer__link-svg">
            <MailLogo />
            <p className="visually-hidden">Напишите нам на почту</p>
          </a>
        </li>
      </ul>
    </div>
  )
}