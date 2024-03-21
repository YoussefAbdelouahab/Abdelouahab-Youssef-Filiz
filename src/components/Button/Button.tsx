import './style.scss'

function Button(props: { text: string, href: string }) {

    return (
        <>
            <button className="contact_btn"><a href="#contact">{props.text}</a></button>
        </>
    )
}

export default Button
