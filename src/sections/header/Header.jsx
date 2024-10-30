import { useEffect } from 'react'
import HeaderImage from '../../assets/header.png'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <div className='header__right'>
        <h3 data-aos="fade-up">Abtey Gaelle</h3>
        <p data-aos="fade-up">
        Vous êtes à la recherche d'un développeur frontend ? Vous souhaitez faire réaliser votre site vitrine ou votre boutique de e-commerce ? Améliorer le référencement de votre site ? Envoyez-moi dès aujourd'hui les détails de votre projet pour un site Web moderne, réactif et hautement performant !
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Contactez-moi</a>
          <a href="#portfolio" className='btn light'>Mes projets</a>
        </div>
        <div className="header__skills" data-aos="fade-up">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
        </div>  
      </div>
    </header>
  )
}

export default Header