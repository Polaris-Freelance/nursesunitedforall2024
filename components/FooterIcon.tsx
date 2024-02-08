import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface FooterIconProps {
    icon: IconDefinition;
    link: string;
}

const FooterIcon = ({ icon, link }: FooterIconProps) => {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer group">
            <FontAwesomeIcon icon={icon} className="w-6 h-6 transition duration-300 ease-in-out opacity-75 hover:opacity-100 hover:text-secondary hover:transform hover:scale-110" />
        </a>
    )
}

export default FooterIcon