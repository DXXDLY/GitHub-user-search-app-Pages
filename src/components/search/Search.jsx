import React, { useContext, useState } from 'react'
import style from './css/Search.module.css'
import searchImg from '../../assets/icon-search.svg'
import { SwitchTheme, UserContext } from '../../context/context'

const Search = () => {
    const { setSearch } = useContext(UserContext)
    const { switchBtn } = useContext(SwitchTheme)
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={!switchBtn ? style.input : style.input_dark}>
                <div className={style.input__wrapper}>
                    <img src={searchImg} alt="search" className={style.input_img} />
                    <input type="text"
                        className={!switchBtn ? style.input_text : style.input_text_dark}
                        placeholder='Search GitHub username…'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <button className={style.input_search}>Search</button>
            </div>
        </form>
    )
}

export default Search