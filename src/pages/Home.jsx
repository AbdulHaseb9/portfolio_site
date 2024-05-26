import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Journey from '../components/Journey'
import Skills from '../components/Skills'
import Project from '../components/Project'
// import Notuse from '../components/notuse'

export default function Home() {
    return (
        <div>
            <Hero />
            <Skills />
            <Contact />
            <Journey />
            {/* <Notuse /> */}
            <Project />
        </div>
    )
}
