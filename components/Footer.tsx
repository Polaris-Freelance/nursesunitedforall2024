import React from 'react'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import FooterIcon from './FooterIcon'

const Footer = () => {
    return (
        <section className="flex flex-col gap-5 sm:p-20 items-center justify-center px-4 py-10 bg-white text-black">
            <div className="flex flex-row gap-4">
                <FooterIcon icon={faTwitter} link="https://twitter.com/" />
                <FooterIcon icon={faFacebook} link="https://facebook.com/" />
                <FooterIcon icon={faInstagram} link="https://instagram.com/" />
            </div>

            <p className="text-center font-normal border-2 border-primary px-4 py-2 text-sm sm:text-base md:text-md">
                PAID FOR BY [INSERT NAME HERE]
            </p>
            <p className="font-normal text-center"> &copy; 2021 [INSERT NAME HERE]. All rights reserved.</p>
        </section>
    )
}

export default Footer;