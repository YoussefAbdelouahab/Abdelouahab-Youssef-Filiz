import './style.scss'

function Card(props: { img: string, title: string, text: string }) {

    return (
        <>
            <div className='card_container'>
                <img src={props.img} alt="" />
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </>
    )
}

export default Card
