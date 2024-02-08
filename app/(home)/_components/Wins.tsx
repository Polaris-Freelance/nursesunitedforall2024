import React from 'react'

const Wins = () => {
    return (
        <section className="px-4 py-10 bg-primary sm:p-20 text-primary">
            <div className="flex items-center justify-center">
                <h2 className="pb-10 text-4xl font-bold mb:pb-0">WINS</h2>
            </div>
            <div className="grid items-center justify-center grid-cols-1 gap-8 text-white lg:grid-cols-3">
                <div className="flex flex-col items-start justify-start w-full h-auto gap-2 p-8 rounded-sm bg-primary group">
                    <h3 className="text-2xl font-bold">Win 1</h3>
                    <p className="font-normal leading-7 tracking-wide">This is a short description of Win 1</p>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto gap-2 p-8 rounded-sm bg-primary group">
                    <h3 className="text-2xl font-bold">Win 2</h3>
                    <p className="font-normal leading-7 tracking-wide">This is a short description of Win 2</p>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto gap-2 p-8 rounded-sm bg-primary group">
                    <h3 className="text-2xl font-bold">Win 3</h3>
                    <p className="font-normal leading-7 tracking-wide">This is a short description of Win 3</p>
                </div>
            </div>
        </section>

    )
}

export default Wins