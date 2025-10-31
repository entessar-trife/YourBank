import { Link } from 'react-router-dom'
import './IconGradient.css'

export default function IconGradient({img ,button}) {
    return (
        <>
        {!button &&<div className="Af-img-father">
            <div className="Af-img-son">
                <img src={img} alt="icon" />
            </div>
        </div>}
        {button &&<div className="Af-img-father">
            <Link className="Af-img-button">
                <img src={img} alt="icon" />
            </Link>
        </div>}
        </>
        
        
    )
}
