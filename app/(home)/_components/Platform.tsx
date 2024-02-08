"use server"
import React from 'react'
import PlatformCard from './PlatformCard';
import { promises as fs } from 'fs';

type PlatformData = {
    title: string;
    shortDescription: string;
    description: string;
}

const Platform = async () => {
    const file = await fs.readFile(process.cwd() + '/data/platform.json', 'utf8');
    const platformData: PlatformData[] = JSON.parse(file);

    return (
        <section className="gap-2 px-4 py-10 bg-white sm:p-20 text-primary">
            <div className="flex items-center justify-center">
                <h2 className="pb-10 text-4xl font-bold mb:pb-0">PLATFORM</h2>
            </div>
            <div className="grid items-center justify-center grid-cols-1 gap-8 text-white lg:grid-cols-3">
                {platformData.map((mission, index) => (
                    <PlatformCard
                        key={index}
                        title={mission.title}
                        shortDescription={mission.shortDescription}
                    />
                ))}
            </div>
        </section>
    )
}

export default Platform