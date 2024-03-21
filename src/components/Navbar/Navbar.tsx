import './style.scss'

function Navbar() {

    async function display_nav() {
        console.log("ok")
    }
    return (
        <>
            <div className='header'>
                <div className='nav_logo'>
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div className='nav_link'>
                    <ul>
                        <li><a href="#second">Qui sommes-nous ?</a></li>
                        <li><a href="#third">Nos valeurs</a></li>
                        <li className='green'><a href="#contact">Réservez !</a></li>
                    </ul>
                    <img src="/icons/menu-outline.svg" alt="" onClick={() => display_nav()} />
                </div>
            </div>
        </>
    )
}

export default Navbar
