import React from 'react'
import s from './FooterContacts.module.scss'

export const FooterContacts = () => {

    return (
        <div className={s.footer}>
            <div className={s.socials}>
                <a className={s.telegram} href={'https://t.me/easychev'}>Telegram</a>
                <a className={s.git} href={'https://github.com/EvgenySychev'}>GitHub</a>
            </div>
        </div>)
}
