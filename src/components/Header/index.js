import React from 'react'

import style from './header.module.css'
import logo from "./images/ic_logo_UUi.svg"

const Header = () => {

    return (
        <header>
            <div className={style.header}>
                <img className={style.logo} src={logo} alt="img"/>
                <p className={style.title}>TRAVEL AGENCY</p>
            </div>
        </header>
    )
}

export default Header;