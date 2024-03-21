import Navbar from "./components/Navbar/Navbar"
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import './App.scss'
function App() {

  return (
    <>
      <Navbar />
      <section id="first" className="first_section">
        <div className="container_left">
          <h1>Bienvenue <br></br>chez Café Neko</h1>
          <p className="subtitle">L'endroit où le café rencontre les ronronnements</p>
          <p className="subsubtitle">Bienvenue dans notre univers où chaque tasse de café est accompagnée d'une dose d'amour félin.</p>
          <Button text="Nous contacter" href="#contact" />
        </div>
        <div className="container_right">
          <img src="/images/cat-hero-section.png" alt="" />
        </div>
      </section>

      <section id="second" className="second_section">
        <div className="container_left">
          <img src="/images/image-about-us.png" alt="" />
        </div>
        <div className="container_right">
          <h1 className="section_title">Qui sommes-nous ?</h1>
          <div className="container_right_content">
            <p className="section_content">Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.</p>
            <p className="section_content">Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux
              des félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats,
              un havre de paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.</p>
          </div>

        </div>
      </section>

      <section id="third" className="third_section">
        <h1 className="section_title green">Nos valeurs</h1>
        <div className="card_wrapper">
          <Card
            img="/icons/coffee-icon.svg"
            title="Passioné de Café"
            text="Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle.
           Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse."/>
          <Card
            img="/icons/cat-icon.svg"
            title="Bien-être des Chats"
            text="Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, 
            où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent."/>
          <Card
            img="/icons/plant-icon.svg"
            title="Engagement Environnemental"
            text="Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement
             et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets."/>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
