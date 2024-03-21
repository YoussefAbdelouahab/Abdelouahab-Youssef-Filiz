import './style.scss'
import Button from "../Button/Button"

function Footer() {
    return (
        <>
            <section id="contact" className='footer_container'>
                <div className='left_container'>
                    <h1 className='section_title'>Réservez Votre Table !</h1>
                    <p className="section_content">Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats.
                        Plongez dans l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins.
                        Réservez dès aujourd'hui et préparez-vous à vivre un moment magique de détente et de plaisir.</p>
                </div>
                <div className='right_container'>
                    <form target="_blank">
                        <div className='line'>
                            <div className='box'>
                                <label htmlFor="name">Nom*</label>
                                <input type="text" name="name" id="name" required />
                            </div>
                            <div className='box'>
                                <label htmlFor="lastname">Prénom*</label>
                                <input type="text" name="lastname" id="lastname" required />
                            </div>
                        </div >
                        <div className='line'>
                            <div className='box'>
                                <label htmlFor="phone">N° de téléphone*</label>
                                <input type="number" name="phone" id="phone" required />
                            </div>
                            <div className='box'>
                                <label htmlFor="mail">Adresse email*</label>
                                <input type="email" name="mail" id="mail" required />
                            </div>
                        </div>
                        <div className='line end'>
                            <Button text="Envoyer" href="#" />
                        </div>
                    </form >
                </div >
            </section >
        </>
    )
}

export default Footer
