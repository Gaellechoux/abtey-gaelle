import { Link } from "react-router-dom";
import contacts from './data'
import Swal from 'sweetalert2'
import './contact.css'
// import styles from './contact.css'
import Image from '../../assets/home.svg'
import Boutons from '../../components/Boutons'
// import {BsChatDotsFill} from 'react-icons/bs'
// import {IoIosCall} from 'react-icons/io'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a016f96c-a28b-494d-8b01-6689df2e18d5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
      event.target.reset();

    if (res.success) {
      Swal.fire({
        title: "Sucess!",
        text: "Votre message a été envoyé!",
        icon: "Merci"
      });
    }
  };

  return (
    <section id="contact">
      <h2>Contactez-moi</h2>
      <p>
      N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais. !
      </p>
      <div className="container contact__container">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
      <div className="formulaire_container">

        <div className="formulaire_form">
                <form onSubmit={onSubmit}>
                    <div className="inputGroup">
                      <label>Nom</label>
                      <input type="text" className="field" placeholder="Veillez remplir votre nom" name="name" required />
                    </div>
                    <div className="inputGroup">
                      <label>Prénom</label>
                      <input type="text" className="field" placeholder="Veillez remplir votre Prénom" name="Prenom" required />
                    </div>
                    <div className="inputGroup">
                      <label>E-mail</label>
                      <input type="email" className="field" placeholder="Veillez remplir un Email valide" name="email" required />
                    </div>
                    <div className="inputGroup">
                      <label>Téléphone</label>
                      <input type="text" className="field" placeholder="Veillez remplir numéro de téléphone" name="telephone" required />
                    </div>
                    <div className="inputGroup">
                      <label>Message</label>
                      <textarea name="message" className="field mess" placeholder="" required></textarea>
                    </div>
                    <Boutons text="Envoyer"/>
                </form>
            <p>En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la <Link to="/confidentialité" className="confident">Politique de confidentialité.</Link></p>
                        
        </div>
         
        <div className="formulaire_form">
            <img src={Image} alt="" />
        </div>

   </div>

   
    </section>
    
  )
}

export default Contact