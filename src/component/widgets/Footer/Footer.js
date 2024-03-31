import { FooterContact } from "../../ui/FooterContact/FooterContact";
import { Info } from "../../ui/Info/Info";
import './style.css'

export function Footer() {
  return (
    <section className="footer section">
      <div className="footer__container">
        <FooterContact />
      </div>
      <Info />
    </section>
  )
}