import React from 'react'
import Header from './Header'
import Footer from './Footer'
import FooterNew from './FooterNew'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <FooterNew />
        </>
    )
}
