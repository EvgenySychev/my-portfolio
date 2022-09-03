import React from 'react'
import s from './FooterContacts.module.scss'

export const FooterContacts = () => {

    return (
        <div className={s.footer}>
            <div className={s.socials}>
                <a href={'https://t.me/easychev'}>
                    <span>Telegram</span>
                </a>
                <a href={'https://github.com/EvgenySychev'}>
                    <span>GitHub</span>
                </a>
            </div>
        </div>)
}
