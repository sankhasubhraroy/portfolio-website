import React from 'react'
import { motion } from 'framer-motion'
import ContactCard from '../../components/ContactCard/ContactCard'
import Heading from '../../components/Heading/Heading'
import PhoneIcon from '../../icons/PhoneIcon'

export default function Contact() {
    return (
        <motion.section
            className='Contact'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Heading
                svg={<PhoneIcon />}
                text='contact me'
            />
            <ContactCard />
        </motion.section>
    )
}
