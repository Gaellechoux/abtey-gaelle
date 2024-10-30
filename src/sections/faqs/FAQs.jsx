import { useEffect } from 'react'
import faqs from './data'
import FAQ from './FAQ'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './faqs.css'

const FAQs = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <section id="faqs">
      <h2>Questions fréquemment posées</h2>
      <p>
      Voici quelques questions que je reçois habituellement. Cliquez pour changer de réponse, et si vous avez encore des questions, envoyez-moi un message depuis la section contact !
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs