import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { SwitchTheme, UserContext } from '../../context/context'
import useFormattedDate from '../../../hooks/useFormattedDate'

import geoImg from '../../assets/icon-location.svg'
import twitterImg from '../../assets/icon-twitter.svg'
import websiteImg from '../../assets/icon-website.svg'
import companyImg from '../../assets/icon-company.svg'

import style from './css/Profile.module.css'

const Profile = () => {
    const { search } = useContext(UserContext)
    const { switchBtn } = useContext(SwitchTheme)
    const [dataProfile, setDataProfile] = useState([])
    const formattedDate = useFormattedDate(dataProfile.created_at)

    useEffect(() => {
        let url = search
            ? `https://api.github.com/users/${search}`
            : `https://api.github.com/users/Octocat`
        axios.get(url)
            .then(res => setDataProfile(res.data))
            .catch(err => {
                if (err.response.status === 404) {
                    confirm('Not found')
                } else {
                    console.log(err);
                }
            });
    }, [search]);

    return (
        <div className={!switchBtn ? style.profile__wrapper : style.profile__wrapper_dark}>
            <div className={style.profile__header}>
                <div className={style.profile__img}>
                    <img src={dataProfile.avatar_url} alt="profileImg" />
                </div>
                <div className={style.profile__details}>
                    <div className={style.common_block}>
                        <p className={!switchBtn ? style.profile_name : style.profile_name_dark}>{dataProfile.name}</p>
                        <p className={!switchBtn ? style.profile_joined : style.profile_joined_dark}>Joined {formattedDate}</p>
                    </div>
                    <p className={style.profile_id}><a href={dataProfile.html_url}>@{dataProfile.login}</a></p>
                    <p className={!switchBtn ? style.profile_bio : style.profile_bio_dark}>{dataProfile.bio || "This profile has no bio"}</p>
                </div>
            </div>
            <div className={!switchBtn ? style.profile__data : style.profile__data_dark}>
                <div className={!switchBtn ? style.profile_repository : style.profile_repository_dark}><p>Repos</p><span>{dataProfile.public_repos}</span></div>
                <div className={!switchBtn ? style.profile_followers : style.profile_followers_dark}><p>Followers</p><span>{dataProfile.followers}</span></div>
                <div className={!switchBtn ? style.profile_following : style.profile_following_dark}><p>Following</p><span>{dataProfile.following}</span></div>
            </div>
            <div className={style.profile__bottom}>
                <div className={!switchBtn ? style.profile_geo : style.profile_geo_dark}><img src={geoImg} alt="geo" /><p>{dataProfile.location || 'Not Available'}</p><span> </span></div>
                <div className={!switchBtn ? style.profile_twitter : style.profile_twitter_dark}><img src={twitterImg} alt="twitter" />{dataProfile.twitter_username ? <a href={`https://twitter.com/` + dataProfile.twitter_username}>{dataProfile.twitter_username}</a> : <p>Not Available</p>}<span> </span></div>
                <div className={!switchBtn ? style.profile_link : style.profile_link_dark}><img src={websiteImg} alt="link" />{dataProfile.blog ? <a href={dataProfile.blog}>{dataProfile.blog}</a> : <p>Not Available</p>}<span></span></div>
                <div className={!switchBtn ? style.profile_company : style.profile_company_dark}><img src={companyImg} alt="bulding" /><p>{dataProfile.company || 'Not Available'}</p><span> </span></div>
            </div>
        </div>
    )
}

export default Profile