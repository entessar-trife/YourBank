import React from 'react'
import TransIcon from '../../assets/imgs/Home_icons/Vector2.png'
import './TransactionBox.css'
export default function TransactionBox({ id, name, amount, opacityClass }) {
    return (
        <>
            <div className={`es-transBox ${opacityClass}`} id={id}>
                <div className="es-transBoxLeft">
                    <div className="es-icon">
                        <img src={TransIcon} alt="Transaction Icon" />
                    </div>
                    <div className="es-transDetails">
                        <span className='fw-300'>Transaction</span>
                        <span className='fw-400'>{name}</span>
                    </div>
                </div>
                <div className="es-transBoxRight fw-500">
                    {amount}
                </div>
            </div>
        </>
    )
}
