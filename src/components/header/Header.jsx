import React, { useContext } from 'react'
import style from './css/Header.module.css'
import moon from '../../assets/icon-moon.svg'
import sun from '../../assets/icon-sun.svg'
import { SwitchTheme } from '../../context/context'
const Header = () => {
    const { switchBtn, setSwitchBtn } = useContext(SwitchTheme)
    const handleClick = () => {
        setSwitchBtn(!switchBtn)
    }
    return (
        <div className={style.header}>
            <div className="logo">
                <p className={!switchBtn ? style.logo__text : style.logo__text_dark}>devfinder</p>
            </div>
            <div className={style.theme_switch} onClick={handleClick}>
                <p className={style.theme_name}>{switchBtn ? 'LIGHT' : 'DARK'}</p>
                <img src={switchBtn ? sun : moon} alt="sun/moon" />
            </div>
        </div>
    )
}

export default Header