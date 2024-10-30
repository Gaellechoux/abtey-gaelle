import AboutImage from "../../assets/about.jpg";
import CV from '../../assets/cv.pdf'
import { HiDownload } from "react-icons/hi";
import data from './data'
import Card from '../../components/Card'
import './informations.css'

const informations = () => {
  return (
    <section id="informations" data-aos="fade-in">
      <div className="container informations__container">
        <div className="informations__left">
          <div className="informations__portrait">
            <img src={AboutImage} alt="Mon portrait" />
          </div>
        </div>
        <div className="informations__right">
          <h2>A Propos</h2>
          <div className="informations__cards">
            {
               data.map(item => (
                <Card 
                key={item.id} 
                for={item.id} className="informations__card">
                    <span className='informations__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                </Card>
            ))
            }

          </div>
          
          <h5>Hello je m'appelle Gaelle Abtey</h5>

          <p>développeur Web junior.</p>

          <p>
          J’ai travaillé pendant plusieurs années en tant que vendeuse, ce qui m’a permis d’acquérir de très bonnes compétences telles que l’organisation, l’écoute, le conseil ainsi que des qualités relationnelles importantes.
          </p>

          <p>
           Après la naissance de mon fils, j’ai décidé de faire une reconversion professionnelle dans le Développement Web, domaine qui m’intéressait depuis de nombreuses années.
           </p>

           <p>
          J’ai donc suivi la formation Développeur web avec OpenClassrooms une plateforme web de formation en ligne. Suite à l’obtention du Bac+2, Je continue donc à travailler chaque jour avec envie, motivation et des idées plein la tête.
          </p>

          <a href={CV} download className="btn primary">download CV
          <HiDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default informations