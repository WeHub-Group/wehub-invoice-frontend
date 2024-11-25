import React from 'react'

const Team = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet the team looking forward and building what seems to be the best Invoice generator.</p>
                </div>

                <div className="flex flex-wrap -m-2">
                    <TeamItemLayout name='Ronald Kelechi' position='Senior Fullstack Developer' />
                    <TeamItemLayout name='Divine Williams' position='Python Developer' />
                    <TeamItemLayout name='Gift Jackson' position='Frontend Developer' />
                    <TeamItemLayout name='Joshua Umahi' position='Frontend Developer' />
                    <TeamItemLayout name='Opeoluwa ' position='Backend Developer' />
                    <TeamItemLayout name='Favour Asun' position='UI/UX Designer' />
                    <TeamItemLayout name='Kamsi Kelechi' position='UI/UX Designer' />
                    <TeamItemLayout name='Seyi Aletan' position='Lead Graphic Designer' />
                </div>

            </div>
        </section>
    )
}

function TeamItemLayout(params) {
    return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 hover:border-primary hover:scale-105 transition-all border p-4 rounded-lg">
                {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{params?.name}</h2>
                    <p className="text-gray-500">{params.position}</p>
                </div>
            </div>
        </div>
    )
}
export default Team