import React, { useState } from 'react'

import Header from '../header/Header'
import Profile from '../profile/Profile'
import Search from '../search/Search'
import style from './css/Main.module.css'

const Main = () => {
    return (
        <>
            <div className={style.main}>
                <Header />
                <Search />
                <Profile />
            </div>
        </>
    )
}

export default Main