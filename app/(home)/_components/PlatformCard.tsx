import Link from 'next/link';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface PlatformCardProps {
    title: string;
    shortDescription: string;
}

const PlatformCard = ({ title, shortDescription }: PlatformCardProps) => {
    return (
        <div className="flex flex-col items-start justify-start w-full h-auto gap-2 p-8 rounded-sm bg-primary group">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="font-normal leading-7 tracking-wide">{shortDescription}</p>
            <Link href={`/platform/${title}`} className="text-secondary font-bold underline">
                <span className="flex items-center gap-2">
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="hidden group-hover:block w-4 h-4 transition duration-300 ease-in-out" />
                </span>
            </Link>
        </div>
    )
}

export default PlatformCard
