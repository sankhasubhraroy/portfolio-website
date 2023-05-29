import React from 'react'
import ContactCard from '../../components/ContactCard/ContactCard'
import Heading from '../../components/Heading/Heading'

export default function Contact() {
    return (
        <section className='Contact'>
            <Heading
                svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 228 260" xmlSpace="preserve"><path d="M214 2H26v36h18a6 6 0 110 12H8a6 6 0 100 12h18v29h18a6 6 0 110 12H8a6 6 0 100 12h18v30h18a6 6 0 110 12H8a6 6 0 100 12h18v29h18a6 6 0 110 12H8a6 6 0 100 12h18v36h188c6.627 0 12-5.373 12-12V14c0-6.627-5.373-12-12-12zm-85 75.022c12.715 0 23.023 10.308 23.023 23.022 0 12.715-10.308 23.023-23.023 23.023s-23.023-10.307-23.023-23.022c0-12.715 10.308-23.023 23.023-23.023zM169 178H88v-27.386C88 138.726 97.726 129 109.614 129h37.772c11.888 0 21.614 9.726 21.614 21.614V178z"></path>
                </svg>}

                text='contact me'
            />
            <ContactCard />
        </section>
    )
}
